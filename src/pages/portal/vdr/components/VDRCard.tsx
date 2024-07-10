import { memo, useMemo } from "react";
import {
  Box,
  IconButton,
  Card,
  CardActionArea,
  // Rating,
  Typography,
  LinearProgress,
  Chip,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { XPopmenu } from "../../../../components/XPopmenu";
import { IMenuItem } from "../../../../shared/models/interfaces";
import { IVDRDetail } from "../interfaces";

export const VDRCard = memo(
  ({
    name,
    files,
    moreItems,
    onMoreItem,
    onCard,
  }: {
    moreItems?: IMenuItem[];
    onCard?: () => void;
    onMoreItem?: (itemId: string) => void;
  } & IVDRDetail) => {
    const value = useMemo(
      () =>
        Math.ceil(
          (files.reduce((prev, cur) => (cur.ingested ? prev + 1 : prev), 0) /
            files.length) *
            100
        ),
      [files]
    );

    const status = useMemo(
      () =>
        files.reduce(
          (prev, cur) => {
            if (!cur.ingested_at) {
              return {
                ...prev,
                pending: prev.pending + 1,
              };
            } else if (cur.ingested) {
              return {
                ...prev,
                success: prev.success + 1,
              };
            } else {
              return {
                ...prev,
                fail: prev.fail + 1,
              };
            }
          },
          { success: 0, fail: 0, pending: 0 }
        ),
      [files]
    );

    return (
      <Card
        sx={{
          bgcolor: "#32324E80",
          position: "relative",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          width: 360,
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
            <Box
              sx={{
                display: "flex",
                gap: 1,
                flexDirection: "column",
              }}
            >
              <Box sx={{ width: "100%", color: "gray" }}>
                <LinearProgress
                  sx={{ width: "100%" }}
                  variant="determinate"
                  value={value}
                  color={files.length ? "success" : "inherit"}
                />
              </Box>
              <Box display={"flex"} gap={"8px"}>
                {status.success ? (
                  <Chip
                    size="small"
                    label={`Success: ${status.success}`}
                    color={"success"}
                    variant="filled"
                  />
                ) : null}
                {status.fail ? (
                  <Chip
                    size="small"
                    label={`Fail: ${status.fail}`}
                    color={"error"}
                    variant="filled"
                  />
                ) : null}
                {status.pending ? (
                  <Chip
                    size="small"
                    label={`Pending: ${status.pending}`}
                    color={"warning"}
                    variant="filled"
                  />
                ) : null}
              </Box>
              {/* <Chip
                size="small"
                label={label}
                color={color}
                variant="filled"
              /> */}
              {/* <Rating name="read-only" value={rating} size="small" readOnly /> */}
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);
