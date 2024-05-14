import { memo } from "react";
import {
  Box,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardActionArea,
  Chip,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { XPopmenu } from "../../../../components/XPopmenu";
import { ICard, IMenuItem } from "../../../../shared/models/interfaces";
import { reviewStatusDict } from "../../../dashboard";

export const ReportCard = memo(
  ({
    reviewStatus,
    thumbnail,
    thumbnailHeight = 110,
    hasThumbnail = false,
    logo,
    label,
    updatedAt,
    width,
    height,
    moreItems,
    executing,
    onMoreItem,
    onCard,
  }: {
    reviewStatus?: number;
    thumbnailHeight?: number;
    width?: number;
    height?: number;
    hasThumbnail?: boolean;
    moreItems?: IMenuItem[];
    executing?: boolean;
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
              subheader={
                <Box>
                  <Typography variant="body2" fontSize={12} gutterBottom>
                    {updatedAt || ""}
                  </Typography>
                  {reviewStatus !== undefined && reviewStatus !== null && (
                    <Chip
                      size="small"
                      label={reviewStatusDict[reviewStatus].label}
                      sx={{
                        fontSize: 12,
                        "&.MuiChip-root": { width: 120 },
                        color: "white",
                        bgcolor: reviewStatusDict[reviewStatus].color,
                      }}
                    />
                  )}
                  {executing ? (
                    <Chip
                      label="Executing"
                      color="warning"
                      size="small"
                      sx={{ color: "white" }}
                    />
                  ) : null}
                </Box>
              }
            />
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);

ReportCard.displayName = "ReportCard";
