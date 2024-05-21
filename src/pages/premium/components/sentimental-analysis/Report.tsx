import { useRef, useCallback, useState } from "react";
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
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CitationModal } from "../../../../components/modals/CitationModal";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import { ICustomInstance } from "./interfaces";
import { Markdown } from "../../../portal/reports/components/Markdown";
import { parseCitation } from "../../../../shared/utils/string";

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

  const [exportModal, showExportModal] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  // const onPrint = useCallback(() => {
  //   generatePdf(ref.current!.innerHTML, "Investment Criteria Analysis", "Skylark", true);
  // }, []);

  const onPrint = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(() => {
    showEmailModal(true);
  }, []);

  const onCitationLink = useCallback(
    ({ filename, quote }: { filename: string; quote: string }) => {
      setCitationData({
        filename: `${filename}.pdf`,
        quote,
      });
    },
    []
  );

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
    </Box>
  );
};
