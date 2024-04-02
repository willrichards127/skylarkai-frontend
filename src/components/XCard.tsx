import { memo } from "react";
import {
  Box,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardActionArea,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { XPopmenu } from "./XPopmenu";
import { IMenuItem, ICard } from "../shared/models/interfaces";

export const XCard = memo(
  ({
    isNew = false,
    thumbnail,
    thumbnailHeight = 110,
    hasThumbnail = false,
    logo,
    label,
    updatedAt,
    width = 320,
    height = 200,
    moreItems,
    onMoreItem,
    onCard,
  }: {
    isNew?: boolean;
    thumbnailHeight?: number;
    width?: number;
    height?: number;
    hasThumbnail?: boolean;
    moreItems?: IMenuItem[];
    onCard?: () => void;
    onMoreItem?: (itemId: string) => void;
  } & ICard) => {
    if (isNew) {
      return (
        <Card sx={{ width, height, bgcolor: "secondary.main" }}>
          <CardActionArea
            onClick={onCard}
            sx={{
              height: "100%",
            }}
          >
            <Box height="100%" p={1}>
              <Box
                sx={{
                  pt: 5,
                  height: thumbnailHeight,
                  display: hasThumbnail ? "auto" : "none",
                  textAlign: "center",
                  border: hasThumbnail ? "1px solid" : "none",
                }}
              >
                <AddIcon sx={{ fontSize: 48 }} />
              </Box>
              <CardHeader
                title={
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    textAlign="center"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {label}
                  </Typography>
                }
              />
            </Box>
          </CardActionArea>
        </Card>
      );
    }
    return (
      <Card
        sx={{ width, height, bgcolor: "secondary.main", position: "relative" }}
      >
        <CardActionArea
          onClick={onCard}
          title={label}
          sx={{
            height: "100%",
          }}
        >
          <Box height="100%" p={1}>
            {hasThumbnail && (
              <CardMedia sx={{ height: thumbnailHeight }} image={thumbnail} />
            )}
            <CardHeader
              avatar={
                <Avatar sx={{ width: 48, height: 48 }} src={logo} alt={label} />
              }
              title={label}
              titleTypographyProps={{ fontSize: 16, fontWeight: "500" }}
              subheader={updatedAt || ""}
            />
          </Box>
        </CardActionArea>
        <Box
          sx={{
            position: "absolute",
            right: 4,
            top: (hasThumbnail ? thumbnailHeight : 0) + 12,
          }}
        >
          {!!moreItems?.length && (
            <XPopmenu
              triggerEl={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              items={moreItems}
              onItem={(id) => (onMoreItem ? onMoreItem(id) : null)}
            />
          )}
        </Box>
      </Card>
    );
  }
);

XCard.displayName = "XCard";
