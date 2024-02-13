import { useEffect, forwardRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";

import { DotSpinner } from "../loading-spinners/DotSpinner";
import { ChatBlock } from "./ChatBlock";
import { TChat } from "../../shared/models/types";

export const ChatContentBox = forwardRef(
  (
    {
      chats,
      loading,
    }: {
      loading?: boolean;
      chats: { type: TChat; content: string; datasets?: string[] }[];
    },
    ref: any
  ) => {
    useEffect(() => {
      if (!ref.current) return;
      ref.current.scrollTop = ref.current.scrollHeight;
    }, [chats, loading]);
    return (
      <Box
        ref={ref}
        sx={{
          p: 1,
          bgcolor: "rgba(0, 0, 0, 0.1)",
          alignItems: "start",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          gap: 1,
          height: "calc(100% - 48px)",
        }}
      >
        {chats.map((chat) => (
          <ChatBlock key={uuidv4()} chat={chat} />
        ))}
        {!!loading && (
          <Box width="100%">
            <DotSpinner />
          </Box>
        )}
      </Box>
    );
  }
);

ChatContentBox.displayName = "ChatContentBox";
