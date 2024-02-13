import { memo } from "react";
import { Avatar, Box } from "@mui/material";
import * as colors from "@mui/material/colors";
import ReactMarkdown from "react-markdown";
import { TChat } from "../../shared/models/types";

export const ChatBlock = memo(
  ({
    chat,
  }: {
    chat: { type: TChat; content: string; datasets?: string[] };
  }) => {
    const isBot = chat.type === "answer";
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: !isBot ? "row" : "row-reverse",
        }}
      >
        <Avatar className="avatar" sx={{ m: 1 }}>
          {isBot ? "A" : "Q"}
        </Avatar>
        <Box
          sx={{
            borderRadius: 2,
            bgcolor: isBot ? "secondary.main" : colors.grey[800],
            display: "flex",
            gap: 1,
            p: 2,
            alignItems: "start",
            width: isBot ? "100%" : "auto",
          }}
        >
          <Box width="100%" fontSize={14}>
            <ReactMarkdown
              components={{
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                li: ({ node, ...props }) => (
                  <li style={{ marginLeft: 16 }} {...props} />
                ),
              }}
            >
              {chat.content || ""}
            </ReactMarkdown>
          </Box>
        </Box>
      </Box>
    );
  }
);

ChatBlock.displayName = "ChatBlock";
