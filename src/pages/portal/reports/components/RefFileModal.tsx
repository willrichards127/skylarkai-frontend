import { memo, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import { XModal } from "../../../../components/XModal";
import { scrollToAndHighlightText } from "../../../../shared/utils/string";

export const RefFileModal = memo(
  ({
    open,
    content,
    onClose,
  }: {
    open: boolean;
    content: {
      filename: string;
      text_content: string;
      quote_content: string;
    };
    onClose: () => void;
  }) => {
    const fileContainerRef = useRef<HTMLDivElement>();

    useEffect(() => {
      const timer = setTimeout(() => {
        scrollToAndHighlightText(
          fileContainerRef.current!,
          content.quote_content
        );
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, [content]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="md"
        header={<Box mb={2}>{content.filename}</Box>}
        footer={
          <Box sx={{ textAlign: "right" }}>
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
          </Box>
        }
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            overflowY: "auto",
            color: "black",
            bgcolor: "white",
            fontSize: 12,
            p: 4,
          }}
          ref={fileContainerRef}
        >
          {content.text_content}
        </Box>
      </XModal>
    );
  }
);
