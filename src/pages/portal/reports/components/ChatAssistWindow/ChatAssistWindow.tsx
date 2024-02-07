import React, { memo, useCallback, useState } from "react";
import Split from "react-split";
import { Box, Button, TextField, IconButton, colors } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { XPanel } from "../../../../../components/XPanel";
import "./split.css";

const CHAR_LIMIT = 300;

export const ChatAssistWindow = memo(
  ({
    width = 840,
    height = 640,
    onClose,
  }: {
    width?: number;
    height?: number;
    onClose: () => void;
  }) => {
    const [text, setText] = useState<string>("");

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.value.length <= CHAR_LIMIT) {
          setText(e.target.value);
        }
      },
      []
    );
    return (
      <XPanel
        sxProps={{ width, height }}
        sxBodyProps={{ height: "100%", p: 0 }}
        header={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>AI Chatbot</Box>
            <IconButton onClick={onClose}>
              <CloseIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        }
      >
        <Split
          className="split"
          sizes={[40, 60]}
          minSize={100}
          expandToMin={false}
          gutterSize={8}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <Box sx={{ height: "100%", pt: 2, px: 1, bgcolor: colors.grey[900] }}>
            <Box textAlign="right" fontSize={12}>
              {text.length}/{CHAR_LIMIT}
            </Box>
            <TextField
              fullWidth
              multiline
              value={text}
              onChange={onChange}
              placeholder="Enter your iniputs..."
              rows={12}
              sx={{
                bgcolor: "rgba(0, 0, 0.6)",
                "& .MuiInputBase-root": { fontSize: 12 },
              }}
            />
            <Box sx={{ fontSize: 10, color: colors.grey[600] }}>
              Write a prompt about the provided top.
            </Box>
            <Box textAlign="right" mt={2}>
              <Button variant="contained" size="small">
                Generate
              </Button>
            </Box>
          </Box>
          <Box sx={{ height: "100%", p: 1 }}>
            <Box fontWeight="bold" fontSize={12} my={1}>
              Output
            </Box>
            <Box
              sx={{
                borderRadius: 1,
                bgcolor: "rgba(0, 0, 0.6)",
                minHeight: height - 120,
                width: "100%",
              }}
            ></Box>
          </Box>
        </Split>
      </XPanel>
    );
  }
);

ChatAssistWindow.displayName = "ChatAssistWindow";
