import { memo, useCallback } from "react";
import { Box, MenuItem } from "@mui/material";
import { XSidebar } from "../../../../components/XSidebar";
import { IMenuItem } from "../../../../shared/models/interfaces";
import { SearchIcon } from "../../../../components/Svgs";
import RedditIcon from "@mui/icons-material/Reddit";

const utilItems: IMenuItem[] = [
  {
    id: "search",
    content: <SearchIcon />,
    clickable: true,
  },
  // {
  // 	id: "new-report",
  // 	content: <NewFileIcon />,
  // 	clickable: true,
  // },
  {
    id: "chatbot",
    content: <RedditIcon />,
    clickable: true,
  },
];

export const UtilPanel = memo(
  ({ onChatAssist }: { onChatAssist: () => void }) => {
    const onMeunItem = useCallback(
      (menuItemId: string) => {
        if (menuItemId === "chatbot") {
          onChatAssist();
        }
      },
      [onChatAssist]
    );

    return (
      <XSidebar width={100}>
        <Box py={2} px={1}>
          <Box
            sx={{ gap: 2, p: 1, borderRadius: 2, bgcolor: "rgba(0,0,0,0.2)" }}
          >
            {utilItems.map((item) => (
              <MenuItem
                key={item.id}
                sx={{ py: 1.5 }}
                onClick={() => onMeunItem(item.id)}
              >
                {item.content}
              </MenuItem>
            ))}
          </Box>
        </Box>
      </XSidebar>
    );
  }
);

UtilPanel.displayName = "UtilPanel";
