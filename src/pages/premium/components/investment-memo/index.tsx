/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, useRef } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateReport } from "./CreateReport";
import { ICustomInstance } from "./interfaces";
import { leftNavWidth } from "../../../../shared/models/constants";
import { Report } from "./Report";
import { UploadTemplate } from "./UploadTemplate";
import { ReviewFiles } from "./ReviewFiles";
import { DocumentChip } from "../../../../components/DocumentChip";
import { FileViewModal } from "../sub-components/FileViewModal";
import { investmentTemplateDict } from "../../../../shared/models/constants";

const InvestmentMemoFeature = ({ featureId }: { featureId: number }) => {
  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: {
      template_name: Object.keys(investmentTemplateDict)[0],
      template_content: "",
      uploaded_file_names: [],
      uploaded_files: [],
    },
  });
  const viewFileRef = useRef<File>();
  const [viewFileModal, showViewFileModal] = useState<boolean>(false);

  const onRemoveUploadedFile = useCallback((filename: string) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        ...prev.instance_metadata,
        uploaded_file_names: prev.instance_metadata.uploaded_file_names.filter(
          (name) => name !== filename
        ),
        uploaded_files: prev.instance_metadata.uploaded_files.filter(
          (file) => file.name !== filename
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
          template_name: Object.keys(investmentTemplateDict)[0],
          template_content: "",
          uploaded_template_file: undefined,
          uploaded_files: [],
          uploaded_file_names: [],
          report: "",
        },
      }),
      step: args.saved ? "report" : "upload_template",
    }));
  }, []);

  const onSecondStepCompleted = useCallback(() => {
    setInstance((prev) => ({
      ...prev,
      step: "review_files",
    }));
  }, []);

  // go to Upload page
  const onPrev = useCallback(() => {
    setInstance((prev) => ({
      ...prev,
      step: "upload_template",
    }));
  }, []);

  const onThirdStepCompleted = useCallback((args: ICustomInstance) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      step: "report",
    }));
  }, []);

  const onSelectDefaultTemplate = useCallback((name: string) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        ...prev.instance_metadata,
        template_name: name,
      },
    }));
  }, []);

  const onClickUploadedFile = useCallback((file: File) => {
    viewFileRef.current = file;
    showViewFileModal(true);
  }, []);

  const onUploadedTemplate = useCallback((file: File) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        ...prev.instance_metadata,
        template_name: file.name,
        uploaded_template_file: file,
      },
    }));
  }, []);

  const onUploadedCompanyFiles = useCallback((files: File[]) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        ...prev.instance_metadata,
        uploaded_file_names: files.map((file) => file.name),
        uploaded_files: files,
      },
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
        template_name: Object.keys(investmentTemplateDict)[0],
        template_content: "",
        uploaded_template_file: undefined,
        uploaded_files: [],
        uploaded_file_names: [],
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
            {!!instance.instance_metadata?.template_name && (
              <Box sx={{ pl: 3, py: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Selected Template
                </Typography>
                <Stack
                  spacing={1}
                  sx={{ maxHeight: 320, overflowY: "auto", pr: 4 }}
                >
                  <DocumentChip
                    label={instance.instance_metadata?.template_name}
                    deletable={false}
                    selected={false}
                    onClick={() => {}}
                  />
                </Stack>
              </Box>
            )}
            {instance.instance_metadata.uploaded_file_names.length > 0 && (
              <>
                <Box sx={{ pl: 3, py: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    Uploaded Files
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{ maxHeight: 320, overflowY: "auto", pr: 4 }}
                  >
                    {instance.instance_metadata.uploaded_files.map((file) => (
                      <DocumentChip
                        key={file.name}
                        label={file.name}
                        deletable={instance.step === "upload_template"}
                        selected={false}
                        onClick={() => onClickUploadedFile(file)}
                        onDelete={() => onRemoveUploadedFile(file.name)}
                      />
                    ))}
                  </Stack>
                </Box>
              </>
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
          {instance.step === "upload_template" && (
            <UploadTemplate
              instance={instance}
              onUploadedTemplate={onUploadedTemplate}
              onSelectDefaultTemplate={onSelectDefaultTemplate}
              onUploadedCompanyFiles={onUploadedCompanyFiles}
              onNext={onSecondStepCompleted}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "review_files" && (
            <ReviewFiles
              instance={instance}
              onPrev={onPrev}
              onNext={onThirdStepCompleted}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "report" && (
            <Report instance={instance} onGotoMain={onGotoMain} />
          )}
        </Box>
      </Box>
      {viewFileModal && viewFileRef.current && (
        <FileViewModal
          open={viewFileModal}
          onClose={() => showViewFileModal(false)}
          file={viewFileRef.current}
        />
      )}
    </Box>
  );
};

export default InvestmentMemoFeature;
