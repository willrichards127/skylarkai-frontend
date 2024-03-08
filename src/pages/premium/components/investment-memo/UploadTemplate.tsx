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
  onUploadedTemplate: (
    file: File,
    content: { category: string; questions: string[] }[]
  ) => void;
  onSelectDefaultTemplate: (
    templateName: string,
    content: { category: string; questions: string[] }[]
  ) => void;
  onUploadedCompanyFiles: (files: File[]) => void;
  onNext: (website?: string) => void;
  onGotoMain: () => void;
}) => {
  const [defaultTemplate, setDefaultTemplate] = useState<string>(
    Object.keys(investmentTemplateDict)[0]
  );

  const [uploadedTemplate, setUploadedTemplate] = useState<File | undefined>();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [companyUrl, setCompanyUrl] = useState<string>("");

  const onChangeDefaultTemplate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setDefaultTemplate(e.target.value);
      onSelectDefaultTemplate(
        e.target.value,
        investmentTemplateDict[e.target.value]
      );
    },
    [onSelectDefaultTemplate]
  );

  const onTemplateFileUploaded = useCallback(
    (file: File) => {
      if (file) {
        const reader = new FileReader();

        reader.onload = function (e: any) {
          try {
            const jsonData = JSON.parse(e.target.result);
            console.log("Parsed JSON:", jsonData);
            onUploadedTemplate(file, jsonData);
            // You can now work with the parsed JSON object (jsonData)
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        };

        reader.readAsText(file);
      }
      setUploadedTemplate(file);
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
    if (instance.company_url) setCompanyUrl(instance.company_url || "");
    setDefaultTemplate(
      instance.instance_metadata.template_name ||
        Object.keys(investmentTemplateDict)[0]
    );
    setUploadedTemplate(
      instance.instance_metadata.uploaded_template_file || undefined
    );
    setUploadedFiles(instance.instance_metadata.uploaded_files);
  }, [instance]);

  console.log(instance, 'instance===')

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
          onClick={() => onNext(companyUrl)}
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
          <Stack spacing={5} width="100%">
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
            <TextField
              label="Website URL(Optional)"
              size="small"
              value={companyUrl}
              onChange={(e) => setCompanyUrl(e.target.value)}
              fullWidth
            />
          </Stack>

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
              showFileList
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
          cloud
        />
      </Stack>
    </Box>
  );
};
