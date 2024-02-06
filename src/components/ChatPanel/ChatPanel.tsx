/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useRef, useCallback, useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { XIconButton } from "../buttons/XIconButton";
import { XPanel } from "../XPanel";
import { ChatContentBox } from "./ChatContentBox";
import { InputBox } from "./InputBox";
import { IChat, IChatResponse, ITopic } from "../../redux/interfaces";
import {
  useCustomQueryMutation,
  useAddChatMutation,
  useGetChatHistoryQuery,
} from "../../redux/services/transcriptAPI";
import { generatePdf } from "../../shared/utils/pdf-generator";

export const ChatPanel = memo(
  ({
    feature_instance_id,
    suggestions = [],
    filenames,
    analysis_type,
    insider_transaction = false,
    onJumpTo,
  }: {
    feature_instance_id: number;
    filenames: string[];
    analysis_type: string;
    suggestions?: ITopic[];
    insider_transaction?: boolean;
    onJumpTo: (tag: string) => void;
  }) => {
    const ref = useRef<HTMLDivElement>();
    const [llm, setLlm] = useState<"OpenAI" | "Anthropic" | "Mistral">("OpenAI");
    const [suggestion, setSuggestion] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<IChat[]>([]);

    const { isLoading: loadingChatHistory, data: chatHistoryData } =
      useGetChatHistoryQuery({ feature_instance_id });
    const [addChat] = useAddChatMutation();
    const [getAnswer, { isLoading, data }] = useCustomQueryMutation();

    const onSend = useCallback(
      async (question: string) => {
        setSuggestion("");
        setChatHistory((prev) => [
          ...prev,
          { type: "question", content: question },
        ]);
        const response = await getAnswer({
          question,
          filenames,
          analysis_type,
          insider_transaction,
          llm,
        }).unwrap();
        setChatHistory((prev) => [
          ...prev.filter((chat) => chat.type.toString() !== "loading"),
          { type: "answer", content: response.content },
        ]);
        addChat({
          feature_instance_id,
          question,
          answer: response.content as string,
        });
        
      },
      [
        llm,
        getAnswer,
        addChat,
        feature_instance_id,
        filenames,
        analysis_type,
        insider_transaction,
      ]
    );

    const onPrint = useCallback(() => {
      if( !ref.current ) return;

      const today = new Date().toLocaleDateString();
      const container = document.createElement('div');
      container.appendChild(ref.current.cloneNode(true));
      const removeItems = container.querySelectorAll(".suggestions, .topic, .loading");
      for (const item of removeItems) {
        item.remove();
      }
      const listings = container.querySelectorAll("li");
      for (const item of listings) {
        const paragraphs = item.querySelectorAll("p");
        for (const paragraph of paragraphs) {
          paragraph.before(...paragraph.childNodes);
          const br = document.createElement('br');
          paragraph.replaceWith(br);
        }
      }
      generatePdf(
        `<h1>Chat History ${today}</h1><br />${container.innerHTML}`,
        `Chat history ${today}`,
        "Skylark"
      );
    }, []);

    const onChooseTopic = useCallback(
      (topicId: string) => {
        setChatHistory((prev) => [
          ...prev,
          {
            type: "suggestions",
            content: suggestions.find((sug) => sug.topic === topicId)!.queries,
          },
        ]);
      },
      [suggestions]
    );

    const onChooseSuggestion = useCallback((suggest: string) => {
      setSuggestion(suggest);
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
      if (!suggestions.length) return;
      setChatHistory((prev) => {
        if (prev.map((item) => item.type).includes("topic")) {
          return prev;
        }
        return [
          ...prev,
          { type: "topic", content: suggestions.map((sug) => sug.topic) },
        ];
      });
    }, [suggestions]);

    useEffect(() => {
      if (isLoading) {
        setChatHistory((prev) => [...prev, { type: "loading", content: "" }]);
      }
    }, [data, isLoading]);

    return (
      <XPanel
        sxProps={{ height: "100%", bgcolor: "#060606" }}
        sxBodyProps={{ p: 1, flex: "none", height: "calc(100% - 45px)" }}
        header={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="body1">Skye Chat</Typography>
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
              {["OpenAI", "Anthropic", "Mistral"].map((item) => (
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
          loading={loadingChatHistory || isLoading}
          chats={chatHistory}
          onChooseTopic={onChooseTopic}
          onChooseSuggestion={onChooseSuggestion}
          onJumpTo={onJumpTo}
          insider_transaction={insider_transaction}
        />
        <InputBox disabled={isLoading || loadingChatHistory} initialQuestion={suggestion} onSubmitAction={onSend} />
      </XPanel>
    );
  }
);
