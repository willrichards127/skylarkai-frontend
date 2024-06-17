/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useRef, useCallback, useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import EmailIcon from "@mui/icons-material/Email";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import { XPanel } from "../../../../../components/XPanel";
import { ChatContentBox } from "./ChatContentBox";
import { InputBox } from "./InputBox";
import { IChat, IChatResponse } from "../../../../../redux/interfaces";
import {
  useAddChatMutation,
  useGetChatHistoryQuery,
} from "../../../../../redux/services/reportApi";
import { generatePdf } from "../../../../../shared/utils/pdf-generator";
import { SendEmailModal } from "../../../../../components/modals/SendEmailModal";
import { useCustomQueryMutation } from "../../../../../redux/services/transcriptAPI";

export const ChatPanel = memo(
  ({
    graph_id,
    analysis_type,
    companyName,
    filenames,
    onAddToReport,
    onJumpTo,
  }: {
    graph_id: number;
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

    const [llm, setLlm] = useState<"OpenAI" | "Anthropic" | "BOTH" | "Gemini">(
      "OpenAI"
    );
    const [recursion, setRecursion] = useState<number>(1);
    const [emailModal, showEmailModal] = useState<boolean>(false);
    const [chatHistory, setChatHistory] = useState<IChat[]>([]);

    const { isLoading: loadingChatHistory, data: chatHistoryData } =
      useGetChatHistoryQuery({ reportId: graph_id });
    const [addChat] = useAddChatMutation();
    const [getAnswer, { isLoading: loadingAnswer }] = useCustomQueryMutation();

    const onSend = useCallback(
      async (question: string) => {
        setChatHistory((prev) => [
          ...prev,
          { type: "question", content: question },
        ]);
        const response = await getAnswer({
          graph_id,
          question,
          filenames,
          analysis_type,
          recursion,
          company_name: companyName,
          llm,
        }).unwrap();
        if (response) {
          setChatHistory((prev) => [
            ...prev.filter((chat) => chat.type.toString() !== "loading"),
            {
              type: "answer",
              content: response.content,
              rating: response.rating,
              rating_response: response.rating_response,
            },
          ]);
          addChat({
            reportId: graph_id,
            question,
            answer: response.content as string,
          });
        }
      },
      [
        getAnswer,
        graph_id,
        filenames,
        analysis_type,
        recursion,
        companyName,
        llm,
        addChat,
      ]
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
      showEmailModal(true);
    }, []);

    useEffect(() => {
      if (loadingChatHistory || !chatHistoryData || !chatHistoryData.length)
        return;
      const extracted = chatHistoryData.reduce(
        (nv: IChat[], cv: IChatResponse) => {
          nv = [
            ...nv,
            { type: "question", content: cv.question },
            { type: "answer", content: cv.answer },
          ];
          return nv;
        },
        []
      );
      setChatHistory(extracted);
    }, [loadingChatHistory, chatHistoryData]);

    useEffect(() => {
      if (loadingAnswer) {
        setChatHistory((prev) => [...prev, { type: "loading", content: "" }]);
      }
    }, [loadingAnswer]);

    return (
      <XPanel
        sxProps={{
          height: "100%",
          bgcolor: "#060606",
          width: "100%",
          borderRadius: "none",
        }}
        sxBodyProps={{ p: 1, flex: "none", height: "calc(100% - 45px)" }}
        sxHeaderProps={{ bgcolor: "secondary.main" }}
        header={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
                  padding: "8px 14px",
                  lineHeight: "14px",
                },
              }}
            >
              {["OpenAI", "Anthropic", "BOTH", "Gemini"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </TextField>
            <TextField
              size="small"
              select
              value={recursion}
              onChange={(e) => setRecursion(+e.target.value)}
              SelectProps={{
                native: true,
              }}
              sx={{
                mr: 1,
                "& .MuiNativeSelect-select": {
                  fontSize: 12,
                  padding: "8px 14px",
                  lineHeight: "14px",
                },
              }}
            >
              {[
                "Quickest Overview",
                "Balanced Summary",
                "In-Depth Insights",
              ].map((item, index) => (
                <option key={item} value={index + 1}>
                  {item}
                </option>
              ))}
            </TextField>
            <Box mr="auto" />
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
          graph_id={graph_id}
          chats={chatHistory}
          companyName={companyName}
          onAddToReport={onAddToReport}
          onJumpTo={onJumpTo}
        />
        <InputBox
          disabled={loadingAnswer || loadingChatHistory}
          onSubmitAction={onSend}
        />
        {emailModal && (
          <SendEmailModal
            open={emailModal}
            onClose={() => showEmailModal(false)}
            element={ref.current!}
          />
        )}
      </XPanel>
    );
  }
);
