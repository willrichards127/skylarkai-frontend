/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Backdrop,
  CircularProgress,
  Button,
  Breadcrumbs,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IosShareIcon from "@mui/icons-material/IosShare";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SplitContainer } from "../../../../components/SplitContainer";
import ChatPanel from "../../../../components/ChatPanel";
import { ICustomInstance } from "./interfaces";
import { loadStoreValue } from "../../../../shared/utils/storage";
import { useGetSuggestionsQuery } from "../../../../redux/services/transcriptAPI";
import { scrollToAndHighlightInIFrame } from "../../../../shared/utils/basic";

export const Chat = ({
  instance,
  onChangeViewFile,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onChangeViewFile: (filename: string) => void;
  onGotoMain: () => void;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const tagRef = useRef<string>("");
  const { sys_graph_id } = useSelector((state: any) => state.userAuthSlice);
  const { isLoading, data: suggestions } = useGetSuggestionsQuery({
    analysis_type: "edgar",
  });
  const [file, setFile] = useState<any>();

  const viewFile = useMemo(
    () =>
      instance.instance_metadata!.docs.find(
        ({ file_name }) => file_name === instance.view_doc
      ),
    [instance]
  );

  const onJumpTo = useCallback(
    (tag: string) => {
      const [filename, quote] = tag.substring(1).split("______");
      const parsedFilename = filename.replace(/___/g, " ");
      const parsedQuote = quote.replace(/___/g, " ").trim();
      console.log(parsedFilename, parsedQuote, "### parsed---");
      onChangeViewFile(parsedFilename);
      tagRef.current = parsedQuote;
      iframeRef.current!.contentDocument!.location.reload();
    },
    [onChangeViewFile]
  );

  const onloadIframe = useCallback(() => {
    scrollToAndHighlightInIFrame(
      iframeRef.current!.contentDocument!,
      tagRef.current
    );
  }, []);

  useEffect(() => {
    const token = loadStoreValue("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/pdf");

    const raw = JSON.stringify({
      graph_id: sys_graph_id!,
      company_name: instance.company_name,
      ticker: instance.ticker,
      analysis_type: "edgar",
      filename: instance.view_doc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(
      `${import.meta.env.VITE_PREMIUM_API_URL}downloadfile/${sys_graph_id!}`,
      requestOptions as any
    )
      .then((response) => response.blob())
      .then((result) => {
        const file = new Blob([result], { type: "text/html" });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        setFile(fileURL);
      })
      .catch((error) => console.log("error", error));
  }, [instance, sys_graph_id]);

  useEffect(() => {
    if (!iframeRef.current) return;
    const iframeEl = iframeRef.current;
    iframeEl.addEventListener("load", onloadIframe);
    return () => {
      iframeEl.removeEventListener("load", onloadIframe);
    };
  }, [onloadIframe]);

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
            View Insider Transactions
          </Link>
          <Typography color="text.primary">Chat</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          startIcon={<IosShareIcon />}
          sx={{ minWidth: 140 }}
        >
          Export
        </Button>
      </Box>
      <Box sx={{ display: "flex", mb: 2 }} my={4}>
        <Typography variant="h5" gutterBottom>
          {instance.company_name} ({instance.ticker})
        </Typography>
        <Box mr="auto" />
        <Box>
          <Typography variant="body2">
            Insider: {viewFile!.insider_name}
          </Typography>
          <Typography variant="body2">
            Reported Date: {viewFile!.reported_date}
          </Typography>
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
              <iframe src={file} width="100%" height="100%" ref={iframeRef} />
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
                analysis_type="edgar"
                insider_transaction={true}
                suggestions={
                  suggestions
                    ? suggestions.filter(
                        (sug) => sug.topic === "insider_transactions"
                      )
                    : []
                }
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
