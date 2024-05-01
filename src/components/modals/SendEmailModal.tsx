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
  }: {
    open: boolean;
    element: HTMLDivElement;
    prefix?: string;
    onClose: () => void;
  }) => {
    return (
      <XModal open={open} onClose={onClose} size="lg">
        <Box sx={{ p: 1, height: 720 }}>
          <EmailTemplate prefix={prefix} element={element} onClose={onClose} />
        </Box>
      </XModal>
    );
  }
);
