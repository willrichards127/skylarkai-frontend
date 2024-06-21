import { memo } from "react";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  CardActionArea,
  colors,
} from "@mui/material";
import { convertUtcToLocal } from "../../../../shared/utils/dateUtils";

export const CompanyCard = memo(
  ({
    width = 300,
    height = 160,
    logo,
    label,
    createdAt,
    onCard,
  }: {
    logo?: string;
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
          <Box height="100%" p={2}>
            <Box p={1}>
              <Avatar
                sx={{ width: 48, height: 48, bgcolor: colors.blue[500] }}
                src={logo}
                alt={label}
              >
                {label!.substring(0, 1)}
              </Avatar>
            </Box>
            <CardHeader
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
                  {label}
                </Box>
              }
              subheader={<Box fontSize={14}>{convertUtcToLocal(createdAt || "")}</Box>}
            />
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);

CompanyCard.displayName = "CompanyCard";
