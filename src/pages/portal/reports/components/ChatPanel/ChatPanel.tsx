/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useRef, useCallback, useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import { XPanel } from "../../../../../components/XPanel";
import { ChatContentBox } from "./ChatContentBox";
import { InputBox } from "./InputBox";
import { IChat } from "../../../../../redux/interfaces";
import {
  useGetIngestedFilesQuery,
  useCustomQueryMutation,
} from "../../../../../redux/services/transcriptAPI";
import {
  generatePdf,
  getPdfInBase64,
} from "../../../../../shared/utils/pdf-generator";
import { SendEmailModal } from "../../../../../components/modals/SendEmailModal";

export const ChatPanel = memo(
  ({
    graph_id,
    analysis_type,
    onAddToReport,
    onJumpTo,
  }: {
    graph_id: number;
    analysis_type: string;
    onAddToReport: (content: string) => void;
    onJumpTo?: (tag: string) => void;
  }) => {
    const ref = useRef<HTMLDivElement>();
    const emailContentRef = useRef<
      { subject?: string; content: string } | undefined
    >();
    const [llm, setLlm] = useState<"SkyEngine" | "Sky2Engine">("SkyEngine");
    const [emailModal, showEmailModal] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<IChat[]>([]);

    const { isLoading: loadingFiles, data: dataFiles } =
      useGetIngestedFilesQuery({ graph_id, analysis_type });
    const [getAnswer, { isLoading: loadingAnswer }] = useCustomQueryMutation();
    console.log(dataFiles, "dataFiles===")
    const onSend = useCallback(
      async (question: string) => {
        setChatHistory((prev) => [
          ...prev,
          { type: "question", content: question },
        ]);
        const response = await getAnswer({
          graph_id,
          question,
          filenames: dataFiles,
          analysis_type,
        }).unwrap();
        if (response) {
          setChatHistory((prev) => [
            ...prev.filter((chat) => chat.type.toString() !== "loading"),
            { type: "answer", content: response.content },
          ]);
        }
      },
      [getAnswer, dataFiles, graph_id, analysis_type]
    );

    const onPrint = useCallback(() => {
      if (!ref.current) return;

      const today = new Date().toLocaleDateString();
      const container = document.createElement("div");
      container.appendChild(ref.current.cloneNode(true));
      const removeItems = container.querySelectorAll(
        ".suggestions, .topic, .loading"
      );
      for (const item of removeItems) {
        item.remove();
      }
      const listings = container.querySelectorAll("li");
      for (const item of listings) {
        const paragraphs = item.querySelectorAll("p");
        for (const paragraph of paragraphs) {
          paragraph.before(...paragraph.childNodes);
          const br = document.createElement("br");
          paragraph.replaceWith(br);
        }
      }
      generatePdf(
        `<h1>Chat History ${today}</h1><br />${container.innerHTML}`,
        `Chat history ${today}`,
        "Skylark"
      );
    }, []);

    const onSendViaEmail = useCallback(async () => {
      if (!ref.current) return;

      const today = new Date().toLocaleDateString();
      const container = document.createElement("div");
      container.appendChild(ref.current.cloneNode(true));
      const removeItems = container.querySelectorAll(
        ".suggestions, .topic, .loading"
      );
      for (const item of removeItems) {
        item.remove();
      }
      const listings = container.querySelectorAll("li");
      for (const item of listings) {
        const paragraphs = item.querySelectorAll("p");
        for (const paragraph of paragraphs) {
          paragraph.before(...paragraph.childNodes);
          const br = document.createElement("br");
          paragraph.replaceWith(br);
        }
      }
      const base64str = await getPdfInBase64(
        `<h1>Chat History ${today}</h1><br />${container.innerHTML}`,
        "Skylark"
      );

      emailContentRef.current = {
        subject: `Chat History ${today}`,
        content: base64str,
      };
      showEmailModal(true);
    }, []);

    useEffect(() => {
      if (loadingAnswer) {
        setChatHistory((prev) => [...prev, { type: "loading", content: "" }]);
      }
    }, [loadingAnswer]);

    return (
      <XPanel
        sxProps={{ height: "100%", bgcolor: "#060606", width: "100%" }}
        sxBodyProps={{ p: 1, flex: "none", height: "calc(100% - 45px)" }}
        header={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Sky Chat</Typography>
            <Box mr="auto" />
            <TextField
              size="small"
              select
              value={llm}
              onChange={(e) => setLlm(e.target.value as any)}
              SelectProps={{
                native: true,
              }}
              sx={{
                mr: 1,
                "& .MuiNativeSelect-select": {
                  fontSize: 12,
                  padding: "4px 14px",
                },
              }}
            >
              {["SkyEngine", "Sky2Engine"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </TextField>
            <XIconButton
              size="small"
              variant="contained"
              sxProps={{
                "&.MuiButtonBase-root": {
                  minHeight: 31,
                  minWidth: 31,
                },
                mr: 1,
              }}
              onClick={onSendViaEmail}
            >
              <EmailIcon />
            </XIconButton>
            <XIconButton
              size="small"
              variant="contained"
              sxProps={{
                "&.MuiButtonBase-root": {
                  minHeight: 31,
                  minWidth: 31,
                },
              }}
              onClick={onPrint}
            >
              <PrintIcon />
            </XIconButton>
          </Box>
        }
      >
        <ChatContentBox
          ref={ref}
          chats={chatHistory}
          onAddToReport={onAddToReport}
          onJumpTo={(tag: string) => (onJumpTo ? onJumpTo(tag) : null)}
        />
        <InputBox
          disabled={loadingAnswer || loadingFiles || !dataFiles?.length}
          onSubmitAction={onSend}
        />
        {emailModal && (
          <SendEmailModal
            open={emailModal}
            onClose={() => showEmailModal(false)}
            content={emailContentRef.current!.content}
            initialSubject={emailContentRef.current!.subject}
          />
        )}
      </XPanel>
    );
  }
);
