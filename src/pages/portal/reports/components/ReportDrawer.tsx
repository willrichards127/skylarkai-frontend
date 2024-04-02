import { useCallback, useState } from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  Switch,
  IconButton,
  Stack,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { IndexView } from "../templates/IndexView";
import { DocumentChip } from "../../../../components/DocumentChip";
import { reportDrawerWidth } from "../../../../shared/models/constants";
import { IDNDContainer } from "../../../../shared/models/interfaces";

export const ReportDrawer = ({
  isShowQuestion,
  uploadedFiles,
  onRemoveFiles,
  onSwitchMode,
  items,
}: {
  isShowQuestion?: boolean;
  items: IDNDContainer[];
  onSwitchMode: (showQuestion: boolean) => void;
  onRemoveFiles: (type: string, filename: string) => void;
  uploadedFiles?: Record<string, File[]>;
}) => {
  const [open, setOpen] = useState(false);

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
      }}
    >
      {!open ? (
        <IconButton
          color="primary"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
          onClick={onToggleDrawer}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: open ? "block" : "none",
            bgcolor: "secondary.main",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", pl: 4 }}>
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
            <IconButton
              color="primary"
              onClick={onToggleDrawer}
              sx={{ ml: "auto" }}
            >
              <KeyboardDoubleArrowLeftIcon />
            </IconButton>
          </Box>
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
    </Box>
  );
};
