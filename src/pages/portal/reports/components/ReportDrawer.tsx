import { useCallback, useState } from "react";
import {
  Box,
  Divider,
  // FormControlLabel,
  // Switch,
  IconButton,
  ButtonGroup,
  Stack,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EmailIcon from "@mui/icons-material/Email";
import { IndexView } from "../templates/IndexView";
import { FileUploadModal } from "./FileUploadModal";
import { DocumentChip } from "../../../../components/DocumentChip";
import { reportDrawerWidth } from "../../../../shared/models/constants";
import { IDNDContainer } from "../../../../shared/models/interfaces";

export const ReportDrawer = ({
  items,
  // isShowQuestion,
  uploadedFiles,
  onRemoveFiles,
  // onSwitchMode,
  onUploadedFiles,
  // onRerunReport,
  onSave,
  // onDelete,
  onPrint,
  onSendEmail,
}: {
  isShowQuestion?: boolean;
  items: IDNDContainer[];
  onSwitchMode: (showQuestion: boolean) => void;
  onRemoveFiles: (type: string, filename: string) => void;
  onUploadedFiles: (type: string, files: File[]) => void;
  onRerunReport: () => void;
  onPrint: () => void;
  // onDelete: () => void;
  onSave: () => void;
  onSendEmail: () => void;
  uploadedFiles?: Record<string, File[]>;
}) => {
  const [open, setOpen] = useState(false);
  const [fileUploadModal, showFileUploadModal] = useState<boolean>(false);
  const [templateFileUploadModal, showTemplateFileUploadModal] =
    useState<boolean>(false);
  const onToggleDrawer = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const onRemoveFile = useCallback(
    (type: string, filename: string) => {
      onRemoveFiles(type, filename);
    },
    [onRemoveFiles]
  );

  return (
    <Box
      sx={{
        position: "relative",
        width: open ? reportDrawerWidth : 60,
        height: "100%",
        bgcolor: "secondary.main",
      }}
    >
      {!open ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton color="primary" onClick={onToggleDrawer} sx={{ my: 1 }}>
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
          <Divider sx={{ width: "100%" }} />
          <ButtonGroup orientation="vertical" sx={{ pt: 1 }}>
            {/* <IconButton onClick={onRerunReport} title="Re-run report">
              <RestartAltIcon color="primary" />
            </IconButton> */}
            <IconButton onClick={onSendEmail} title="Send report via email">
              <EmailIcon color="primary" />
            </IconButton>
            <IconButton title="Print" onClick={onPrint}>
              <PrintIcon color="primary" />
            </IconButton>
            <IconButton title="Save" onClick={onSave}>
              <SaveIcon color="primary" />
            </IconButton>
            {/* <IconButton title="Delete">
              <DeleteForeverIcon color="primary" sx={{ fontSize: 26 }} />
            </IconButton> */}
          </ButtonGroup>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: open ? "block" : "none",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ButtonGroup>
              {/* <IconButton onClick={onRerunReport} title="Re-run report">
                <RestartAltIcon color="primary" />
              </IconButton> */}
              <IconButton onClick={onSendEmail} title="Send report via email">
                <EmailIcon color="primary" />
              </IconButton>
              <IconButton title="Print" onClick={onPrint}>
                <PrintIcon color="primary" />
              </IconButton>
              <IconButton title="Save" onClick={onSave}>
                <SaveIcon color="primary" />
              </IconButton>
              {/* <IconButton title="Delete">
                <DeleteForeverIcon color="primary" sx={{ fontSize: 26 }} />
              </IconButton> */}
            </ButtonGroup>
            <IconButton
              color="primary"
              onClick={onToggleDrawer}
              sx={{ ml: "auto" }}
            >
              <KeyboardDoubleArrowLeftIcon />
            </IconButton>
          </Box>
          {/* <Box py={1} textAlign="right">
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  color="primary"
                  checked={isShowQuestion}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onSwitchMode(e.target.checked)
                  }
                />
              }
              label={
                <small>{isShowQuestion ? "Show" : "Hide"} Questions</small>
              }
              labelPlacement="end"
            />
          </Box> */}
          <Divider />
          <Box sx={{ p: 2, height: 420, overflowY: "auto" }}>
            <IndexView items={items} />
          </Box>
          <Divider />
          {!!uploadedFiles && !!Object.keys(uploadedFiles).length && (
            <Box sx={{ p: 2 }}>
              <Box fontSize={12} fontWeight="bold" mb={0.5}>
                Uploaded Files
              </Box>
              <Stack
                spacing={0.5}
                sx={{
                  maxHeight: 146,
                  overflowY: "auto",
                }}
              >
                {Object.entries(uploadedFiles).map(([type, files]) =>
                  files.map((file) => (
                    <DocumentChip
                      key={`${type}-${file.name}`}
                      label={file.name}
                      selected={false}
                      deletable
                      onClick={() => {}}
                      onDelete={() => onRemoveFile(type, file.name)}
                    />
                  ))
                )}
              </Stack>
            </Box>
          )}
        </Box>
      )}
      {fileUploadModal && (
        <FileUploadModal
          title="Upload File"
          open={fileUploadModal}
          onClose={() => showFileUploadModal(false)}
          onUpladedFile={(files) => onUploadedFiles("file", files)}
        />
      )}
      {templateFileUploadModal && (
        <FileUploadModal
          title="Upload Template File"
          open={templateFileUploadModal}
          onClose={() => showTemplateFileUploadModal(false)}
          onUpladedFile={(files) => onUploadedFiles("file", files)}
        />
      )}
    </Box>
  );
};
