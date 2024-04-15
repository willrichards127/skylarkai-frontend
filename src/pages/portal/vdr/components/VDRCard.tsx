import { memo } from "react";
import {
  Box,
  IconButton,
  Chip,
  Card,
  CardActionArea,
  Rating,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { XPopmenu } from "../../../../components/XPopmenu";
import { IMenuItem } from "../../../../shared/models/interfaces";
import { IVDR } from "../interfaces";

const statusDict: Record<number, string> = {
  0: "info",
  1: "warning",
  2: "success",
};

export const VDRCard = memo(
  ({
    name,
    filenames,
    updated,
    rating,
    status,
    moreItems,
    onMoreItem,
    onCard,
  }: {
    moreItems?: IMenuItem[];
    onCard?: () => void;
    onMoreItem?: (itemId: string) => void;
  } & IVDR) => {
    return (
      <Card
        sx={{
          bgcolor: "#32324E80",
          position: "relative",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <CardActionArea
          onClick={onCard}
          sx={{
            height: "100%",
          }}
        >
          <Box sx={{ height: "100%", p: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Files: {filenames.length}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {updated || ""}
            </Typography>

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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Chip
                size="small"
                label={
                  status === 1
                    ? "Processing"
                    : status === 2
                    ? "Completed"
                    : "Draft"
                }
                color={statusDict[status] as any}
                variant="filled"
              />
              <Rating name="read-only" value={rating} size="small" readOnly />
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);
