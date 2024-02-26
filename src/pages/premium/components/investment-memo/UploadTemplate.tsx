/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  TextField,
  Link,
  Typography,
  Divider,
  Stack,
  MenuItem,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FileUploader } from "../../../../components/FileUploader";
import { ICustomInstance } from "./interfaces";
import { investmentTemplateDict } from "../../../../shared/models/constants";

export const UploadTemplate = ({
  instance,
  onUploadedTemplate,
  onSelectDefaultTemplate,
  onUploadedCompanyFiles,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onUploadedTemplate: (file: File) => void;
  onSelectDefaultTemplate: (templateName: string) => void;
  onUploadedCompanyFiles: (files: File[]) => void;
  onNext: () => void;
  onGotoMain: () => void;
}) => {
  const [defaultTemplate, setDefaultTemplate] = useState<string>(
    Object.keys(investmentTemplateDict)[0]
  );

  const [uploadedTemplate, setUploadedTemplate] = useState<File | undefined>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onChangeDefaultTemplate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setDefaultTemplate(e.target.value);
      onSelectDefaultTemplate(e.target.value);
    },
    [onSelectDefaultTemplate]
  );

  const onTemplateFileUploaded = useCallback(
    (file: File) => {
      setUploadedTemplate(file);
      onUploadedTemplate(file);
    },
    [onUploadedTemplate]
  );

  const onCompanyFilesUploaded = useCallback(
    (files: File[]) => {
      setUploadedFiles(files);
      onUploadedCompanyFiles(files);
    },
    [onUploadedCompanyFiles]
  );

  useEffect(() => {
    setDefaultTemplate(
      instance.instance_metadata.template_name ||
        Object.keys(investmentTemplateDict)[0]
    );
    setUploadedTemplate(
      instance.instance_metadata.uploaded_template_file || undefined
    );
    setUploadedFiles(instance.instance_metadata.uploaded_files);
  }, [instance]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Create Investment Memo
          </Link>
          <Typography color="text.primary">
            Choose Template & Upload Company Specific Documents
          </Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onNext}
          disabled={!uploadedFiles.length}
        >
          Next
        </Button>
      </Box>
      <Stack spacing={2} mt={2}>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Choose Template
        </Typography>
        <Stack spacing={2} direction="row">
          <TextField
            select
            fullWidth
            value={defaultTemplate}
            onChange={onChangeDefaultTemplate}
            size="small"
          >
            {Object.keys(investmentTemplateDict).map((item, index) => (
              <MenuItem key={item} value={item} disabled={index !== 0}>
                {item}
              </MenuItem>
            ))}
          </TextField>
          <Typography sx={{ opacity: 0.7, textAlign: "center", mb: 1.5 }}>
            or
          </Typography>
          <Box sx={{ width: "100%" }}>
            <FileUploader
              initialFiles={uploadedTemplate ? [uploadedTemplate] : []}
              onUploadCompleted={(files) => onTemplateFileUploaded(files[0])}
              isOneFileOnly
              layoutDirection="column"
              cloud
            />
          </Box>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Upload Company Specific Documents
        </Typography>
        <FileUploader
          initialFiles={uploadedFiles}
          onUploadCompleted={(files) => onCompanyFilesUploaded(files)}
          multiple
          cloud
        />
      </Stack>
    </Box>
  );
};
