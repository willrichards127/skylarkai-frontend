/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, forwardRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box } from "@mui/material";
import { ChatBlock } from "./ChatBlock";
import { IChat } from "../../redux/interfaces";

export const ChatContentBox = forwardRef(
  (
    {
      loading = false,
      chats,
      insider_transaction,
      companyName,
      onChooseTopic,
      onChooseSuggestion,
      onJumpTo,
    }: {
      loading?: boolean;
      insider_transaction?: boolean;
      companyName: string;
      chats: IChat[];
      onJumpTo: (tag: string) => void;
      onChooseTopic: (topicId: string) => void;
      onChooseSuggestion: (suggestion: string) => void;
    },
    ref: any
  ) => {
    useEffect(() => {
      if (!ref.current) return;
      ref.current.scrollTop = ref.current.scrollHeight;
    }, [ref, chats]);

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
          height: "calc(100% - 74px)",
        }}
      >
        {chats.map((chat) => (
          <ChatBlock
            loading={loading}
            key={uuidv4()}
            chat={chat}
            companyName={companyName}
            onChooseTopic={onChooseTopic}
            onChooseSuggestion={onChooseSuggestion}
            onJumpTo={onJumpTo}
            insider_transaction={insider_transaction}
            chats={chats}
          />
        ))}
      </Box>
    );
  }
);
