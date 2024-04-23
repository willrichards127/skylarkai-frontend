/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useCallback, useRef } from "react";
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
// import { useGetSuggestionsQuery } from "../../../../redux/services/transcriptAPI";
import { scrollToAndHighlightInIFrame } from "../../../../shared/utils/basic";
import { suggestionDict } from "../../../../shared/models/constants";

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

  // const { isLoading, data: suggestions } = useGetSuggestionsQuery({
  //   analysis_type: "edgar",
  // });

  const viewFile = useMemo(
    () =>
      instance.instance_metadata!.docs.find(
        ({ file_name }) => file_name === instance.view_doc
      ),
    [instance]
  );

  const onJumpTo = useCallback(
    ({ filename, quote }: { filename: string; quote: string }) => {
      console.log(filename, quote, "### parsed---");
      onChangeViewFile(filename);
      tagRef.current = quote;
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
  }, [instance, viewFile]);

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
                insider_transaction={true}
                suggestions={suggestionDict["4"]}
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
