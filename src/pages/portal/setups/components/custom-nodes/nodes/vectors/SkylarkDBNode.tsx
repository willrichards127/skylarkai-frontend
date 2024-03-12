import { memo } from "react";
import { Box, Divider, Tooltip, Typography } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

export const SkylarkDBNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    return (
      <Box position="relative" sx={{ minHeight: 36 }}>
        <Handlers nodeId={nodeId} handlerType="both" />
        {nodeContent.properties.files ? (
          <>
            <Box
              className="nowheel"
              sx={{ width: "320px", overflowY: "auto", maxHeight: 120 }}
            >
              {nodeContent.properties.files.map((file: any, index: number) => (
                <Tooltip enterNextDelay={1000} title={file.file_name}>
                  <Typography
                    noWrap
                    key={`file-${nodeContent.db_node_id}-${index}`}
                    variant="body2"
                  >
                    {file.file_name}
                  </Typography>
                </Tooltip>
              ))}
            </Box>
            <Divider />
            <Box display="inline" marginTop={"4px"}>
              <Typography variant="caption">{nodeContent.properties.files.length} files</Typography>
            </Box>
          </>
        ) : null}
      </Box>
    );
  }
);

SkylarkDBNode.displayName = "SkylarkDBNode";
