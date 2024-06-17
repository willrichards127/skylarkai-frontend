/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useEffect, useCallback, useRef } from "react";
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
import { SplitContainer } from "../../../../components/SplitContainer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatPanel from "../../../../components/ChatPanel";
import { ICustomInstance } from "./interface";
import { scrollToAndHighlightInIFrame } from "../../../../shared/utils/basic";
import { addDownloadButtons } from "../../../../shared/utils/xlsx";
import { useSelector } from "react-redux";
import { currentUser } from "../../../../redux/features/authSlice";

export const Chat = ({
  instance,
  onChangeViewFile,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onChangeViewFile: (filename: string) => void;
  onGotoMain: () => void;
}) => {
  const { tenancy, token } = useSelector(currentUser);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const tagRef = useRef<string>("");

  const viewFile = useMemo(
    () =>
      instance.instance_metadata!.docs.find(
        ({ file_name }) => file_name === instance.view_doc
      ),
    [instance]
  );

  const onJumpTo = useCallback(
    ({ filename, quote }: { filename: string; quote: string }) => {
      console.log(filename, quote, "citation===");
      onChangeViewFile(filename);
      tagRef.current = quote;
      iframeRef.current!.contentDocument!.location.reload();
    },
    [onChangeViewFile]
  );

  const onloadIframe = useCallback(() => {
    console.log(tagRef.current, "### jumping to---");
    addDownloadButtons(iframeRef.current!.contentDocument!);

    scrollToAndHighlightInIFrame(
      iframeRef.current!.contentDocument!,
      tagRef.current
    );
  }, []);

  useEffect(() => {
    if (token && tenancy) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("X-TENANT-ID", tenancy);
      const formdata = new FormData();
      formdata.append("url", viewFile!.url);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };

      fetch(
        `${import.meta.env.VITE_API_URL}edgar_file_with_url`,
        requestOptions as any
      )
        .then((response) => response.text())
        .then((result) => {
          iframeRef.current?.contentDocument?.open();
          iframeRef.current?.contentDocument?.write(result);
          iframeRef.current?.contentDocument?.close();
        })
        .catch((error) => console.log("error", error));
    }
  }, [instance, tenancy, token, viewFile]);

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
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={onGotoMain} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Ask SEC filings
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
          <Typography variant="body2">
            Name: {instance.ticker} {viewFile!.form_type}
          </Typography>
          <Typography variant="body2">
            Filed On: {viewFile!.filing_date}
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
              <iframe width="100%" height="100%" ref={iframeRef} />
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
                companyName={instance.company_name}
                onJumpTo={onJumpTo}
                analysis_type="edgar"
                suggestions={instance.instance_metadata.suggestions}
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
