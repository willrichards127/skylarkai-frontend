import { memo } from "react";
import { Box, IconButton, Typography } from "@mui/material";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SettingsIcon from "@mui/icons-material/Settings";
import { XChip } from "../../../../../../components/XChip";
// import { XPopmenu } from "../../../../../../components/XPopmenu";
import { ITemplateNode } from "../../../../../../shared/models/interfaces";

export const Header = memo(
  ({
    nodeId,
    nodeContent,
    onClose,
    onItem,
  }: {
    nodeId: string;
    nodeContent: ITemplateNode;
    onItem: (itemId: string) => void;
    onClose: () => void;
  }) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <img
          src={`/categories/${nodeContent.name}.png`}
          width={20}
          height={20}
          alt={nodeContent.name}
        />
        <Typography variant="caption">{nodeContent.description}</Typography>
        <XChip label={nodeId} />
        <Box mr="auto" />
        {/* {nodeContent.name === "OpenAI" && (
					<XPopmenu
						triggerEl={
							<IconButton size='small'>
								<MoreHorizIcon sx={{ fontSize: 14 }} />
							</IconButton>
						}
						items={[
							{
								id: "settings",
								content: (
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 2,
											fontSize: 14,
										}}
									>
										<SettingsIcon sx={{ fontSize: 16 }} />
										Settings
									</Box>
								),
								clickable: true,
							},
							{
								id: "copy",
								content: (
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: 2,
											fontSize: 14,
										}}
									>
										<ContentCopyIcon sx={{ fontSize: 16 }} />
										Copy
									</Box>
								),
								clickable: true,
							},
						]}
						onItem={onItem}
					/>
				)} */}
        {nodeContent.name === "InvestmentCriteria" && (
          <IconButton size="small" onClick={() => onItem("criteria")}>
            <SettingsIcon sx={{ fontSize: 14 }} />
          </IconButton>
        )}
        <IconButton size="small" onClick={onClose}>
          <CloseIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
    );
  }
);

Header.displayName = "Header";
