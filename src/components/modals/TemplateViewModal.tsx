import { memo } from "react";
import { Box } from "@mui/material";
import { XModal } from "../XModal";
import Templateview from "../TemplateView";
import { ITemplateItem } from "../../shared/models/interfaces";

export const TemplateViewModal = memo(
  ({
    open,
    onClose,
    data,
  }: {
    open: boolean;
    onClose: () => void;
    data: ITemplateItem[];
  }) => {
    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Template View</Box>}
        size="md"
      >
        <Box px={3}>
          <Templateview data={data} />
        </Box>
      </XModal>
    );
  }
);

TemplateViewModal.displayName = "TemplateViewModal";
