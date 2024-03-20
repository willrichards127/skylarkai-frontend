import { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { Box } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { FileUploader } from "../../../../../../../components/FileUploader";

export const DocUploadNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const { setNodes } = useReactFlow();
    const onUpload = useCallback(
      (pureFiles: File[]) => {
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === nodeId) {
              node.data = {
                ...node.data,
                properties: { files: pureFiles },
              };
            }
            return node;
          })
        );
      },
      [nodeId, nodeContent, setNodes]
    );
    
    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="both" />
        <FileUploader
          initialFiles={nodeContent.properties?.files as any}
          onUploadCompleted={onUpload}
          showFileList
        />
      </Box>
    );
  }
);

DocUploadNode.displayName = "DocUploadNode";
