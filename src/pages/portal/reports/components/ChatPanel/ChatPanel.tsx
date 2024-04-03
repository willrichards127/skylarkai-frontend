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
import { useCustomQueryMutation } from "../../../../../redux/services/transcriptAPI";
import {
  generatePdf,
  getPdfInBase64,
} from "../../../../../shared/utils/pdf-generator";
import { SendEmailModal } from "../../../../../components/modals/SendEmailModal";

export const ChatPanel = memo(
  ({
    graph_id,
    analysis_type,
    companyName,
    filenames,
    onAddToReport,
    onJumpTo,
  }: {
    graph_id?: number;
    analysis_type: string;
    companyName: string;
    filenames: string[];
    onAddToReport: (question: string, content: string) => void;
    onJumpTo: ({
      filename,
      quote,
    }: {
      filename: string;
      quote: string;
    }) => void;
  }) => {
    const ref = useRef<HTMLDivElement>();
    const emailContentRef = useRef<
      { subject?: string; content: string } | undefined
    >();
    const [llm, setLlm] = useState<
      "SkyEngine 1" | "SkyEngine 2" | "SkyEngine 3" | "SkyEngine 4"
    >("SkyEngine 1");
    const [emailModal, showEmailModal] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<IChat[]>([]);

    const [getAnswer, { isLoading: loadingAnswer }] = useCustomQueryMutation();
    const onSend = useCallback(
      async (question: string) => {
        setChatHistory((prev) => [
          ...prev,
          { type: "question", content: question },
        ]);
        const response = await getAnswer({
          ...(!!graph_id && { graph_id }),
          question,
          filenames,
          analysis_type,
          llm:
            llm === "SkyEngine 1"
              ? "OpenAI"
              : llm === "SkyEngine 2"
              ? "Anthropic"
              : llm === "SkyEngine 3"
              ? "BOTH"
              : "Gemini",
        }).unwrap();
        if (response) {
          setChatHistory((prev) => [
            ...prev.filter((chat) => chat.type.toString() !== "loading"),
            {
              type: "answer",
              content: response.content,
            },
          ]);
        }
      },
      [getAnswer, llm, filenames, graph_id, analysis_type]
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
        "Skylark",
        true
      );
    }, []);

    const onSendViaEmail = useCallback(async () => {
      if (!ref.current) return;

      const today = new Date().toLocaleDateString();
      const container = document.createElement("div");
      container.appendChild(ref.current.cloneNode(true));
      const removeItems = container.querySelectorAll(
        ".suggestions, .topic, .loading, no-print"
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
        `<h1>Skylark ${companyName} Analysis</h1><br /><b>Created At: ${today}</b><br />${container.innerHTML}`,
        "Skylark"
      );

      emailContentRef.current = {
        subject: `Skylark ${companyName} Analysis`,
        content: base64str,
      };
      showEmailModal(true);
    }, [companyName]);

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
              {["SkyEngine 1", "SkyEngine 2", "SkyEngine 3", "SkyEngine 4"].map((item) => (
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
          companyName={companyName}
          onAddToReport={onAddToReport}
          onJumpTo={onJumpTo}
        />
        <InputBox disabled={loadingAnswer} onSubmitAction={onSend} />
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
