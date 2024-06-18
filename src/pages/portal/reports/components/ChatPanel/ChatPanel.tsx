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
  useGetChatWithDataMutation,
} from "../../../../../redux/services/reportApi";
import { generatePdf } from "../../../../../shared/utils/pdf-generator";
import { SendEmailModal } from "../../../../../components/modals/SendEmailModal";
import moment from "moment";
import { getHumanableDuration } from "../../../../../shared/utils/basic";

export const ChatPanel = memo(
  ({
    reportId,
    setupId,
    content,
    companyName,
    onAddToReport,
    onJumpTo,
  }: {
    reportId: number;
    setupId: number;
    content: string;
    companyName: string;
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
      useGetChatHistoryQuery({ reportId });
    const [addChat] = useAddChatMutation();
    const [getChatAnswer, { isLoading: loadingAnswer }] =
      useGetChatWithDataMutation();

    const onSend = useCallback(
      async (question: string) => {
        setChatHistory((prev) => [
          ...prev,
          { type: "question", content: question },
        ]);
        const startTime = new Date().getTime();
        const response = await getChatAnswer({
          setupId,
          question,
          content,
          llm,
        }).unwrap();
        const endTime = new Date().getTime();
        const duration = endTime - startTime;
        if (response) {
          const answer =
            response.answer +
            `<p class="chat-duration">${getHumanableDuration(
              moment.duration(duration, "milliseconds")
            )}</p>`;

          setChatHistory((prev) => [
            ...prev.filter((chat) => chat.type.toString() !== "loading"),
            {
              type: "answer",
              content: answer,
              // rating: response.rating,
              // rating_response: response.rating_response,
              duration,
            },
          ]);
          addChat({
            reportId: reportId,
            question,
            answer: answer,
          });
        }
      },
      [getChatAnswer, setupId, content, llm, addChat, reportId]
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
        sxBodyProps={{
          p: 1,
          flex: "none",
          height: "calc(100% - 45px)",
          ".chat-duration": {
            textAlign: "right",
            color: "#41dc8e",
          },
        }}
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
          setupId={setupId}
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
