import { memo, useCallback, useState } from "react";
import { Box, Button } from "@mui/material";
import { FileUploader } from "../../../../components/FileUploaderOld";
import { XModal } from "../../../../components/XModal";

export const FileUploadModal = memo(
  ({
    open,
    title,
    onUpladedFile,
    onClose,
  }: {
    title?: string;
    open: boolean;
    onUpladedFile: (file: File[]) => void;
    onClose: () => void;
  }) => {
    const [uploadFiles, setUploadFiles] = useState<File[]>([]);
    const onUpload = useCallback((_: any, pureFiles: File[]) => {
      setUploadFiles(pureFiles);
    }, []);

    const onImport = useCallback(() => {
      onUpladedFile(uploadFiles);
      onClose();
    }, [onUpladedFile, onClose, uploadFiles]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="sm"
        header={<Box mb={2}>{title || "Upload File"}</Box>}
        footer={
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={!uploadFiles.length}
              onClick={onImport}
            >
              Import
            </Button>
          </Box>
        }
      >
        <FileUploader initialFiles={[]} onUploadCompleted={onUpload} />
      </XModal>
    );
  }
);

FileUploadModal.displayName = "FileUploadModal";
