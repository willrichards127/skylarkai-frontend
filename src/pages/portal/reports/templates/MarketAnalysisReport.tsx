import { useCallback, useState, useRef } from "react";
import { Box } from "@mui/material";
import { HeaderPanel } from "../components/HeaderPanel";
import { ExportModal } from "../../../../components/modals/ExportModal";
// import { RefFileModal } from "../components/RefFileModal";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import { ReportTemplate } from "./ReportTemplate";
import { ISetup } from "../../../../shared/models/interfaces";
import {
  REPORTS_DICT,
  reportHeaderHeight,
} from "../../../../shared/models/constants";
import { getPdfInBase64 } from "../../../../shared/utils/pdf-generator";

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
  // const refFileRef = useRef<{
  //   filename: string;
  //   text_content: string;
  //   quote_content: string;
  // }>();
  const emailContentRef = useRef<
    { subject?: string; content: string } | undefined
  >();

  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>();
  const [exportModal, showExportModal] = useState<boolean>(false);
  // const [refFileModal, showRefFileModal] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const onPrint = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(async () => {
    if (!reportPrintRef.current) return;
    const container = document.createElement("div");
    container.appendChild(reportPrintRef.current!.cloneNode(true));
    const removeItems = container.querySelectorAll(".no-print");
    for (const item of removeItems) {
      item.remove();
    }
    const base64str = await getPdfInBase64(container.innerHTML, "Skylark");
    emailContentRef.current = {
      subject: `${REPORTS_DICT[reportType].label} Report`,
      content: base64str,
    };
    showEmailModal(true);
  }, [reportType]);

  const onSave = useCallback(() => {
    if (!reportPrintRef.current) return;
    const container = document.createElement("div");
    container.appendChild(reportPrintRef.current.cloneNode(true));
    const removeItems = container.querySelectorAll(
      ".no-print"
    );
    for (const item of removeItems) {
      item.remove();
    }
    const items = container.querySelectorAll('div[id^="md_"]');
    let reportHtml = "";
    for (const item of items) {
      const wrapperDiv = item.querySelector('div');
      if(wrapperDiv) {
        reportHtml += wrapperDiv.innerHTML;
      } else {
        reportHtml += item.innerHTML;
      }
    }
    console.log("reportHtml###", reportHtml);
    onSaveAction(reportHtml);
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
          companyName={setup.name!}
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
            setup={setup as { id: number; name: string }}
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
        {/* {refFileModal && refFileRef.current && (
          <RefFileModal
            open={refFileModal}
            onClose={() => showRefFileModal(false)}
            content={refFileRef.current}
          />
        )} */}
        {emailModal && (
          <SendEmailModal
            open={emailModal}
            onClose={() => showEmailModal(false)}
            content={emailContentRef.current!.content}
            initialSubject={emailContentRef.current!.subject}
          />
        )}
      </Box>
    </Box>
  );
};
