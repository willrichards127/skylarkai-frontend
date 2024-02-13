import { memo } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";

const slideInAnimation = keyframes`
  
  0% { background-color: white; transform: scale(1); }
  50% { background-color: grey; transform: scale(1.3); }
  100% { background-color: white; transform: scale(1); }

`;

const DotSpan = styled("span")`
  animation: ${slideInAnimation} ease-in-out 1s infinite;
  background-color: grey;
  display: inline-block;
  height: 4px;
  margin: 2px;
  width: 4px;
  border-radius: 50%;
`;

export const DotSpinner = memo(() => {
  return (
    <Box p={0.5}>
      <DotSpan />
      <DotSpan
        sx={{
          animationDelay: "0.2s",
        }}
      />
      <DotSpan
        sx={{
          animationDelay: "0.3s",
        }}
      />
    </Box>
  );
});
DotSpinner.displayName = "DotSpinner";
