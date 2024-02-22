import { memo, useState } from "react";
import { Box, Button } from "@mui/material";
import {
  BotDarkIcon,
  // LikeIcon,
  // DislikeIcon,
  // RefreshIcon,
  // ExportIcon,
  CropIcon,
} from "../../../../components/Svgs";

import { FileUploadModal } from "./FileUploadModal";

export const BottomPanel = memo(
  ({
    onChatAssist,
    onUploadedFile,
    onRerun,
  }: {
    onUploadedFile: (type: string, file: File) => void;
    onChatAssist: () => void;
    onRerun: () => void;
  }) => {
    const [fileUploadModal, showFileUploadModal] = useState<boolean>(false);
    const [templateUploadModal, showTemplateUploadModal] =
      useState<boolean>(false);
    return (
      <Box
        sx={{
          px: 4,
          height: 60,
          zIndex: 1,
        }}
      >
        {/* <Box
          sx={{
            bgcolor: "black",
            height: 60,
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center", px: 2 }}>
            <Button
              size="small"
              variant="text"
              startIcon={<RefreshIcon />}
              sx={{ color: "white" }}
            >
              Refresh
            </Button>
            <Button
              size="small"
              variant="text"
              startIcon={<LikeIcon />}
              sx={{ color: "white" }}
            >
              Like
            </Button>
            <Button
              size="small"
              variant="text"
              startIcon={<DislikeIcon />}
              sx={{ color: "white" }}
            >
              Dislike
            </Button>
            <Button
              size="small"
              variant="text"
              startIcon={<ExportIcon />}
              sx={{ color: "white" }}
            >
              Export
            </Button>
          </Box>
        </Box> */}
        <Box sx={{ display: "flex", gap: 2, }}>
          <Button
            variant="contained"
            startIcon={<BotDarkIcon />}
            onClick={onChatAssist}
          >
            Modify & Chat with Skylark
          </Button>
          <Button variant="outlined" onClick={() => showFileUploadModal(true)}>
            Upload File
          </Button>
          <Button
            variant="outlined"
            onClick={() => showTemplateUploadModal(true)}
          >
            Upload Template
          </Button>
          <Button variant="outlined" onClick={onRerun}>Re-run</Button>
          <Box mr="auto" />
          <Button
            variant="outlined"
            onClick={() => showTemplateUploadModal(true)}
            sx={{ minWidth: 320, padding: "5px 10px" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box>Suport</Box>
              <CropIcon />
            </Box>
          </Button>
        </Box>
        {fileUploadModal && (
          <FileUploadModal
            open={fileUploadModal}
            onClose={() => showFileUploadModal(false)}
            onUpladedFile={(file) => onUploadedFile("file", file)}
          />
        )}
        {templateUploadModal && (
          <FileUploadModal
            title="Template Upload"
            open={templateUploadModal}
            onClose={() => showTemplateUploadModal(false)}
            onUpladedFile={(file) => onUploadedFile("template", file)}
          />
        )}
      </Box>
    );
  }
);

BottomPanel.displayName = "BottomPanel";
