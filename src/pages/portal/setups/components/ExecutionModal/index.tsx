import { memo, useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import update from "immutability-helper";
import { XModal } from "../../../../../components/XModal";
import Templateview from "../../../../../components/TemplateView";
import { ISetup, ITemplateItem } from "../../../../../shared/models/interfaces";
import {
  useIngestFilesMutation,
  useSaveSetupMutation,
} from "../../../../../redux/services/setupApi";
import {
  addIdtoTemplateJson,
  convertJSON,
} from "../../../../../components/TemplateView/utils";
import { useCustomQueryMutation } from "../../../../../redux/services/transcriptAPI";
import {
  useExecuteReportBackgroundMutation,
  useGenerateCustomReportMutation,
  useGenerateReportMutation,
} from "../../../../../redux/services/reportApi";
import { useNavigate } from "react-router-dom";
import { longDateFormat } from "../../../../../shared/utils/basic";
import * as marked from "marked";
import { initializeHtmlResponse } from "../../../../../shared/utils/parse";
import { useConvertToGraphMutation } from "../../../../../redux/services/vdrApi";

const isBackground = true;
export const ExecutionModal = memo(
  ({
    open,
    onClose,
    setup,
    unitId,
    unitName,
  }: {
    open: boolean;
    onClose: (ret?: ISetup) => void;
    setup: ISetup;
    unitId: number;
    unitName: string;
  }) => {
    const navigate = useNavigate();

    const [customQuerying, setCustomQueyring] = useState<boolean>(false);

    const [saveSetup, { isLoading: isSavingSetup }] = useSaveSetupMutation();
    const [ingestFiles, { isLoading: isIngestingFiles }] =
      useIngestFilesMutation();
    const [generateReport, { isLoading: isGeneratingReport }] =
      useGenerateReportMutation();
    const [generateCustomReport] = useGenerateCustomReportMutation();
    const [customQuery] = useCustomQueryMutation();
    const [convertToGraph] = useConvertToGraphMutation();
    const [executionReport] = useExecuteReportBackgroundMutation();

    const [items, setItems] = useState<ITemplateItem[]>([]);

    useEffect(() => {
      onExecute();
    }, [setup]);

    const onExecute = async () => {
      let uploadFiles: File[] | undefined = undefined;

      const fileUploadNode = setup.nodes.find(
        (node) => node.template_node_id === 2
      );

      if (
        fileUploadNode &&
        fileUploadNode.template_node_id === 2 &&
        fileUploadNode.properties &&
        "files" in fileUploadNode.properties
      ) {
        uploadFiles = fileUploadNode.properties["files"];
      }

      const updatedSetupResponse = await saveSetup({
        unitId,
        setupId: setup.id,
        setup: {
          name: setup.name,
          nodes: setup.nodes,
          edges: setup.edges,
        },
      }).unwrap();

      const updatedSetup: ISetup = JSON.parse(
        JSON.stringify(updatedSetupResponse)
      );

      const vdrNodes = setup.nodes.filter(
        (node) => node.template_node_id === 1
      );

      let ingestedFiles: any = [];
      if (vdrNodes.length) {
        for (let i = 0; i < vdrNodes.length; i++) {
          const properties = vdrNodes[i].properties;
          if (
            setup.id &&
            properties &&
            properties.files.filter((f: any) => f.checked).length
          ) {
            const convertResponse = await convertToGraph({
              vdrId: properties.vdrId,
              graphId: setup.id,
              files: properties!.files
                .filter((f: any) => f.checked)
                .map((f: any) => f.file_name),
            }).unwrap();
            ingestedFiles = [
              ...ingestedFiles,
              ...convertResponse.files_moved.map((f: string) => ({
                file_name: f,
              })),
            ];
          }
        }
      }

      if (uploadFiles) {
        const updateIngestResponse = await ingestFiles({
          setupId: updatedSetup.id!,
          companyName: unitName,
          analysisType: "financial_diligence",
          // background: true,
          files: uploadFiles,
        }).unwrap();

        ingestedFiles = [...ingestedFiles, ...updateIngestResponse];
      }

      const skyDBNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 46
      );

      if (skyDBNodeIndex > -1 && ingestedFiles.length) {
        updatedSetup.nodes[skyDBNodeIndex].properties = {
          ...(updatedSetup.nodes[skyDBNodeIndex].properties || {}),
          files: [
            ...(updatedSetup.nodes[skyDBNodeIndex].properties?.files || []),
            ...ingestedFiles,
          ].filter(
            (v, i, a) => a.findIndex((v2) => v2.file_name === v.file_name) === i
          ),
        };
      }

      const templateNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 17
      );

      if (
        templateNodeIndex > -1 &&
        skyDBNodeIndex > -1 &&
        updatedSetup.nodes[templateNodeIndex].properties?.text
      ) {
        const templateData = convertJSON(
          updatedSetup.nodes[templateNodeIndex].properties!.text
        );

        if (templateData) {
          const items = addIdtoTemplateJson(templateData.data, {
            excludeUnChecked: true,
          });

          if (isBackground) {
            const openAINodeIndex = updatedSetup.nodes.findIndex(
              (node) => node.template_node_id == 7
            );
            if (openAINodeIndex > -1) {

              await executionReport({
                unitName,
                setupId: setup.id!,
                analysisType: "financial_diligence",
                report: {
                  title: templateData.title,
                  data: items,
                  default_llm: updatedSetup.nodes[openAINodeIndex].properties?.model,
                  recursion: updatedSetup.nodes[openAINodeIndex].properties?.recursion,
                },
              }).unwrap();
            }
          } else {
            setItems(items);

            setCustomQueyring(true);
            const filenames = updatedSetup.nodes[
              skyDBNodeIndex
            ].properties!.files.map((f: any) => f.file_name);
            const ret = await handleCustomQuery(items, filenames);
            const report =
              `<h1 style="text-align: center;">Investment memo: ${
                updatedSetup.name
              }</h1>
            <p style="text-align: center;"><strong>${longDateFormat(
              new Date()
            )}</strong></p>` + ret;

            const reportName = `${templateData.title}-${
              new Date().getTime() % 1000
            }`;

            const generatedId = await generateReport({
              setupId: setup.id!,
              data: initializeHtmlResponse(report),
              queryType: reportName,
            }).unwrap();
            navigate(
              `/portal/reports/${generatedId}?reportName=${reportName}&setupId=${setup.id}&viewMode=active`
            );
            setCustomQueyring(false);
          }
        }
      }

      onClose(updatedSetup);
    };

    const handleCustomQuery = async (
      templateItems: ITemplateItem[],
      filenames: string[],
      depth: number[] = []
    ) => {
      let result: string = "";
      for (let i = 0; i < templateItems.length; i++) {
        const item = templateItems[i];
        if (item.children) {
          const subResult = await handleCustomQuery(item.children, filenames, [
            ...depth,
            i,
          ]);
          if (item.template) {
            const customResult: any = await generateCustomReport({
              setupId: setup.id!,
              template: item.template,
              data: subResult,
            }).unwrap();
            result +=
              `<h${depth.length + 2}>${item.name}</h${depth.length + 2}>` +
              customResult.filled_template;
          } else {
            result +=
              `<h${depth.length + 2}>${item.name}</h${depth.length + 2}>` +
              subResult;
          }
        } else {
          const llmNode = setup.nodes.find((node) =>
            node.attributes.graph_node_id.startsWith("LLM")
          );

          const loadingObj = depth.reduceRight<any>(
            (acc, curr) => ({ [curr]: { children: acc } }),
            { [i]: { isLoading: { $set: true } } }
          );
          setItems((prev) => update(prev, loadingObj));
          // await new Promise((resolve) => setTimeout(resolve, 1000));
          const resp = await customQuery({
            graph_id: setup.id,
            filenames: filenames,
            question: item.name,
            company_name: unitName,
            analysis_type: "financial_diligence",
            llm: llmNode?.properties?.model || "OpenAI",
            recursion: llmNode?.properties?.recursion || 5,
          });
          if ("data" in resp && resp.data.rating && resp.data.rating >= 1) {
            result += `<h${depth.length + 3} class='heading-question'>${
              item.name
            }</h${depth.length + 3}>${
              marked.parse(resp.data.content as string) as string
            }`;
          }
          const successObj = depth.reduceRight<any>(
            (acc, curr) => ({ [curr]: { children: acc } }),
            { [i]: { isLoading: { $set: false }, isSuccess: { $set: true } } }
          );
          setItems((prev) => update(prev, successObj));
        }
      }
      return result;
    };

    return (
      <XModal
        open={open}
        disableBackdropClose={
          isSavingSetup ||
          isIngestingFiles ||
          isGeneratingReport ||
          customQuerying
        }
        onClose={onClose}
        header={<Box textAlign="center">Execute Graph</Box>}
        size="md"
      >
        <Box height={400} overflow={"auto"}>
          {isSavingSetup && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Typography variant="body1" sx={{ marginBottom: 8 }}>
                Upadating graph...
              </Typography>
              <CircularProgress />
            </Box>
          )}
          {isIngestingFiles && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Typography variant="body1" sx={{ marginBottom: 8 }}>
                Ingesting files...
              </Typography>
              <CircularProgress />
            </Box>
          )}
          {isGeneratingReport && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Typography variant="body1" sx={{ marginBottom: 8 }}>
                Generating Report...
              </Typography>
              <CircularProgress />
            </Box>
          )}
          {customQuerying && <Templateview data={items} isEditMode={false} />}
        </Box>
      </XModal>
    );
  }
);

ExecutionModal.displayName = "ExecutionModal";
