import { memo, useEffect, useState } from "react";
import { XModal } from "../XModal";
import { Box } from "@mui/material";
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
    };
  }) => {
    const { data: report } = useGetReportQuery(
      { reportId: data.id! },
      { skip: !data.id }
    );
    const [file, setFile] = useState<any>();

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

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">{title || "Citation"}</Box>}
        size="lg"
      >
        {file && (
          <div style={{ height: 800 }}>
            <PdfViewer pdfUrl={file} keyword={data.quote} />
          </div>
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
