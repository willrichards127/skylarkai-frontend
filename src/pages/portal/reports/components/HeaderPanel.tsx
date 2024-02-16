import React, { memo } from "react";
import { Box, IconButton, Divider } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { XIconButton } from "../../../../components/buttons/XIconButton";
import { DeleteIcon } from "../../../../components/Svgs";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export const HeaderPanel = memo(
  ({
    top = 32,
    right = 32,
    onRerunReport,
    onSave,
    onDelete,
    onPrint,
    onChatWindow,
  }: {
    top?: number;
    right?: number;
    onRerunReport: () => void;
    onPrint: () => void;
    onDelete: () => void;
    onSave: () => void;
    onChatWindow: () => void;
  }) => {
    return (
      <Box
        sx={{
          position: "fixed",
          top,
          right,
          display: "flex",
          p: 1,
          gap: 1,
          bgcolor: "secondary.main",
          alignItems: "center",
          borderRadius: 2,
          mb: 1,
          zIndex: 1,
        }}
      >
        <IconButton href="/portal/reports">
          <ChevronLeftIcon />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <XIconButton variant="contained" onClick={onRerunReport}>
          <RestartAltIcon />
        </XIconButton>
        <Divider orientation="vertical" flexItem />
        <XIconButton variant="contained" onClick={onChatWindow}>
          <QuestionAnswerIcon />
        </XIconButton>
        <XIconButton variant="contained" onClick={onPrint}>
          <PrintIcon />
        </XIconButton>
        <XIconButton variant="outlined" onClick={onSave}>
          <SaveIcon />
        </XIconButton>
        <XIconButton variant="outlined" onClick={onDelete}>
          <DeleteIcon />
        </XIconButton>
      </Box>
    );
  }
);

HeaderPanel.displayName = "HeaderPanel";
