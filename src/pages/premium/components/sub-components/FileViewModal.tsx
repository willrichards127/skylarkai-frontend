import { memo, useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { XModal } from "../../../../components/XModal";

export const FileViewModal = memo(
  ({
    open,
    file,
    onClose,
  }: {
    open: boolean;
    file: File;
    isSavedFile?: boolean;
    onClose: () => void;
  }) => {
    const [fileContent, setFileContent] = useState<string>("");

    useEffect(() => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setFileContent(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }, [file]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="lg"
        header={<Box mb={2}>{file.name}</Box>}
        footer={
          <Box sx={{ textAlign: "right" }}>
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
          </Box>
        }
      >
        {fileContent && (
          <Box
            sx={{
              height: 720,
              width: "100%",
            }}
          >
            <iframe src={fileContent} width="100%" height="100%" />
          </Box>
        )}
      </XModal>
    );
  }
);
