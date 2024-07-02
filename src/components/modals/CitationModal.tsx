import { memo, useEffect, useState } from "react";
import { XModal } from "../XModal";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { PdfViewer } from "../PDFViewer";
import { downloadPdf } from "../../shared/utils/download";
import { useGetReportQuery } from "../../redux/services/reportApi";
import { ReportTemplate } from "../../pages/portal/reports/templates/ReportTemplate";

export const CitationModal = memo(
  ({
    open,
    title,
    onClose,
    data,
  }: {
    open: boolean;
    title?: string;
    onClose: () => void;
    data: {
      graph_id: number;
      analysis_type: string;
      filename: string;
      id?: number; // the only case for report
      quote?: string;
      categories?: {
        category: string;
        page: number;
      }[];
    };
  }) => {
    const { data: report } = useGetReportQuery(
      { reportId: data.id! },
      { skip: !data.id }
    );
    const [file, setFile] = useState<any>();
    const [pageIndex, setPageIndex] = useState<number>();

    useEffect(() => {
      if (data.id) return;
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

    const omJumpToPage = (page: number) => {
      setPageIndex(page);
    }

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">{title || "Citation"}</Box>}
        size="lg"
      >
        {file && (
          <Box display={"flex"} height={800} position={"relative"}>
            <Box flex={1} height={"100%"}>
              <PdfViewer pdfUrl={file} keyword={data.quote} pageIndex={pageIndex} />
            </Box>
            {data.categories ? (
              <Box width={300} height={"100%"} overflow="auto">
                <List>
                  {data.categories.map((category, index) => (
                    <ListItemButton key={`file-ingest-category-${index}`} onClick={() => omJumpToPage(category.page)}>
                      <ListItemText primary={category.category} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            ) : null}
          </Box>
        )}
        {!!report && (
          <ReportTemplate
            reportId={report.id}
            reportName={report.report_metadata.reportname}
            setupId={report.graph_id}
            reportContent={report.content}
            isReadOnly
          />
        )}
      </XModal>
    );
  }
);
