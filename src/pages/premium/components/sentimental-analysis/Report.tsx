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
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { marked } from "marked";
import { CitationModal } from "../../../../components/modals/CitationModal";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import { ICustomInstance } from "./interfaces";
import { Markdown } from "../../../portal/reports/components/Markdown";
import { SelectFileModal } from "../../../../components/CompanySelector/SelectFileModal";
import { parseCitation } from "../../../../shared/utils/string";
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
  const ref = useRef<HTMLDivElement>();
  const [citationData, setCitationData] = useState<{
    filename: string;
    quote: string;
  }>();

  const [cloneReport, { isSuccess }] = useCloneFeatureReportMutation();

  const [fileModal, showFileModal] = useState<boolean>(false);
  const [exportModal, showExportModal] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const onPrint = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(() => {
    showEmailModal(true);
  }, []);

  const onAppend = useCallback(() => {
    showFileModal(true);
  }, []);

  const onActionPerformed = useCallback(
    (units: any[]) => {
      cloneReport({
        report_name: "Investment Criteria Report",
        unit_id: units[0].id,
        content: marked.parse(
          instance.instance_metadata?.report || ""
        ) as string,
      });
    },
    [instance, cloneReport]
  );

  const onCitationLink = useCallback(
    ({ filename, quote }: { filename: string; quote: string }) => {
      setCitationData({
        filename: `${filename}.pdf`,
        quote,
      });
    },
    []
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success("Sent this report to the selected company/sector.");
    }
  }, [isSuccess]);

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 4 }}>
        <IconButton size="small" onClick={onGotoMain} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Investment Criteria Analysis
          </Link>
          <Typography color="text.primary">Report</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          startIcon={<IosShareIcon />}
          sx={{ minWidth: 140 }}
          onClick={onPrint}
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
      <Box sx={{ height: "calc(100% - 60px)", position: "relative" }}>
        <Box
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
          ref={ref}
        >
          <Markdown
            html={parseCitation(instance.instance_metadata?.report || "")}
            onCitationLink={onCitationLink}
          />
        </Box>
      </Box>
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
      {exportModal && (
        <ExportModal
          open={exportModal}
          exportContent={ref.current!}
          onClose={() => showExportModal(false)}
        />
      )}
      {emailModal && (
        <SendEmailModal
          open={emailModal}
          onClose={() => showEmailModal(false)}
          element={ref.current!}
          filename={`Investment criteria analysis.pdf`}
        />
      )}
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
