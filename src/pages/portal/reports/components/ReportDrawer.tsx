import { useCallback, useState } from "react";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { IndexView } from "../templates/IndexView";
import { DocumentChip } from "../../../../components/DocumentChip";
import { reportDrawerWidth } from "../../../../shared/models/constants";

export const ReportDrawer = ({
  uploadedFiles,
  onRemoveFiles,
  items,
}: {
  items: { key: string; value: any }[];
  onRemoveFiles: (type: string, filename: string) => void;
  uploadedFiles?: Record<string, File[]>;
}) => {
  const [open, setOpen] = useState(true);

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
          <Box textAlign="right">
            <IconButton color="primary" onClick={onToggleDrawer}>
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
