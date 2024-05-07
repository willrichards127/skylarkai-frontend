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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import { CitationModal } from "../../../../components/modals/CitationModal";
import { ICustomInstance } from "./interfaces";
import { generatePdf } from "../../../../shared/utils/pdf-generator";
import { Markdown } from "../../../portal/reports/components/Markdown";
import { parseCitation } from "../../../../shared/utils/string";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";

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
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const onExport = useCallback(() => {
    generatePdf(ref.current!.innerHTML, "Compare documents", "Skylark", true);
  }, []);

  const onSendEmail = useCallback(async () => {
    showEmailModal(true);
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

  return (
    <Box sx={{ height: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
    </Box>
  );
};
