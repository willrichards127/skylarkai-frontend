import { memo } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
} from "@mui/material";

const sizeDict = {
  lg: {
    width: 437,
    height: 492,
    img_height: 245,
    titleFontSize: 20,
    descFontSize: 14,
  },
  md: {
    width: 380,
    height: 340,
    img_height: 161,
    titleFontSize: 18,
    descFontSize: 12,
  },
};

export const FeaturePremiumCard = memo(
  ({
    thumbnail,
    label,
    desc,
    size = "md",
    onCard,
    bgcolor = "#060606",
  }: {
    thumbnail: string;
    label: string;
    size: "lg" | "md";
    bgcolor?: string;
    desc?: string;
    onCard?: () => void;
  }) => {
    return (
      <Card
        sx={{
          maxWidth: sizeDict[size].width,
          height: "100%",
          bgcolor,
        }}
      >
        <CardActionArea
          onClick={onCard}
          title={label}
          sx={{
            height: "100%",
          }}
        >
          <Box height="100%" p={1}>
            <CardMedia
              sx={{
                height: sizeDict[size].img_height,
              }}
              image={thumbnail}
            />
            <CardHeader
              title={
                <Box
                  sx={{
                    fontSize: sizeDict[size].titleFontSize,
                    fontWeight: "bold",
                    pb: 1,
                  }}
                >
                  {label}
                </Box>
              }
              subheader={
                <Box
                  sx={{
                    fontSize: sizeDict[size].descFontSize,
                    wordWrap: "break-word",
                  }}
                >
                  {desc}
                </Box>
              }
            />
          </Box>
        </CardActionArea>
      </Card>
    );
  }
);
