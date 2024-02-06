/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateReport } from "./CreateReport";
import { UploadDocuments } from "./UploadDocuments";
import { Report } from "./Report";
import { DocumentChip } from "../../../../components/DocumentChip";
import { ICustomInstance } from "./interfaces";
import { leftNavWidth } from "../../../../shared/models/constants";

const CompareDocumentsFeature = ({ featureId }: { featureId: number }) => {
  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: {},
  });

  const onUploadedDocuments = useCallback(
    ({ fileIndex, file }: { fileIndex: number; file: File }) => {
      setInstance((prev) => ({
        ...prev,
        instance_metadata: {
          ...prev.instance_metadata,
          [`filename${fileIndex}`]: file.name.replace(".pdf", ""),
        },
      }));
    },
    []
  );

  const onRemoveFile = useCallback((fileIndex: number) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        ...prev.instance_metadata,
        [`file${fileIndex}`]: null,
      },
    }));
  }, []);

  const onViewFile = useCallback(() => {}, []);

  const onFirstStepCompleted = useCallback((args: Partial<ICustomInstance>) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      ...(!args.saved && {
        instance_metadata: {
          filename0: undefined,
          filename1: undefined,
          criteria: [],
          report: "",
        },
      }),
      step: args.saved ? "report" : "upload_documents",
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
      instance_metadata: {
        filename0: undefined,
        filename1: undefined,
        criteria: [],
        report: "",
      },
    });
  }, [featureId]);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <LeftNavbar
        featureNavSection={
          <>
            <Divider />
            {instance.step !== "create_instance" && (
              <Box sx={{ pl: 3, py: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Uploaded Documents
                </Typography>
                <Stack
                  spacing={1}
                  sx={{ maxHeight: 320, overflowY: "auto", pr: 4 }}
                >
                  {instance.instance_metadata?.filename0 && (
                    <DocumentChip
                      label={instance.instance_metadata?.filename0}
                      deletable={instance.step === "upload_documents"}
                      selected={false}
                      onClick={() => onViewFile()}
                      onDelete={() => onRemoveFile(0)}
                    />
                  )}
                  {instance.instance_metadata?.filename1 && (
                    <DocumentChip
                      label={instance.instance_metadata?.filename1}
                      deletable={instance.step === "upload_documents"}
                      selected={false}
                      onClick={() => onViewFile()}
                      onDelete={() => onRemoveFile(1)}
                    />
                  )}
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
          {instance.step === "upload_documents" && (
            <UploadDocuments
              instance={instance}
              onUploadedDocuments={onUploadedDocuments}
              onNext={onSecondStepCompleted}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "report" && (
            <Report instance={instance} onGotoMain={onGotoMain} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CompareDocumentsFeature;
