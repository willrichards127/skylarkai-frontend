import { memo, useCallback, useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  CircularProgress,
  colors,
} from "@mui/material";
import { XPanel } from "../XPanel";
import { ChatContentBox } from "./ChatContentBox";
import { InputBox } from "./InputBox";
import { LogoIcon } from "../Svgs";
import { XIconButton } from "../buttons/XIconButton";
import PrintIcon from "@mui/icons-material/Print";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  useGetCustomQueryMutation,
  useGetChatWithDataMutation,
  useGetChatHistoryQuery,
} from "../../redux/services/reportApi";
import { TChat } from "../../shared/models/types";

const historyListWidth = 252;

export const ChatPanel = memo(
  ({
    setupId,
    content,
    isFloating = false,
  }: {
    setupId: number;
    content?: string;
    isFloating?: boolean;
  }) => {
    const ref = useRef<HTMLDivElement>();
    const { isFetching: isFetchingChatHistoryDict, data: chatHistoryDict } =
      useGetChatHistoryQuery(
        {
          setupId,
        },
        { skip: isFloating }
      );

    const [getAnswer, { isLoading, data }] = useGetCustomQueryMutation();
    const [getChatAnswer, { isLoading: isLoadingChat, data: chatData }] =
      useGetChatWithDataMutation();
    const [chatHistory, setChatHistory] = useState<
      { type: TChat; content: string; datasets?: string[] }[]
    >([]);

    const onSend = useCallback(
      (question: string) => {
        setChatHistory((prev) => [
          ...prev,
          { type: "question", content: question },
        ]);
        if (isFloating) {
          getChatAnswer({
            setupId,
            question,
            content: content!,
          });
        } else {
          getAnswer({
            setupId,
            question,
            chatMode: true,
          });
        }
      },
      [setupId, getAnswer, isFloating, getChatAnswer, content]
    );

    const onPrint = useCallback(() => {
      const contentToPrint = ref.current;
      if (contentToPrint) {
        if (contentToPrint) {
          const htmlContent = `
					<body>
          <style>
          .avatar {
              margin-left: 4px;
              margin-right: 4px;
              margin-bottom: -16px;
              border-radius: 50%;
              width: 44px;
              height: 44px;
              font-size: 24px;
              text-align: center;
              font-weight: bold;
          }
          </style>
          ${(contentToPrint as HTMLDivElement).innerHTML}
          </body>`;

          fetch(`${process.env.apiUrl}generate_pdf`, {
            method: "POST",
            body: new URLSearchParams({ html_content: htmlContent }),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
            .then((response) => {
              return response.blob();
            })
            .then((blob) => {
              // Create a download link for the PDF
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "output.pdf";
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      }
    }, []);

    const onOldHistory = useCallback((oldRecords: any) => {
      const extracted = oldRecords.reduce(
        (pv: any, cv: any) => [
          ...pv,
          { type: "question", content: cv.content.question },
          { type: "answer", content: cv.content.answer },
        ],
        []
      );
      setChatHistory(extracted);
    }, []);

    useEffect(() => {
      if (isFloating) {
        if (!chatData) return;
        setChatHistory((prev) => [
          ...prev,
          { type: "answer", content: chatData.answer },
        ]);
      } else {
        if (!data) return;

        setChatHistory((prev) => [...prev, { type: "answer", content: data }]);
      }
    }, [data, chatData, isFloating]);

    return (
      <Box pt={isFloating ? 0 : 10} px={isFloating ? 0 : 16}>
        <XPanel
          sxBodyProps={{ width: "100%", pb: 1 }}
          header={
            <Box
              sx={{
                display: "flex",
                gap: 2,
                p: isFloating ? 0.5 : 2,
                alignItems: "center",
              }}
            >
              <LogoIcon
                width={isFloating ? 24 : 47}
                height={isFloating ? 22 : 45}
              />
              <Typography variant={isFloating ? "caption" : "h6"}>
                Skylark AI chatbot
              </Typography>
              <Box mr="auto" />
              <XIconButton variant="contained" onClick={onPrint}>
                <PrintIcon />
              </XIconButton>
            </Box>
          }
        >
          <Box
            sx={{
              width: isFloating ? 400 : "100%",
              height: isFloating ? 480 : 720,
              display: "flex",
              gap: 1,
            }}
          >
            {!isFloating &&
              (isFetchingChatHistoryDict ? (
                <Box textAlign="center" p={1} width={historyListWidth}>
                  <CircularProgress />
                </Box>
              ) : !chatHistoryDict ? (
                <Box
                  textAlign="center"
                  p={1}
                  fontSize={12}
                  color={colors.grey[700]}
                  width={historyListWidth}
                >
                  No history available
                </Box>
              ) : (
                <List
                  sx={{
                    bgcolor: "background.paper",
                    overflowY: "auto",
                    width: historyListWidth,
                    height: "100%",
                  }}
                >
                  {Object.entries(chatHistoryDict).map(
                    ([date, records]: [string, any]) => (
                      <ListItemButton
                        key={date}
                        onClick={() => onOldHistory(records)}
                      >
                        <ListItemIcon>
                          <ChatBubbleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box
                              sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {records[0].content.question}
                            </Box>
                          }
                          secondary={date}
                        />
                      </ListItemButton>
                    )
                  )}
                </List>
              ))}
            <Box
              sx={{
                height: "100%",
                width: isFloating ? '100%' : `calc(100% - ${historyListWidth}px)`,
              }}
            >
              <ChatContentBox
                ref={ref}
                chats={chatHistory}
                loading={isLoading || isLoadingChat}
              />
              <InputBox onSubmitAction={onSend} disabled={isLoading} />
            </Box>
          </Box>
        </XPanel>
      </Box>
    );
  }
);

ChatPanel.displayName = "ChatPanel";
