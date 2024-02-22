import { memo, useCallback, useState } from "react";
import { Badge, Box, MenuItem } from "@mui/material";
import { XSidebar } from "../../../../components/XSidebar";
import { IMenuItem } from "../../../../shared/models/interfaces";
import {
  SearchIcon,
  NewFileIcon,
  CloneIcon,
  BotWhiteIcon,
} from "../../../../components/Svgs";
import { FileUploadModal } from "./FileUploadModal";
import { SearchTextModal } from "./SearchTextModal";
import DescriptionIcon from "@mui/icons-material/Description";
import CancelIcon from "@mui/icons-material/Cancel";

const utilItems: IMenuItem[] = [
  {
    id: "search",
    content: <SearchIcon />,
    clickable: true,
  },
  {
    id: "upload-file",
    content: <NewFileIcon />,
    clickable: true,
  },
  {
    id: "copy-report",
    content: <CloneIcon />,
    clickable: true,
  },
  {
    id: "chatbot",
    content: <BotWhiteIcon />,
    clickable: true,
  },
];

export const UtilPanel = memo(
  ({
    uploadedFiles,
    onChatAssist,
    onRemoveFiles,
    onUploadedFile,
    onSearchText
  }: {
    onRemoveFiles: (type: string, filename: string) => void;
    uploadedFiles?: Record<string, File>;
    onChatAssist: () => void;
    onUploadedFile: (type: string, file: File) => void;
    onSearchText: (search: string) => void;
  }) => {
    const [fileUploadModal, showFileUploadModal] = useState<boolean>(false);
    const [searchTextModal, showSearchTextModal] = useState<boolean>(false);
    const onMeunItem = useCallback(
      (menuItemId: string) => {
        if (menuItemId === "chatbot") {
          onChatAssist();
        } else if (menuItemId === "upload-file") {
          showFileUploadModal(true);
        } else if(menuItemId === 'search') {
          showSearchTextModal(true);
        }
      },
      [onChatAssist]
    );

    const onRemoveFile = useCallback(
      (type: string, filename: string) => {
        onRemoveFiles(type, filename);
      },
      [onRemoveFiles]
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
          {!!uploadedFiles && !!Object.keys(uploadedFiles).length && (
            <>
              <Box textAlign="center" mt={1} fontSize={12}>
                Files
              </Box>
              <Box
                sx={{
                  gap: 2,
                  p: 1,
                  borderRadius: 2,
                  bgcolor: "rgba(0,0,0,0.2)",
                }}
              >
                {Object.entries(uploadedFiles).map(([type, file]) => (
                  <MenuItem
                    key={file.name}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                    title={file.name}
                    // onClick={() => onMeunItem(item.id)}
                  >
                    <Badge
                      badgeContent={
                        <CancelIcon
                          sx={{ fontSize: 16 }}
                          onClick={() => onRemoveFile(type, file.name)}
                        />
                      }
                    >
                      <DescriptionIcon />
                    </Badge>
                    <Box sx={{ fontSize: 10 }}>{file.name}</Box>
                  </MenuItem>
                ))}
              </Box>
            </>
          )}
        </Box>
        {fileUploadModal && (
          <FileUploadModal
            open={fileUploadModal}
            onClose={() => showFileUploadModal(false)}
            onUpladedFile={(file) => onUploadedFile("file", file)}
          />
        )}
        {searchTextModal && (
          <SearchTextModal
            open={searchTextModal}
            onClose={() => showSearchTextModal(false)}
            onSearch={onSearchText}
          />
        )}
      </XSidebar>
    );
  }
);

UtilPanel.displayName = "UtilPanel";
