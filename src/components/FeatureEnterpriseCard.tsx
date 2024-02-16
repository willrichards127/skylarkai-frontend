import { FC, memo } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardActionArea,
} from "@mui/material";

const sizeDict = {
  lg: {
    width: 437,
    height: 429,
    img_height: 96,
    titleFontSize: 20,
    descFontSize: 14,
  },
  md: {
    width: 437,
    height: 429,
    img_height: 96,
    titleFontSize: 18,
    descFontSize: 12,
  },
};

export const FeatureEnterpriseCard = memo(
  ({
    thumbnail: Icon,
    label,
    size = "md",
    onCard,
  }: {
    thumbnail: FC;
    label: string;
    size: "lg" | "md";
    onCard?: () => void;
  }) => {
    return (
      <Card
        sx={{
          width: sizeDict[size].width,
          height: sizeDict[size].height,
          background: "linear-gradient(0deg, #24242C, #24242C), linear-gradient(139.26deg, rgba(255, 255, 255, 0.36) -3.81%, rgba(0, 0, 0, 0) 106.45%)",
          border: "1px solid",
          borderImageSource: "linear-gradient(139.26deg, rgba(255, 255, 255, 0.36) -3.81%, rgba(0, 0, 0, 0) 106.45%)",
          "&:hover": {
            background: "linear-gradient(0deg, #A9B6FF, #A9B6FF), linear-gradient(139.26deg, rgba(255, 255, 255, 0.36) -3.81%, rgba(0, 0, 0, 0) 106.45%)",
            "& svg": {
              "& path": {
                fill: "#18181F",
              }
            },
            "& .MuiCardHeader-title": {
              color: "#1C1C20"
            }
          }
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
          }}
          onClick={onCard}
        >
          <Box height="100%" p={1} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Icon />
            <CardHeader
              title={
                <Box
                  sx={{
                    fontSize: sizeDict[size].titleFontSize,
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </Box>
              }
            />
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);
