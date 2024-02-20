import React, { memo, useCallback, useEffect, useState } from "react";
import { Typography, Box, LinearProgress } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useDropzone } from "react-dropzone";

export const FileUploader = memo(
  ({
    loading,
    initialFiles,
    onUploadCompleted,
  }: {
    loading?: boolean;
    initialFiles?: {
      filename: string;
      filesize: number;
      filetype: string;
      location: string;
    }[];
    onUploadCompleted: (files: any, pureFiles: any) => void;
  }) => {
    const [uploadedFiles, setUploadedFiles] = useState<any>([]);
    const onDrop = useCallback(
      (acceptedFiles: any) => {
        const files = acceptedFiles.map((af: any) => ({
          filename: af.name,
          size: af.size,
          filetype: af.type,
          location: af.path,
        }));
        setUploadedFiles(files);
        onUploadCompleted(files, acceptedFiles);
      },
      [onUploadCompleted]
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    useEffect(() => {
      if (!initialFiles || !initialFiles.length || !initialFiles[0].filename)
        return;
      setUploadedFiles(initialFiles);
    }, [initialFiles]);
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Box
          sx={{
            bgcolor: "secondary.dark",
            borderRadius: 2,
            border: "1px solid",
            borderColor: "secondary.light",
            textAlign: "center",
            p: 1,
          }}
        >
          {loading ? (
            <LinearProgress />
          ) : (
            <>
              <CloudUploadOutlinedIcon sx={{ fontSize: 64 }} />
              <Typography variant="body1">
                Click to upload or drag and drop
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                (.pdf, .txt, .csv, .html)
              </Typography>
            </>
          )}
        </Box>
        <Box className="nowheel" sx={{ maxWidth: 320, maxHeight: 220, overflowY: "auto" }}>
          {!!uploadedFiles.length &&
            uploadedFiles.map((file: any, index: number) => (
              <Typography
                key={file.filename + file.filetype}
                variant="subtitle2"
              >
                File {index + 1}: {file.filename}
              </Typography>
            ))}
        </Box>
      </div>
    );
  }
);

FileUploader.displayName = "FileUploader";
