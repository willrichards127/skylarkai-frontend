import { memo } from "react";
import {
  Box,
  Card,
  IconButton,
  CardHeader,
  Avatar,
  CardActionArea,
  colors,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { XPopmenu } from "../../../../components/XPopmenu";
import { IMenuItem } from "../../../../shared/models/interfaces";

export const UnitCard = memo(
  ({
    width = 340,
    height = 80,
    logo,
    name,
    created_at,
    moreItems,
    onCard,
    onMoreItem,
  }: {
    logo?: string;
    name: string;
    width?: number;
    height?: number;
    created_at: string;
    moreItems: IMenuItem[];
    onCard: () => void;
    onMoreItem: (itemId: string) => void;
  }) => {
    return (
      <Card
        sx={{ width, height, bgcolor: "secondary.main", position: "relative" }}
      >
        <Box sx={{ position: "absolute", right: 4, top: 4 }}>
          <XPopmenu
            triggerEl={
              <IconButton size="small" sx={{ zIndex: 999 }}>
                <MoreVertIcon />
              </IconButton>
            }
            items={moreItems}
            onItem={(id) => (onMoreItem ? onMoreItem(id) : null)}
          />
        </Box>
        <CardActionArea
          onClick={onCard}
          title={name}
          sx={{
            height: "100%",
            position: "relative",
          }}
        >
          <Box height="100%" p={1}>
            <CardHeader
              avatar={
                logo ? (
                  <Avatar
                    sx={{ width: 48, height: 48, bgcolor: colors.blue[500] }}
                    src={`${
                      import.meta.env.VITE_API_URL
                    }api/static/avatar/${logo}`}
                    alt={name}
                  >
                    {name!.substring(0, 1)}
                  </Avatar>
                ) : (
                  <Avatar
                    sx={{ width: 48, height: 48, bgcolor: colors.blue[500] }}
                  >
                    {name!.substring(0, 1)}
                  </Avatar>
                )
              }
              title={
                <Box
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: width - 30,
                  }}
                >
                  {name}
                </Box>
              }
              subheader={
                <Box fontSize={14}>
                  {new Date(created_at || "").toLocaleString()}
                </Box>
              }
              sx={{ p: 1 }}
            />
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);
