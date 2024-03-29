import { Box, styled, colors } from "@mui/material";

export const ItemWrapper = styled(Box)({
  position: "relative",
  border: "1px dashed transparent",
  "&:hover": {
    border: `1px dashed ${colors.grey[800]}`,
    "& > div:first-of-type": {
      display: "flex",
    },
  },
});
