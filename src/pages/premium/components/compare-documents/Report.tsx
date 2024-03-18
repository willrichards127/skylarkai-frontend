/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  colors,
  Box,
  Backdrop,
  CircularProgress,
  Button,
  Breadcrumbs,
  Link,
  Typography,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import { ICustomInstance } from "./interfaces";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SplitContainer } from "../../../../components/SplitContainer";
import { useLazyGetFilesDataQuery } from "../../../../redux/services/transcriptAPI";
import {
  generatePdf,
  getPdfInBase64,
} from "../../../../shared/utils/pdf-generator";
import {
  parseCitationInReport,
  scrollToAndHighlightText,
} from "../../../../shared/utils/string";
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
  const tagRef = useRef<string>("");
  const ref = useRef<HTMLDivElement>();
  const file1Ref = useRef<HTMLDivElement>();
  const file2Ref = useRef<HTMLDivElement>();
  const { sys_graph_id } = useSelector((state: any) => state.userAuthSlice);
  const [tab, setTab] = useState<string>("compare_report");

  const [getFileData, { isLoading }] = useLazyGetFilesDataQuery();
  const [fileContents, setFileContents] = useState<
    { file_name: string; text_content: string }[]
  >([]);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const onExport = useCallback(() => {
    generatePdf(ref.current!.innerHTML, "Compare documents", "Skylark");
  }, []);

  const onSendEmail = useCallback(async () => {
    const base64str = await getPdfInBase64(
      `<h1>Compare documents</h1><br />${ref.current!.innerHTML}`,
      "Skylark"
    );

    emailContentRef.current = {
      subject: "Compare documents Report",
      content: base64str,
    };
    showEmailModal(true);
  }, []);

  const onChangeTab = useCallback(
    (_: React.SyntheticEvent, newValue: string) => {
      setTab(newValue);
    },
    []
  );

  const onJumpTo = useCallback(
    (tag: string) => {
      const [filename, quote] = tag.substring(1).split("______");
      const parsedFilename = filename.replace(/___/g, " ");
      const parsedQuote = quote.replace(/___/g, " ").trim();
      tagRef.current = parsedQuote;
      setTab("uploaded_docs");
      setTimeout(() => {
        if (parsedFilename === instance.instance_metadata.filename0) {
          scrollToAndHighlightText(file1Ref.current!, parsedQuote);
        } else if (parsedFilename === instance.instance_metadata.filename1) {
          scrollToAndHighlightText(file2Ref.current!, parsedQuote);
        }
      }, 100);
    },
    [instance]
  );

  useEffect(() => {
    const downloadFile = async () => {
      const response = await getFileData({
        docs: [
          {
            analysis_type: "compare",
            name: instance.instance_metadata.filename0!,
          },
          {
            analysis_type: "compare",
            name: instance.instance_metadata.filename1!,
          },
        ],
      }).unwrap();
      setFileContents(response);
    };
    downloadFile();
  }, [getFileData, instance, sys_graph_id]);

  return (
    <Box sx={{ height: "100%" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
      <Tabs value={tab} onChange={onChangeTab}>
        <Tab label="Report" value="compare_report" />
        <Tab label="Uploaded Documents" value="uploaded_docs" />
      </Tabs>

      <Box sx={{ height: "calc(100% - 108px)", position: "relative" }}>
        {tab === "compare_report" && (
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
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              allowElement={(element, _, parent) => {
                if (element.tagName === "p" && (parent as any).tagName === "li") {
                  return false;
                }
                if (
                  element.tagName === "strong" &&
                  (parent as any).tagName === "li"
                ) {
                  return false;
                }
                return true;
              }}
              unwrapDisallowed={true}
              components={{
                pre: (props) => <div {...(props as any)} />,
                table: (props) => (
                  <table
                    {...props}
                    style={{
                      borderCollapse: "collapse",
                      margin: "4px 2px",
                      overflowX: "auto",
                    }}
                  />
                ),
                th: (props) => (
                  <th
                    {...props}
                    style={{
                      textAlign: "center",
                      padding: "2px 4px",
                      color: "white",
                      background: "black",
                      border: `1px solid ${colors.grey[500]}`,
                    }}
                  />
                ),
                td: (props) => (
                  <td
                    {...props}
                    style={{
                      textAlign: "center",
                      padding: "4px 8px",
                      border: `1px solid ${colors.grey[500]}`,
                    }}
                  />
                ),
                a: (props) => (
                  <a
                    {...props}
                    style={{ color: "blue" }}
                    onClick={() => onJumpTo(props.href!)}
                  />
                ),
              }}
            >
              {parseCitationInReport(instance?.instance_metadata?.report || "")}
            </ReactMarkdown>
          </Box>
        )}
        {tab === "uploaded_docs" && (
          <SplitContainer
            sizes={[50, 50]}
            leftPanel={
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  overflowY: "auto",
                  color: "black",
                  bgcolor: "white",
                  fontSize: 12,
                  p: 4,
                }}
                ref={file1Ref}
              >
                {fileContents.length ? fileContents[0].text_content : ""}
              </Box>
            }
            rightPanel={
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  overflowY: "auto",
                  color: "black",
                  bgcolor: "white",
                  fontSize: 12,
                  p: 4,
                }}
                ref={file2Ref}
              >
                {fileContents.length > 1 ? fileContents[1].text_content : ""}
              </Box>
            }
          />
        )}
      </Box>
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
