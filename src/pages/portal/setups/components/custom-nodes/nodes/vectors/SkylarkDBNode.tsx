import { memo, useState } from "react";
import { Box, Divider, Tooltip, Typography } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { CitationModal } from "../../../../../../../components/modals/CitationModal";

export const SkylarkDBNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const [fileName, setFileName] = useState<string>();

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
                <Tooltip
                  key={`db-file-${index}`}
                  enterNextDelay={1000}
                  title={file.file_name}
                >
                  <Typography
                    noWrap
                    key={`file-${nodeContent.db_node_id}-${index}`}
                    variant="body2"
                    sx={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      "&:hover": { color: "#A9B6FF" },
                    }}
                    onClick={() => setFileName(file.file_name)}
                  >
                    {file.file_name}
                  </Typography>
                </Tooltip>
              ))}
            </Box>
            <Divider />
            <Box display="inline" marginTop={"4px"}>
              <Typography variant="caption">
                {nodeContent.properties.files.length} files
              </Typography>
            </Box>
          </>
        ) : null}
        {fileName ? (
          <CitationModal
            open={!!fileName}
            onClose={() => {
              setFileName(undefined);
            }}
            title={"File Preview"}
            data={{
              graph_id: nodeContent.setupId!,
              analysis_type: "financial_diligence",
              filename: fileName,
            }}
          />
        ) : null}
      </Box>
    );
  }
);

SkylarkDBNode.displayName = "SkylarkDBNode";
