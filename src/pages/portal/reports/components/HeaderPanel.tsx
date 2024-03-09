import { memo, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  colors,
  ButtonGroup,
  Divider,
} from "@mui/material";
import { CalendarIcon } from "../../../../components/Svgs";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import { FileUploadModal } from "./FileUploadModal";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import { useNavigate } from "react-router-dom";

export const HeaderPanel = memo(
  ({
    companyName,
    reportType,
    onUploadedFiles,
    onRerunReport,
    onSave,
    onDelete,
    onPrint,
    onSendEmail,
  }: {
    companyName: string;
    reportType: string;
    onUploadedFiles: (type: string, files: File[]) => void;
    onRerunReport: () => void;
    onPrint: () => void;
    onDelete: () => void;
    onSave: () => void;
    onSendEmail: () => void;
  }) => {
    const navigate = useNavigate();
    const [fileUploadModal, showFileUploadModal] = useState<boolean>(false);
    return (
      <Box
        sx={{
          py: 1,
          px: 2,
          bgcolor: "black",
          height: 66,
          zIndex: 1,
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => navigate("/portal/reports")}>
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Avatar
            sx={{ width: 48, height: 48, bgcolor: colors.blue[500] }}
            alt={companyName}
          >
            {companyName.substring(0, 1)}
          </Avatar>
          <Box>
            <Typography variant="body2">{companyName}</Typography>
            <Typography variant="body2" fontWeight="bold">
              {REPORTS_DICT[reportType].label} Report
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "end",
            fontSize: 13,
            pt: 2,
            pl: 4,
          }}
        >
          <CalendarIcon /> 2022-2024 Monthly
        </Box>
        <Box mr="auto" />
        <ButtonGroup
          variant="outlined"
          sx={{
            "&.MuiButtonGroup-outlined": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          }}
        >
          <IconButton
            size="small"
            onClick={() => showFileUploadModal(true)}
            title="Upload template"
          >
            <FormatIndentIncreaseIcon color="primary" />
          </IconButton>
          <Divider orientation="vertical" sx={{ width: "1px", height: 36 }} />
          <IconButton
            size="small"
            onClick={() => showFileUploadModal(true)}
            title="Upload files"
          >
            <UploadFileIcon color="primary" />
          </IconButton>
          <Divider orientation="vertical" sx={{ width: "1px", height: 36 }} />
          <IconButton
            size="small"
            onClick={onRerunReport}
            title="Re-run report"
          >
            <RestartAltIcon color="primary" />
          </IconButton>
        </ButtonGroup>
        <ButtonGroup
          variant="outlined"
          sx={{
            "&.MuiButtonGroup-outlined": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          }}
        >
          <IconButton
            size="small"
            onClick={onSendEmail}
            title="Send report via email"
          >
            <EmailIcon color="primary" />
          </IconButton>
          <Divider orientation="vertical" sx={{ width: "1px", height: 36 }} />
          <IconButton size="small" onClick={onPrint} title="Print">
            <PrintIcon color="primary" />
          </IconButton>
          <Divider orientation="vertical" sx={{ width: "1px", height: 36 }} />
          <IconButton size="small" onClick={onSave} title="Save">
            <SaveIcon color="primary" />
          </IconButton>
          <Divider orientation="vertical" sx={{ width: "1px", height: 36 }} />
          <IconButton size="small" onClick={onDelete} title="Delete">
            <DeleteForeverIcon color="primary" />
          </IconButton>
        </ButtonGroup>
        {fileUploadModal && (
          <FileUploadModal
            open={fileUploadModal}
            onClose={() => showFileUploadModal(false)}
            onUpladedFile={(files) => onUploadedFiles("file", files)}
          />
        )}
      </Box>
    );
  }
);

HeaderPanel.displayName = "HeaderPanel";
