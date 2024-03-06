/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateChat } from "./CreateChat";
import { Chat } from "./Chat";
import { UploadDocuments } from "./UploadDocuments";

// import { FAQIcon } from "../../../../../components/Svgs";
import { leftNavWidth } from "../../../../shared/models/constants";
import { DocumentChip } from "../../../../components/DocumentChip";
import { ICustomInstance } from "./interface";
import { IEdgarFile } from "../../../../redux/interfaces";

const FinanceFeature = ({ featureId }: { featureId: number }) => {
  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: { docs: [] },
  });


  const onRemoveFile = useCallback((removeFilename: string) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        docs: prev.instance_metadata!.docs.filter(
          (doc: IEdgarFile) => doc.file_name !== removeFilename
        ),
      },
    }));
  }, []);

  const onViewFile = useCallback((filename: string) => {
    setInstance((prev) => ({
      ...prev,
      view_doc: filename,
    }));
  }, []);

  const onFirstStepCompleted = useCallback((args: Partial<ICustomInstance>) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      ...(!args.saved && {
        instance_metadata: {
          docs: [],
        },
      }),
      step: args.saved ? "chat" : "upload_documents",
    }));
  }, []);

  const onSecondStepCompleted = useCallback((args: ICustomInstance) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      view_doc: prev.instance_metadata!.docs[0].file_name,
      step: "chat",
    }));
  }, []);

  const onChangeViewFile = useCallback((filename: string) => {
    setInstance((prev) => ({ ...prev, view_doc: filename }));
  }, []);

  const onGotoMain = useCallback(() => {
    setInstance({
      step: "create_instance",
      feature_id: featureId,
      instance_name: "",
      company_name: "",
      ticker: "",
      instance_metadata: { docs: [] },
    });
  }, [featureId]);

  const onUploadedDocuments = useCallback(
    ({ file }: { file: File }) => {
      setInstance((prev) => ({
        ...prev,
        instance_metadata: {
          ...prev.instance_metadata,
          [`filename`]: file.name.replace(".pdf", ""),
        },
      }));
    },
    []
  );

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <LeftNavbar
        featureNavSection={
          <>
            <Divider />
            {instance.step !== "create_instance" && (
              <Box sx={{ pl: 3, py: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Selected Documents
                </Typography>
                <Stack
                  spacing={1}
                  sx={{ maxHeight: 240, overflowY: "auto", pr: 4 }}
                >
                  {(instance.instance_metadata?.docs || []).map((doc) => (
                    <DocumentChip
                      key={doc.file_name}
                      label={`${doc.form_type} ${doc.file_name}`}
                      deletable={
                        instance.step === "upload_documents" && !instance.saved
                      }
                      selected={
                        instance.step === "chat" &&
                        instance.view_doc === doc.file_name
                      }
                      onClick={() => onViewFile(doc.file_name)}
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
            <CreateChat instance={instance} onNext={onFirstStepCompleted} />
          )}
          {instance.step === "upload_documents" && (
            <UploadDocuments
              instance={instance}
              onUploadedDocuments={onUploadedDocuments}
              onNext={onSecondStepCompleted}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "chat" && (
            <Chat
              instance={instance}
              onChangeViewFile={onChangeViewFile}
              onGotoMain={onGotoMain}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FinanceFeature;
