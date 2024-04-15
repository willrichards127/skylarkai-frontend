import { memo } from "react";
import {
  Box,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardActionArea,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { XPopmenu } from "../../../../components/XPopmenu";
import { ICard, IMenuItem } from "../../../../shared/models/interfaces";

export const ReportCard = memo(
  ({
    thumbnail,
    thumbnailHeight = 110,
    hasThumbnail = false,
    logo,
    label,
    updatedAt,
    width,
    height,
    moreItems,
    onMoreItem,
    onCard,
  }: {
    thumbnailHeight?: number;
    width?: number;
    height?: number;
    hasThumbnail?: boolean;
    moreItems?: IMenuItem[];
    onCard?: () => void;
    onMoreItem?: (itemId: string) => void;
  } & ICard) => {
    return (
      <Card
        sx={{
          width,
          height,
          bgcolor: "#32324E80",
          position: "relative",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "absolute", right: 4, top: 4 }}>
          {!!moreItems?.length && (
            <XPopmenu
              triggerEl={
                <IconButton size="small" sx={{ zIndex: 999 }}>
                  <MoreVertIcon />
                </IconButton>
              }
              items={moreItems}
              onItem={(id) => (onMoreItem ? onMoreItem(id) : null)}
            />
          )}
        </Box>
        <CardActionArea
          onClick={onCard}
          title={label}
          sx={{
            height: "100%",
          }}
        >
          <Box
            height="100%"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {hasThumbnail && (
              <CardMedia sx={{ height: thumbnailHeight }} image={thumbnail} />
            )}
            <CardHeader
              sx={{ flex: 1 }}
              avatar={
                <Avatar sx={{ width: 48, height: 48 }} src={logo} alt={label} />
              }
              title={label}
              titleTypographyProps={{ fontSize: 16, fontWeight: "500" }}
              subheader={updatedAt || ""}
            />
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);

ReportCard.displayName = "ReportCard";
