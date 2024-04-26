import { memo, useMemo } from "react";
import {
  Box,
  IconButton,
  Chip,
  Card,
  CardActionArea,
  // Rating,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { XPopmenu } from "../../../../components/XPopmenu";
import { IMenuItem } from "../../../../shared/models/interfaces";
import { IVDRDetail } from "../interfaces";


export const VDRCard = memo(
  ({
    name,
    files,
    status,
    moreItems,
    onMoreItem,
    onCard,
  }: {
    moreItems?: IMenuItem[];
    onCard?: () => void;
    onMoreItem?: (itemId: string) => void;
  } & IVDRDetail) => {
    const label = useMemo(
      () =>
        !files.length
          ? "Draft"
          : status === 1
          ? "Processing"
          : status === 2
          ? "Success"
          : status === 3
          ? "Fail"
          : "Draft",
      [files.length, status]
    );
    const color = useMemo(
      () =>
        label === "Draft"
          ? "warning"
          : label === "Success"
          ? "primary"
          : label === "Fail"
          ? "error"
          : "info",
      [label]
    );
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
              Files: {files.length}
            </Typography>
            {/* <Typography variant="body2" gutterBottom>
              {updated || ""}
            </Typography> */}

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
                label={label}
                color={color}
                variant="filled"
              />
              {/* <Rating name="read-only" value={rating} size="small" readOnly /> */}
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);
