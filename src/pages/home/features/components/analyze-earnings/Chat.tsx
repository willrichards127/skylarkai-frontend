/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Backdrop,
  CircularProgress,
  Breadcrumbs,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SplitContainer } from "../../../../../components/SplitContainer";
import { PdfViewer } from "../../../../../components/PDFViewer";
import ChatPanel from "../../../../../components/ChatPanel";
import { ICustomInstance } from "./interfaces";
import { useGetSuggestionsQuery } from "../../../../../redux/services/transcriptAPI";
import { downloadPdf } from "../../../../../shared/utils/download";

export const Chat = ({
  instance,
  onChangeViewFile,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onChangeViewFile: (filename: string) => void;
  onGotoMain: () => void;
}) => {
  const { sys_graph_id } = useSelector((state: any) => state.userAuthSlice);

  const { isLoading, data: suggestions } = useGetSuggestionsQuery({
    analysis_type: "transcript",
  });
  const [file, setFile] = useState<any>();
  const [quote, setQuote] = useState<string>("");

  const onJumpTo = useCallback(
    (tag: string) => {
      const [filename, quote] = tag.substring(1).split("______");
      const parsedFilename = filename.replace(/___/g, " ");
      const parsedQuote = quote.replace(/___/g, " ").trim();
      console.log(parsedFilename, parsedQuote, "### parsed---");
      onChangeViewFile(parsedFilename);
      setQuote(parsedQuote);
    },
    [onChangeViewFile]
  );

  useEffect(() => {
    const downloadFile = async () => {
      const pdfBuffer = await downloadPdf({
        graph_id: sys_graph_id!,
        company_name: instance.company_name,
        ticker: instance.ticker,
        analysis_type: "transcript",
        filename: instance.view_doc!,
      });
      if (pdfBuffer) {
        setFile(new Uint8Array(pdfBuffer));
      }
    };
    downloadFile();
  }, [instance, sys_graph_id]);

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
            Compare and Analyze Earning Calls Trends
          </Link>
          <Typography color="text.primary">Chat</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ display: "flex", mb: 2 }} my={4}>
        <Typography variant="h5" gutterBottom>
          {instance.company_name} ({instance.ticker})
        </Typography>
        <Box mr="auto" />
        <Box>
          <Typography variant="body2">Filename: {instance.view_doc}</Typography>
        </Box>
      </Box>
      <Box sx={{ height: "calc(100% - 120px)" }}>
        <SplitContainer
          leftPanel={
            <Box
              sx={{
                height: "100%",
                width: "100%",
                bgcolor: "white",
                border: "1px solid black",
                overflowY: "auto",
              }}
            >
              {file && <PdfViewer pdfUrl={file} keyword={quote} />}
            </Box>
          }
          rightPanel={
            <Box
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <ChatPanel
                feature_instance_id={instance.id!}
                filenames={instance.instance_metadata!.docs.map(
                  (doc) => doc.file_name
                )}
                onJumpTo={onJumpTo}
                analysis_type="transcript"
                suggestions={suggestions || []}
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
