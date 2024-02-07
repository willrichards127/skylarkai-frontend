import { memo } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardActionArea,
} from "@mui/material";

export const OrderCard = memo(
  ({
    width = 300,
    height = 200,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    orderStatus,
    logo,
    thumbnail,
    label,
    createdAt,
    onCard,
  }: {
    orderStatus?: number;
    isNew?: boolean;
    logo?: string;
    thumbnail?: string;
    label?: string;
    width?: number;
    height?: number;
    createdAt?: string;
    onCard: () => void;
  }) => {
    return (
      <Card
        sx={{ width, height, bgcolor: "secondary.main", position: "relative" }}
      >
        <CardActionArea
          onClick={onCard}
          title={label}
          sx={{
            height: "100%",
            position: "relative",
          }}
        >
          <Box height="100%" p={1}>
            {thumbnail && <CardMedia sx={{ height: 120 }} image={thumbnail} />}
            <CardHeader
              avatar={
                <Avatar sx={{ width: 32, height: 32 }} src={logo} alt={label} />
              }
              title={
                <Box
                  sx={{
                    fontSize: 14,
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: width - 30,
                  }}
                >
                  {label}
                </Box>
              }
              subheader={createdAt || ""}
            />
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);

OrderCard.displayName = "OrderCard";
