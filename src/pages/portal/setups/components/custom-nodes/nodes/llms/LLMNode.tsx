import { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { Box } from "@mui/material";
import { SimpleDropdown } from "../../../../../../../components/SimpleDropdown";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

// eslint-disable-next-line react-refresh/only-export-components
export const modelItems = ["OpenAI", "Anthropic", "Gemini"];

export const LLMNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const { setNodes } = useReactFlow();

    const onChangeFormValues = useCallback(
      (_: string, newValue: string | number) => {
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === nodeId) {
              node.data = {
                ...node.data,
                properties: {
                  model: newValue,
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
        <Handlers nodeId={nodeId} handlerType="both" />
        <label htmlFor="model" style={{ fontSize: 10 }}>
          Model
        </label>
        <SimpleDropdown
          id="model"
          value={nodeContent.properties?.model}
          onChange={(e) => {
            onChangeFormValues("model", e.target.value);
          }}
          size="small"
          fullWidth
          hiddenLabel
          options={modelItems}
          sxProps={{
            mb: 2,
          }}
        />
      </Box>
    );
  }
);
