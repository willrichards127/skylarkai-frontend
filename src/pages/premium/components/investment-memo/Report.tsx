/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef, useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Link,
  IconButton,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IosShareIcon from "@mui/icons-material/IosShare";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { ICustomInstance } from "./interfaces";
import { ReportTemplate } from "../../../portal/reports/templates/ReportTemplate";
import { getPdfInBase64 } from "../../../../shared/utils/pdf-generator";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";

export const Report = ({
  instance,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onGotoMain: () => void;
}) => {
  const emailContentRef = useRef<
    { subject?: string; content: string } | undefined
  >();
  const reportPrintRef = useRef<HTMLDivElement>(null);
  const [exportModal, showExportModal] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const onExport = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(async () => {
    const base64str = await getPdfInBase64(
      `<h1>Investment memo</h1><br />${reportPrintRef.current!.innerHTML}`,
      "Skylark"
    );

    emailContentRef.current = {
      subject: "Investment Memo Report",
      content: base64str,
    };
    showEmailModal(true);
  }, []);

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={onGotoMain} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Create Investment Memo
          </Link>
          <Typography color="text.primary">Report</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          startIcon={<EmailIcon />}
          sx={{ minWidth: 140, mr: 1 }}
          onClick={onSendEmail}
        >
          Send via Email
        </Button>
        <Button
          variant="contained"
          startIcon={<IosShareIcon />}
          sx={{ minWidth: 140 }}
          onClick={onExport}
        >
          Export
        </Button>
      </Box>
      <Box sx={{ display: "flex", mb: 2 }} my={4}>
        <Typography variant="h5" gutterBottom>
          {instance.company_name} ({instance.ticker})
        </Typography>
        <Box mr="auto" />
        <Typography variant="body2">
          Template File:{" "}
          {instance.instance_metadata?.template_name || "Default Template"}
        </Typography>
      </Box>
      <Box sx={{ height: "calc(100% - 120px)" }}>
        <ReportTemplate
          ref={reportPrintRef}
          setup={{ name: instance.company_name }}
          reportContent={instance.instance_metadata.report!}
          analysisType="template"
        />
      </Box>
      {exportModal && (
        <ExportModal
          open={exportModal}
          exportContent={reportPrintRef.current!}
          onClose={() => showExportModal(false)}
        />
      )}
      {emailModal && (
        <SendEmailModal
          open={emailModal}
          onClose={() => showEmailModal(false)}
          content={emailContentRef.current!.content}
          initialSubject={emailContentRef.current!.subject}
        />
      )}
    </Box>
  );
};
