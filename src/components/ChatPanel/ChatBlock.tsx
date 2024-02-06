/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useMemo } from "react";
import { colors, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DotSpinner } from "../DotSpinner";
import { SkylarkChatBotIcon, UserChatIcon } from "../Svgs";
import { IChat } from "../../redux/interfaces";
import { parseCitation } from "../../shared/utils/string";

export const ChatBlock = memo(
  ({
    loading = false,
    chat,
    insider_transaction,
    onChooseTopic,
    onChooseSuggestion,
    onJumpTo,
  }: {
    loading?: boolean;
    chat: IChat;
    insider_transaction?: boolean;
    onChooseTopic: (topicId: string) => void;
    onChooseSuggestion: (suggestion: string) => void;
    onJumpTo: (tag: string) => void;
  }) => {
    const isBot = chat.type === "answer";
    const isLoading = chat.type === "loading";
    const isTopic = chat.type === "topic";
    const isSuggestions = chat.type === "suggestions";

    const answer = useMemo(() => {
      if (isBot) {
        return parseCitation(chat.content as string, insider_transaction ? 2 : 4); // limited words of each quote to 5
      }
    }, [isBot, chat.content, insider_transaction]);

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
                    pointerEvents: loading ? 'none' : 'auto',
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
            }}
          >
            <Box width="100%" fontSize={13}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  pre: (props) => <p {...(props as any)} />,
                  code: (props) => <p {...(props as any)} />,
                  li: ({ ordered, ...props }: any) => (
                    <li style={{ marginLeft: 16 }} {...props} />
                  ),
                  p: ({ ...props }: any) => (
                    <p {...props} style={{ margin: "6px 0" }} />
                  ),
                  a: (props: any) => (
                    <a
                      {...props}
                      style={{ color: "blue" }}
                      onClick={() => onJumpTo(props.href)}
                    />
                  ),
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
          </Box>
        )}
      </Box>
    );
  }
);
