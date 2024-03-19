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
import { addIdtoTemplateJson } from "../../../../../components/TemplateView/utils";
import { useCustomQueryMutation } from "../../../../../redux/services/transcriptAPI";
import { parseCitation } from "../../../../../shared/utils/string";
import { useGenerateReportMutation } from "../../../../../redux/services/reportApi";
import { useNavigate } from "react-router-dom";

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
        delete fileUploadNode.properties["files"];
      }

      const updatedSetup = await saveSetup({
        setupId: setup.id,
        setup: {
          name: setup.name,
          nodes: setup.nodes,
          edges: setup.edges,
        },
      }).unwrap();

      const skyDBNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 46
      );

      if (uploadFiles && skyDBNodeIndex > -1) {
        const updateIngestResponse = await ingestFiles({
          setupId: updatedSetup.id!,
          companyName: updatedSetup.name!,
          analysisType: "transcript",
          files: uploadFiles,
        }).unwrap();

        if (skyDBNodeIndex > -1) {
          updatedSetup.nodes[skyDBNodeIndex].properties!.files = [
            ...(updatedSetup.nodes[skyDBNodeIndex].properties?.files || []),
            ...updateIngestResponse,
          ];
        }
      }

      const templateNodeIndex = updatedSetup.nodes.findIndex(
        (node) => node.template_node_id === 17
      );

      if (templateNodeIndex > -1 && skyDBNodeIndex > -1) {
        const items = addIdtoTemplateJson(
          JSON.parse(updatedSetup.nodes[templateNodeIndex].properties!.text)
        );
        setItems(items);
        const filenames = updatedSetup.nodes[
          skyDBNodeIndex
        ].properties!.files.map((f: any) => f.file_name);
        setCustomQueyring(true);
        const ret = await handleCustomQuery(items, filenames);
        const report =
          `# Investment memo: ${
            updatedSetup.name
          } \n ** Created At: ** ${new Date().toLocaleDateString()} \n` + ret;
        setCustomQueyring(false);
        const reportName = `Template-${new Date().getTime()}`;
        const generatedId = await generateReport({
          setupId: updatedSetup.id,
          data: report,
          queryType: reportName
        }).unwrap();
        console.log("==============", generatedId);
        navigate(
          `/portal/reports/${generatedId}?reportType=${reportName}&setupId=${setup.id}&viewMode=active`
        );
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
          result +=
            `${Array(depth.length + 2)
              .fill("#")
              .join("")} ${item.name} \n` + subResult;
        } else {
          const loadingObj = depth.reduceRight<any>(
            (acc, curr) => ({ [curr]: { children: acc } }),
            { [i]: { isLoading: { $set: true } } }
          );
          setItems((prev) => update(prev, loadingObj));
          // await new Promise((resolve) => setTimeout(resolve, 1000));
          const resp = await customQuery({
            filenames: filenames,
            question: item.name,
            analysis_type: "transcript",
          });
          if("data" in resp) {
            result += `${Array(depth.length + 3)
              .fill("#")
              .join("")} ${item.name} \n ${parseCitation(
              resp.data.content as string
            )} \n`;
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
            >
              <Typography variant="body1">Upadating graph...</Typography>
              <CircularProgress color="inherit" />
            </Box>
          )}
          {isIngestingFiles && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="body1">Ingesting files...</Typography>
              <CircularProgress color="inherit" />
            </Box>
          )}
          {isGeneratingReport && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="body1">Generating Report...</Typography>
              <CircularProgress color="inherit" />
            </Box>
          )}
          {customQuerying && <Templateview data={items} isEditMode={false} />}
        </Box>
      </XModal>
    );
  }
);

ExecutionModal.displayName = "ExecutionModal";
