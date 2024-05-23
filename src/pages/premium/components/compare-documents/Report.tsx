import { useRef, useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Breadcrumbs,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SendIcon from "@mui/icons-material/Send";
import { CitationModal } from "../../../../components/modals/CitationModal";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { SelectFileModal } from "../../../../components/CompanySelector/SelectFileModal";
import { Markdown } from "../../../portal/reports/components/Markdown";
import { parseCitation } from "../../../../shared/utils/string";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import { ICustomInstance } from "./interfaces";
import { useCloneFeatureReportMutation } from "../../../../redux/services/transcriptAPI";
import { toast } from "react-toastify";

export const Report = ({
  instance,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onGotoMain: () => void;
}) => {
  const { sys_graph_id } = useSelector((state: any) => state.userAuthSlice);
  const [cloneReport, { isSuccess }] = useCloneFeatureReportMutation();
  const ref = useRef<HTMLDivElement>();
  const [citationData, setCitationData] = useState<{
    filename: string;
    quote: string;
  }>();
  const [emailModal, showEmailModal] = useState<boolean>(false);
  const [exportModal, showExportModal] = useState<boolean>(false);
  const [fileModal, showFileModal] = useState<boolean>(false);

  const onExport = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(async () => {
    showEmailModal(true);
  }, []);

  const onAppend = useCallback(() => {
    showFileModal(true);
  }, []);

  const onCitationLink = useCallback(
    ({ filename, quote }: { filename: string; quote: string }) => {
      console.log(filename, quote, "citation==");
      setCitationData({
        filename: `${filename}.pdf`,
        quote,
      });
    },
    []
  );

  const onActionPerformed = useCallback(
    (units: any[]) => {
      cloneReport({
        report_name: "Comparsion Report",
        unit_id: units[0].id,
        content: instance.instance_metadata?.report || "",
      });
    },
    [instance, cloneReport]
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success("Sent this report to the selected company/sector.");
    }
  }, [isSuccess]);

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
        <IconButton size="small" onClick={onGotoMain} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Compare Documents
          </Link>
          <Typography color="text.primary">Compare Documents Report</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          startIcon={<IosShareIcon />}
          sx={{ minWidth: 140 }}
          onClick={onExport}
        >
          Export
        </Button>
        <Button
          variant="contained"
          startIcon={<AttachEmailIcon />}
          sx={{ minWidth: 140 }}
          onClick={onSendEmail}
        >
          Send via Email
        </Button>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          sx={{ minWidth: 140 }}
          onClick={onAppend}
        >
          Append to Company/Sector Page
        </Button>
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        {instance.instance_metadata.filename0} vs{" "}
        {instance.instance_metadata.filename1}
      </Typography>

      <Box sx={{ height: "calc(100% - 72px)", position: "relative" }}>
        <Box
          ref={ref}
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            border: "1px solid black",
            overflowY: "auto",
            bgcolor: "white",
            color: "black",
            px: 16,
            py: 8,
          }}
        >
          <Markdown
            html={parseCitation(instance?.instance_metadata?.report || "")}
            onCitationLink={onCitationLink}
          />
        </Box>
      </Box>
      {emailModal && (
        <SendEmailModal
          open={emailModal}
          onClose={() => showEmailModal(false)}
          element={ref.current!}
          filename="Compare document report.pdf"
        />
      )}
      {exportModal && (
        <ExportModal
          open={exportModal}
          exportContent={ref.current!}
          onClose={() => showExportModal(false)}
        />
      )}
      {citationData ? (
        <CitationModal
          open={!!citationData}
          onClose={() => setCitationData(undefined)}
          data={{
            ...citationData,
            graph_id: sys_graph_id!,
            analysis_type: "compare",
          }}
        />
      ) : null}
      {fileModal && (
        <SelectFileModal
          open={fileModal}
          onClose={() => showFileModal(false)}
          onActionPerformed={onActionPerformed}
          isCompanySelect
        />
      )}
    </Box>
  );
};
