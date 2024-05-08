import { memo } from "react";
import { Box } from "@mui/material";
import { XModal } from "../XModal";
import { EmailTemplate } from "../../pages/portal/reports/templates/EmailTemplate";

export const SendEmailModal = memo(
  ({
    open,
    onClose,
    prefix,
    element,
    filename,
    initialTitle,
    initialContent,
  }: {
    open: boolean;
    element?: HTMLDivElement;
    filename?: string;
    prefix?: string;
    initialTitle?: string;
    initialContent?: string;
    onClose: () => void;
  }) => {
    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box fontWeight="bold">Send Email(s)</Box>}
        size="lg"
      >
        <Box sx={{ p: 1, height: 700 }}>
          <EmailTemplate
            prefix={prefix}
            element={element}
            filename={filename}
            initialTitle={initialTitle}
            initialContent={initialContent}
            onClose={onClose}
          />
        </Box>
      </XModal>
    );
  }
);
