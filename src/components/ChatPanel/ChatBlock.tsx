/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { colors, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import EmailIcon from "@mui/icons-material/Email";
import { DotSpinner } from "../DotSpinner";
import { XIconButton } from "../buttons/XIconButton";
import { SkylarkChatBotIcon, UserChatIcon } from "../Svgs";
import { IChat } from "../../redux/interfaces";
import { parseCitation } from "../../shared/utils/string";
import { SendEmailModal } from "../modals/SendEmailModal";

export const ChatBlock = memo(
  ({
    loading = false,
    chat,
    analysis_type,
    insider_transaction,
    chats,
    onChooseTopic,
    onChooseSuggestion,
    onJumpTo,
  }: {
    loading?: boolean;
    analysis_type: string;
    companyName?: string;
    chat: IChat;
    chats: IChat[];
    insider_transaction?: boolean;
    onChooseTopic: (topicId: string) => void;
    onChooseSuggestion: (suggestion: string) => void;
    onJumpTo: ({
      filename,
      quote,
    }: {
      filename: string;
      quote: string;
    }) => void;
  }) => {
    const isBot = chat.type === "answer";
    const isLoading = chat.type === "loading";
    const isTopic = chat.type === "topic";
    const isSuggestions = chat.type === "suggestions";

    const ref = useRef<HTMLDivElement>();
    const questionRef = useRef<string>("");

    const [blogHovered, setBlogHovered] = useState<boolean>(false);
    const [emailModal, showEmailModal] = useState<boolean>(false);

    const answer = useMemo(() => {
      if (isBot) {
        return parseCitation(
          chat.content as string,
          insider_transaction ? 2 : 4
        ); // limited words of each quote to 5
      }
    }, [isBot, chat.content, insider_transaction]);

    const onMouseOver = useCallback(() => {
      setBlogHovered(true);
    }, []);
    const onMouseOut = useCallback(() => {
      setBlogHovered(false);
    }, []);

    const onSendViaEmail = useCallback((question: string) => {
      questionRef.current = `<b>Question: ${question}</b><br />Answer: `;
      showEmailModal(true);
    }, []);

    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "flex-start",
        }}
        className={chat.type}
      >
        {isLoading ? (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <SkylarkChatBotIcon />
            <DotSpinner />
          </Box>
        ) : isBot ? (
          <Box>
            <SkylarkChatBotIcon />
          </Box>
        ) : isTopic ? (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Box>
              <SkylarkChatBotIcon />
            </Box>
            <Box sx={{ borderRadius: 2, p: 1, bgcolor: "secondary.main" }}>
              <Typography variant="body2" gutterBottom>
                Choose topics.
              </Typography>
              {(chat.content as string[]).map((topic, index) => (
                <Box
                  key={topic}
                  sx={{
                    p: 0.5,
                    mb: 0.2,
                    fontSize: 12,
                    color: colors.grey[300],
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                      fontWeight: "bold",
                    },
                    textTransform: "capitalize",
                  }}
                  onClick={() => onChooseTopic(topic)}
                >
                  {index + 1}. {topic.replace(/_/g, " ")}
                </Box>
              ))}
            </Box>
          </Box>
        ) : isSuggestions ? (
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Box>
              <SkylarkChatBotIcon />
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                p: 1,
                bgcolor: "secondary.main",
              }}
            >
              {(chat.content as string[]).map((suggestion, index) => (
                <Box
                  key={suggestion}
                  sx={{
                    p: 0.5,
                    fontSize: 12,
                    color: colors.grey[300],
                    pointerEvents: loading ? "none" : "auto",
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                  onClick={() => onChooseSuggestion(suggestion)}
                >
                  {index + 1}. {suggestion}
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box>
            <UserChatIcon />
          </Box>
        )}

        {!isTopic && !isSuggestions && (
          <Box
            sx={{
              ml: 1,
              borderRadius: 2,
              bgcolor: isBot ? "secondary.main" : colors.grey[800],
              display: "flex",
              gap: 1,
              px: 1,
              alignItems: "start",
              width: isBot ? "100%" : "auto",
              position: "relative",
            }}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          >
            <Box width="100%" fontSize={13} ref={ref}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw as any]}
                allowElement={(element, _, parent) => {
                  if (
                    element.tagName === "p" &&
                    (parent as any).tagName === "li"
                  ) {
                    return false;
                  }
                  if (
                    element.tagName === "strong" &&
                    (parent as any).tagName === "li"
                  ) {
                    return false;
                  }
                  return true;
                }}
                unwrapDisallowed={true}
                components={{
                  pre: (props) => <p {...(props as any)} />,
                  code: (props) => <p {...(props as any)} />,
                  li: ({ ordered, ...props }: any) => (
                    <li style={{ marginLeft: 16 }} {...props} />
                  ),
                  p: ({ ...props }: any) => (
                    <p {...props} style={{ margin: "6px 0" }} />
                  ),
                  a: (props: any) => {
                    if (props.href) {
                      const splited = props.href.split("______");
                      const filename = splited[0]
                        .replaceAll("___", " ")
                        .slice(1);
                      const quote = splited[1].replaceAll("___", " ");
                      return (
                        <a
                          {...props}
                          className="no-print"
                          style={{ color: "tomato" }}
                          onClick={() => onJumpTo({ filename, quote })}
                          title={`${filename}.${
                            analysis_type === "edgar" ? "html" : "pdf"
                          }:${quote}`}
                        />
                      );
                    } else return <p {...props} />;
                  },
                  table: (props) => (
                    <table
                      {...props}
                      style={{
                        borderCollapse: "collapse",
                        margin: "4px 2px",
                        overflowX: "auto",
                      }}
                    />
                  ),
                  th: (props) => (
                    <th
                      {...props}
                      style={{
                        textAlign: "center",
                        padding: "2px 4px",
                        border: `1px solid ${colors.grey[500]}`,
                      }}
                    />
                  ),
                  td: (props) => (
                    <td
                      {...props}
                      style={{
                        textAlign: "center",
                        padding: "4px 8px",
                        border: `1px solid ${colors.grey[500]}`,
                      }}
                    />
                  ),
                }}
              >
                {isBot ? answer : (chat.content as string)}
              </ReactMarkdown>
            </Box>
            {blogHovered && isBot && (
              <XIconButton
                size="small"
                variant="contained"
                sxProps={{
                  "&.MuiButtonBase-root": {
                    minHeight: 31,
                    minWidth: 31,
                  },
                  position: "absolute",
                  right: 4,
                  top: 4,
                }}
                onClick={() =>
                  onSendViaEmail(chats[chats.length - 2].content.toString())
                }
              >
                <EmailIcon />
              </XIconButton>
            )}
          </Box>
        )}
        {emailModal && (
          <SendEmailModal
            open={emailModal}
            prefix={questionRef.current}
            element={ref.current!}
            onClose={() => showEmailModal(false)}
          />
        )}
      </Box>
    );
  }
);
