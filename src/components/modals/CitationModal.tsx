import { memo, useEffect, useState } from "react";
import { XModal } from "../XModal";
import { Box } from "@mui/material";
import { PdfViewer } from "../PDFViewer";
import { downloadPdf } from "../../shared/utils/download";

export const CitationModal = memo(
  ({
    open,
    onClose,
    data,
  }: {
    open: boolean;
    onClose: () => void;
    data: {
      graph_id: number;
      analysis_type: string;
      filename: string;
      quote: string;
    };
  }) => {
    const [file, setFile] = useState<any>();

    useEffect(() => {
      downloadPdf({
        graph_id: data.graph_id,
        analysis_type: data.analysis_type,
        filename: data.filename,
      }).then((pdfBuffer) => {
        if (pdfBuffer) {
          setFile(new Uint8Array(pdfBuffer));
        }
      });
    }, [data]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Citation</Box>}
        size="md"
      >
        {file && <PdfViewer pdfUrl={file} keyword={data.quote} />}
      </XModal>
    );
  }
);
