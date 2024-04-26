import { useCallback, useState, useRef } from "react";
import { Box } from "@mui/material";
import { HeaderPanel } from "../components/HeaderPanel";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { ReportTemplate } from "./ReportTemplate";
import { ISetup } from "../../../../shared/models/interfaces";
import { reportHeaderHeight } from "../../../../shared/models/constants";
import { EmailTemplate } from "./EmailTemplate";

export const MarketAnalysisReport = ({
  setup,
  reportContent,
  reportType,
  filenames,
  onSaveAction,
  onRerunAction,
}: {
  setup: ISetup;
  reportContent: any;
  reportType: string;
  filenames: string[];
  onSaveAction: (content: string) => void;
  onRerunAction: (append?: Record<string, File[]>) => void;
}) => {
  const reportPrintRef = useRef<HTMLDivElement>(null);

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>();
  const [exportModal, showExportModal] = useState<boolean>(false);
  const [emailTemplate, showEmailTemplate] = useState<boolean>(false);

  const onPrint = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(() => {
    showEmailTemplate(true);
  }, []);

  const onSave = useCallback(() => {
    if (!reportPrintRef.current) return;
    const container = document.createElement("div");
    container.appendChild(reportPrintRef.current.cloneNode(true));
    const removeItems = container.querySelectorAll(".chart, .no-save");
    for (const item of removeItems) {
      item.remove();
    }

    onSaveAction(container.firstElementChild!.innerHTML);
  }, [onSaveAction]);

  const onDelete = useCallback(() => {
    // showExportModal(true);
  }, []);

  const onUploadedFiles = useCallback((type: string, files: File[]) => {
    setUploadedFiles((prev) => ({ ...prev, [type]: files }));
  }, []);

  const onRerunReport = () => {
    onRerunAction(uploadedFiles);
  };

  return (
    <Box sx={{ display: "flex", height: "100%", position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <HeaderPanel
          companyName={setup.description || setup.name!}
          reportType={reportType}
          onPrint={onPrint}
          onSave={onSave}
          onDelete={onDelete}
          onSendEmail={onSendEmail}
          onRerunReport={onRerunReport}
          onUploadedFiles={onUploadedFiles}
        />
        <Box
          sx={{
            height: `calc(100% - ${reportHeaderHeight}px)`,
            width: "100%",
            p: 2,
          }}
        >
          <ReportTemplate
            ref={reportPrintRef}
            setup={setup as { id: number; name: string; description?: string }}
            reportContent={reportContent}
            analysisType="financial_diligence"
            filenames={filenames}
          />
        </Box>
        {exportModal && (
          <ExportModal
            open={exportModal}
            exportContent={reportPrintRef.current!}
            onClose={() => showExportModal(false)}
          />
        )}
        {emailTemplate && (
          <EmailTemplate
            element={reportPrintRef.current!}
            onClose={() => showEmailTemplate(false)}
          />
        )}
      </Box>
    </Box>
  );
};
