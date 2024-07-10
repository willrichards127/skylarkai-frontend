/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateReport } from "./CreateReport";
import { SelectDocuments } from "./SelectDocuments";
import { Report } from "./Report";
import { DocumentChip } from "../../../../components/DocumentChip";
import { CitationModal } from "../../../../components/modals/CitationModal";
import { ICustomInstance } from "./interfaces";
import { leftNavWidth } from "../../../../shared/models/constants";
import { uniqueArr } from "../../../../shared/utils/basic";
import { ITranscript } from "../../../../redux/interfaces";

const SentimentalAnalysisFeature = ({ featureId }: { featureId: number }) => {
  const { sys_graph_id } = useSelector((state: any) => state.userAuthSlice);
  const fileRef = useRef<{ id?: number; file_name: string }>();
  const [fileModal, showFileModal] = useState<boolean>(false);

  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: { docs: [], db_files: [] },
  });

  const onRemoveFile = useCallback((removeFilename: string) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        docs: (prev.instance_metadata!.docs || []).filter(
          (doc: ITranscript) => doc.file_name !== removeFilename
        ),
      },
    }));
  }, []);

  const onFirstStepCompleted = useCallback((args: Partial<ICustomInstance>) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      ...(!args.saved && {
        instance_metadata: {
          ...args.instance_metadata,
          docs: [],
          report: "",
          criteria: [],
        },
      }),
      step: args.saved ? "report" : "select_documents",
    }));
  }, []);

  const onSecondStepCompleted = useCallback((args: ICustomInstance) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      step: "report",
    }));
  }, []);

  const onGotoMain = useCallback(() => {
    setInstance({
      step: "create_instance",
      feature_id: featureId,
      instance_name: "",
      company_name: "",
      ticker: "",
      instance_metadata: { criteria: [], docs: [], db_files: [], report: "" },
    });
  }, [featureId]);

  const onChangeDocuments = useCallback(({ docs }: { docs: ITranscript[] }) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        docs: uniqueArr(
          [...(prev.instance_metadata?.docs || []), ...docs],
          ["file_name"]
        ) as ITranscript[],
      },
    }));
  }, []);

  const onViewFile = useCallback((file: { id?: number; file_name: string }) => {
    fileRef.current = {
      ...(!!file.id && { id: file.id }),
      file_name: file.file_name,
    };
    showFileModal(true);
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <LeftNavbar
        featureNavSection={
          <>
            <Divider />
            {instance.step !== "create_instance" && (
              <Box sx={{ pl: 3, py: 2 }}>
                <Typography variant="body1" fontSize={12} gutterBottom>
                  Selected Documents
                </Typography>
                <Stack
                  spacing={1}
                  sx={{ maxHeight: 240, overflowY: "auto", pr: 4 }}
                >
                  {(instance.instance_metadata?.docs || []).map((doc) => (
                    <DocumentChip
                      key={doc.file_name}
                      label={doc.file_name}
                      deletable={
                        instance.step === "select_documents" && !instance.saved
                      }
                      selected={
                        instance.step === "chat" &&
                        instance.view_doc === doc.file_name
                      }
                      onClick={() => onViewFile(doc)}
                      onDelete={() => onRemoveFile(doc.file_name)}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </>
        }
      />
      <Box
        sx={{
          width: `calc(100% - ${leftNavWidth}px)`,
          overflowY: "auto",
          height: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {instance.step === "create_instance" && (
            <CreateReport instance={instance} onNext={onFirstStepCompleted} />
          )}
          {instance.step === "select_documents" && (
            <SelectDocuments
              instance={instance}
              onChangeDocuments={onChangeDocuments}
              onNext={onSecondStepCompleted}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "report" && (
            <Report instance={instance} onGotoMain={onGotoMain} />
          )}
        </Box>
      </Box>
      {fileModal && fileRef.current && (
        <CitationModal
          open={fileModal}
          onClose={() => showFileModal(false)}
          title={`File View: ${fileRef.current.file_name}`}
          data={{
            filename: fileRef.current.file_name,
            id: fileRef.current.id,
            quote: "",
            graph_id: sys_graph_id!,
            analysis_type: "compare",
          }}
        />
      )}
    </Box>
  );
};

export default SentimentalAnalysisFeature;
