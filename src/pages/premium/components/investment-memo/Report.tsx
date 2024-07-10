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
// import { useSelector } from "react-redux";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IosShareIcon from "@mui/icons-material/IosShare";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { ICustomInstance } from "./interfaces";
// import { ReportTemplate } from "../../../portal/reports/templates/ReportTemplate";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";

export const Report = ({
  instance,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onGotoMain: () => void;
}) => {
  const reportPrintRef = useRef<HTMLDivElement>(null);
  const [exportModal, showExportModal] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const onExport = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(() => {
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
        {/* <ReportTemplate
          setup={{
            id: sys_graph_id,
            name: instance.company_name,
            nodes: [],
            edges: [],
          }}
          reportContent={instance.instance_metadata.report!}
          analysisType="transcript"
        /> */}
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
          element={reportPrintRef.current!}
        />
      )}
    </Box>
  );
};
