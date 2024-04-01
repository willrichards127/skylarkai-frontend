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
  useGenerateCustomReportMutation,
  useGenerateReportMutation,
} from "../../../../../redux/services/reportApi";
import { useNavigate } from "react-router-dom";
import { longDateFormat } from "../../../../../shared/utils/basic";
import * as marked from "marked";
import { initializeHtmlResponse } from "../../../../../shared/utils/parse";

export const ExecutionModal = memo(
  ({
    open,
    onClose,
    setup,
  }: {
    open: boolean;
    onClose: (ret?: ISetup) => void;
    setup: ISetup;
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
      const skyDBNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 46
      );

      if (uploadFiles && skyDBNodeIndex > -1) {
        const updateIngestResponse = await ingestFiles({
          setupId: updatedSetup.id!,
          companyName: updatedSetup.name!,
          analysisType: "financial_diligence",
          files: uploadFiles,
        }).unwrap();

        if (skyDBNodeIndex > -1 && updateIngestResponse.length) {
          updatedSetup.nodes[skyDBNodeIndex].properties = {
            ...(updatedSetup.nodes[skyDBNodeIndex].properties || {}),
            files: [
              ...(updatedSetup.nodes[skyDBNodeIndex].properties?.files || []),
              ...updateIngestResponse,
            ],
          };
        }
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
          setItems(items);
          const filenames = updatedSetup.nodes[
            skyDBNodeIndex
          ].properties!.files.map((f: any) => f.file_name);
          setCustomQueyring(true);
          const ret = await handleCustomQuery(items, filenames);
          const report =
            `<h1 style="text-align: center;">Investment memo: ${
              updatedSetup.name
            }</h1>
          <p style="text-align: center;"><strong>${longDateFormat(
            new Date()
          )}</strong></p>` + ret;
          setCustomQueyring(false);
          const reportName = `${templateData.title}-${new Date().getTime()}`;
          const generatedId = await generateReport({
            setupId: setup.id!,
            data: initializeHtmlResponse(report),
            queryType: reportName,
          }).unwrap();
          navigate(
            `/portal/reports/${generatedId}?reportType=${reportName}&setupId=${setup.id}&viewMode=active`
          );
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
            analysis_type: "financial_diligence",
          });
          if ("data" in resp && resp.data.rating && resp.data.rating >= 1) {
            result += `<h${depth.length + 3} class='heading-question'>${
              item.name
            } - Rating: ${resp.data.rating}</h${depth.length + 3}>${
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
