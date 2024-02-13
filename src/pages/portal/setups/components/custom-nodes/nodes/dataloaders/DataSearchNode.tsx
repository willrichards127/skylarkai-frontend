import React, { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { TextField, Box } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

export const DataSearchNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const { setNodes } = useReactFlow();

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === nodeId) {
              node.data = {
                ...node.data,
                properties: {
                  ...node.data.properties,
                  [e.target.name]: e.target.value,
                },
              };
            }

            return node;
          })
        );
      },
      [nodeId, setNodes]
    );

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />

        <Box textAlign="center" fontSize={12} color="primary.dark">
          Upload data to vector store via API
        </Box>

        <Box
          sx={{
            display: "flex",
            my: 1,
            fontSize: 12,
            justifyContent: "space-between",
          }}
        >
          <Box>Filename</Box>
          <Box>Learned</Box>
        </Box>
        <TextField
          className="nowheel"
          size="small"
          name="companyname"
          disabled
          value={nodeContent.properties?.companyname || ""}
          onChange={onChange}
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              fontSize: 12,
            },
          }}
        />
      </Box>
    );
  }
);

DataSearchNode.displayName = "DataSearchNode";
