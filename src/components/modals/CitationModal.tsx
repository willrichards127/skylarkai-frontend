import { memo } from "react";
import { XModal } from "../XModal";
import { Box } from "@mui/material";
import { PdfViewer } from "../PDFViewer";

export const CitationModal = memo(
  ({
    open,
    onClose,
    data,
  }: {
    open: boolean;
    onClose: () => void;
    data: {
      filename: string;
      quote: string;
    };
  }) => {
    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Citation</Box>}
        size="md"
      >
        <PdfViewer pdfUrl={data.filename} keyword={data.quote} />
      </XModal>
    );
  }
);
