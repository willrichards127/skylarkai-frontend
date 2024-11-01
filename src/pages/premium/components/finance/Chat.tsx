/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState, useEffect, useCallback, useRef } from "react";
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
import { SplitContainer } from "../../../../components/SplitContainer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatPanel from "../../../../components/ChatPanel";
import { ICustomInstance } from "./interface";
import { loadStoreValue } from "../../../../shared/utils/storage";
import {
  myRandomInts,
  scrollToAndHighlightInIFrame,
} from "../../../../shared/utils/basic";
// import { useGetSuggestionsQuery } from "../../../../redux/services/transcriptAPI";
import { addDownloadButtons } from "../../../../shared/utils/xlsx";
import { ITopic } from "../../../../redux/interfaces";
import { suggestionDict as suggestions } from "../../../../shared/models/constants";
import { currentUser } from "../../../../redux/features/authSlice";

export const Chat = ({
  instance,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onChangeViewFile?: (filename: string) => void;
  onGotoMain: () => void;
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const tagRef = useRef<string>("");
  const { sys_graph_id, tenancy } = useSelector(currentUser);

  const [file, setFile] = useState<any>();
  const viewFile = useMemo(
    () =>
      instance.instance_metadata!.docs.find(
        ({ file_name }) => file_name === instance.view_doc
      ),
    [instance]
  );

  const onJumpTo = useCallback(
    ({ filename, quote }: { filename: string; quote: string }) => {
      console.log(filename, quote);
    },
    []
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
    const token = loadStoreValue("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/pdf");
    myHeaders.append("X-TENANT-ID", tenancy!);

    const raw = JSON.stringify({
      graph_id: sys_graph_id!,
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
      `${import.meta.env.VITE_API_URL}downloadfile/${sys_graph_id!}`,
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
  }, [instance, sys_graph_id, tenancy]);

  useEffect(() => {
    if (!iframeRef.current) return;
    const iframeEl = iframeRef.current;
    iframeEl.addEventListener("load", onloadIframe);
    return () => {
      iframeEl.removeEventListener("load", onloadIframe);
    };
  }, [onloadIframe]);

  const selectedSuggestions = useMemo(() => {
    if (suggestions && instance.instance_metadata.docs.length) {
      const formTypes = instance.instance_metadata.docs.map(
        (doc) => doc.form_type
      );
      if (formTypes.length < 2) {
        if (suggestions[formTypes[0]]) {
          return myRandomInts(3, suggestions[formTypes[0]].length).map(
            (index) => suggestions[formTypes[0]][index]
          );
        }
      } else {
        return formTypes.reduce<ITopic[]>(
          (prev: ITopic[], formType: string) => {
            if (suggestions[formType]) {
              const random = myRandomInts(1, suggestions[formType].length);
              return [...prev, suggestions[formType][random[0]]];
            } else {
              return prev;
            }
          },
          []
        );
      }
    }
  }, [instance]);

  return (
    <Box sx={{ height: "100%" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        // open={isLoading}
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
                companyName={instance.company_name}
                onJumpTo={onJumpTo}
                analysis_type="edgar"
                suggestions={selectedSuggestions}
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
