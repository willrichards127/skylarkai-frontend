import { memo, useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import update from "immutability-helper";
import { XModal } from "../../../../../components/XModal";
import Templateview from "../../../../../components/TemplateView";
import {
  ISetup,
  ITemplate,
  ITemplateItem,
} from "../../../../../shared/models/interfaces";
import {
  useIngestFilesMutation,
  useSaveSetupMutation,
} from "../../../../../redux/services/setupApi";
import {
  addIdtoTemplateJson,
  convertTemplateJSON,
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
import {
  useCopyIngestedFilesMutation,
  useDeleteIngestedFilesMutation,
} from "../../../../../redux/services/vdrApi";

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
    onClose: (refresh?: boolean) => void;
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
    const [copyFiles, { isLoading: isCopying }] =
      useCopyIngestedFilesMutation();
    const [deleteFiles, { isLoading: isDeleting }] =
      useDeleteIngestedFilesMutation();
    const [executionReport] = useExecuteReportBackgroundMutation();

    const [items, setItems] = useState<ITemplateItem[]>([]);

    useEffect(() => {
      onExecute();
    }, [setup.id]);

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

      const vdrNodes = updatedSetup.nodes.filter(
        (node) => node.template_node_id === 1
      );

      if (vdrNodes.length) {
        for (let i = 0; i < vdrNodes.length; i++) {
          const properties = vdrNodes[i].properties;
          if (updatedSetup.id && properties) {
            const checkedFiles = properties.files.filter((f: any) => f.checked);
            const unCheckedFiles = properties.files.filter(
              (f: any) => !f.checked
            );

            if (checkedFiles.length) {
              await copyFiles({
                vdrId: properties.vdrId,
                graphId: updatedSetup.id,
                files: checkedFiles.map((f: any) => f.file_name),
              }).unwrap();
            }

            if (unCheckedFiles.length) {
              await deleteFiles({
                graphId: updatedSetup.id,
                files: unCheckedFiles.map((f: any) => f.file_name),
              }).unwrap();
            }
          }
        }
      }

      if (uploadFiles) {
        await ingestFiles({
          setupId: updatedSetup.id!,
          companyName: unitName,
          analysisType: "financial_diligence",
          // background: true,
          files: uploadFiles,
        }).unwrap();
      }

      const skyDBNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 46
      );

      const templateInvestNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 17
      );

      const templateTearNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 18
      );

      let templateData: ITemplate | undefined;
      let reportType: number | undefined;

      if (
        templateInvestNodeIndex > -1 &&
        skyDBNodeIndex > -1 &&
        updatedSetup.nodes[templateInvestNodeIndex].properties?.text
      ) {
        templateData = convertTemplateJSON(
          updatedSetup.nodes[templateInvestNodeIndex].properties!.text
        );
        reportType = 1;
      }

      if (
        templateTearNodeIndex > -1 &&
        skyDBNodeIndex > -1 &&
        updatedSetup.nodes[templateTearNodeIndex].properties?.text
      ) {
        templateData = convertTemplateJSON(
          updatedSetup.nodes[templateTearNodeIndex].properties!.text
        );
        reportType = 2;
      }

      if (templateData && reportType) {
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
              setupId: updatedSetup.id!,
              analysisType: "financial_diligence",
              reportType: reportType,
              report: {
                title: templateData.title,
                data: items,
                default_llm:
                  updatedSetup.nodes[openAINodeIndex].properties?.model ||
                  "OpenAI",
                recursion:
                  updatedSetup.nodes[openAINodeIndex].properties?.recursion ||
                  5,
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
            setupId: updatedSetup.id!,
            data: initializeHtmlResponse(report),
            queryType: reportName,
          }).unwrap();
          navigate(
            `/portal/reports/${generatedId}?reportName=${reportName}&setupId=${updatedSetup.id}&viewMode=active`
          );
          setCustomQueyring(false);
        }
      }
      onClose(true);
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
          if ("data" in resp && resp.data!.rating && resp.data!.rating >= 1) {
            result += `<h${depth.length + 3} class='heading-question'>${
              item.name
            }</h${depth.length + 3}>${
              marked.parse(resp.data!.content as string) as string
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
          {isCopying && isDeleting && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Typography variant="body1" sx={{ marginBottom: 8 }}>
                Cloning VDR...
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
