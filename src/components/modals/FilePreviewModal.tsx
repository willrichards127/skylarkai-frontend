import { memo, useMemo, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { XModal } from "../XModal";
import { ColDef } from "ag-grid-community";
import AGTable from "../agTable/AGTable";
import { convertUtcToLocal } from "../../shared/utils/dateUtils";
import { PdfViewer } from "../PDFViewer";
import { downloadPdf } from "../../shared/utils/download";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const FilePreviewModal = memo(
  ({
    open,
    onClose,
    data,
  }: {
    open: boolean;
    onClose: () => void;
    data: {
      files: { file_name: string; ingested_at: string; uploaded_at: string }[];
      setupId: number;
    };
  }) => {
    const [file, setFile] = useState<any>();

    const onFileView = async (fileName: string) => {
      downloadPdf({
        graph_id: data.setupId,
        analysis_type: "financial_diligence",
        filename: fileName,
      }).then((pdfBuffer) => {
        if (pdfBuffer) {
          setFile(new Uint8Array(pdfBuffer));
        }
      });
    };

    const columns = useMemo<ColDef[]>(
      () => [
        {
          field: "id",
          headerName: "ID",
          maxWidth: 90,
        },
        {
          field: "file_name",
          headerName: "File Name",
          align: "left",
          filter: "agTextColumnFilter",
          minWidth: 500,
          cellRenderer: (params: any) => {
            return (
              <Typography
                variant="caption"
                sx={{
                  color: "tomato",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => onFileView(params.value)}
              >
                {params.value}
              </Typography>
            );
          },
        },
        {
          field: "ingested_at",
          headerName: "Ingested At",
          filter: "agDateColumnFilter",
          valueFormatter: (params: any) => convertUtcToLocal(params.value),
        },
        {
          field: "uploaded_at",
          headerName: "Uploaded At",
          filter: "agDateColumnFilter",
          valueFormatter: (params: any) => convertUtcToLocal(params.value),
        },
      ],
      []
    );

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Ingested Files</Box>}
        size="lg"
      >
        <Box height={800}>
          {file ? (
            <Box>
              <IconButton aria-label="close" onClick={() => setFile(undefined)}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <PdfViewer pdfUrl={file} />
            </Box>
          ) : (
            <AGTable columnDefs={columns} rowData={data.files} />
          )}
        </Box>
      </XModal>
    );
  }
);
