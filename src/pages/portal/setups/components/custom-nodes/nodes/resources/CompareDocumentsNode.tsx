import { memo } from "react";
import { Box } from "@mui/material";
import { Handlers } from "../../Handlers";

export const CompareDocumentsNode = memo(({ nodeId }: { nodeId: string }) => {
  return (
    <Box position="relative">
      <Handlers nodeId={nodeId} handlerType="both" />
    </Box>
  );
});

CompareDocumentsNode.displayName = "CompareDocumentsNode";
