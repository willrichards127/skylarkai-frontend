/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useCallback, useMemo, useRef, useState } from "react";
import { colors, Box, Button } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import EmailIcon from "@mui/icons-material/Email";
import { DotSpinner } from "../../../../../components/DotSpinner";
import { XIconButton } from "../../../../../components/buttons/XIconButton";
import {
  SkylarkChatBotIcon,
  UserChatIcon,
} from "../../../../../components/Svgs";
import { IChat } from "../../../../../redux/interfaces";
import { parseCitation } from "../../../../../shared/utils/string";
import { SendEmailModal } from "../../../../../components/modals/SendEmailModal";
import { getPdfInBase64 } from "../../../../../shared/utils/pdf-generator";

export const ChatBlock = memo(
  ({
    chat,
    chats,
    onJumpTo,
    onAddToReport
  }: {
    chat: IChat;
    chats: IChat[];
    onAddToReport: (content: string) => void;
    onJumpTo: (tag: string) => void;
  }) => {
    const isBot = chat.type === "answer";
    const isLoading = chat.type === "loading";

    const ref = useRef<HTMLDivElement>();
    const emailContentRef = useRef<
      { subject?: string; content: string } | undefined
    >();

    const [blogHovered, setBlogHovered] = useState<boolean>(false);
    const [emailModal, showEmailModal] = useState<boolean>(false);

    const answer = useMemo(() => {
      if (isBot) {
        return parseCitation(chat.content as string, 4); // limited words of each quote to 5
      }
    }, [isBot, chat.content]);

    const onMouseOver = useCallback(() => {
      setBlogHovered(true);
    }, []);
    const onMouseOut = useCallback(() => {
      setBlogHovered(false);
    }, []);

    const onSendViaEmail = useCallback(async (question: string) => {
      if (!ref.current) return;
      const base64str = await getPdfInBase64(ref.current.innerHTML, "Skylark");
      emailContentRef.current = {
        subject: question,
        content: base64str,
      };
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
        ) : (
          <Box>
            <UserChatIcon />
          </Box>
        )}

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
                    style={{ color: "tomato" }}
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
          {blogHovered && isBot && (
            <>
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
              <Button
                size="small"
                variant="contained"
                sx={{
                  position: "absolute",
                  right: 4,
                  bottom: 4,
                }}
                onClick={() =>
                  onAddToReport(chat.content as string)
                }
              >
                Add to Report
              </Button>
            </>
          )}
        </Box>

        {emailModal && (
          <SendEmailModal
            open={emailModal}
            onClose={() => showEmailModal(false)}
            content={emailContentRef.current!.content}
            initialSubject={emailContentRef.current!.subject}
          />
        )}
      </Box>
    );
  }
);
