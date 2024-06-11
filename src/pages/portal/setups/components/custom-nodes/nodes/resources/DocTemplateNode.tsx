import React, { memo, useCallback, useMemo, useState } from "react";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
// import update from "immutability-helper";

import { Handlers } from "../../Handlers";
import { useReactFlow } from "reactflow";
import { useDropzone } from "react-dropzone";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { TemplateViewModal } from "../../../../../../../components/modals/TemplateViewModal";
import { convertTemplateJSON } from "../../../../../../../components/TemplateView/utils";
import { useGenerateJsonTemplateMutation } from "../../../../../../../redux/services/setupApi";
import { useParams } from "react-router-dom";

const templates = [
  {
    value: "text",
    label: "Plain Text",
  },
  // {
  //   value: "URL",
  //   label: "URL",
  // },
];

export const DocTemplateNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const data = useMemo(
      () =>
        nodeContent.properties.text
          ? convertTemplateJSON(nodeContent.properties.text)
          : undefined,
      [nodeContent]
    );
    const [generateJsonTemplate, { isLoading }] =
      useGenerateJsonTemplateMutation();
    const [showModal, setShowModal] = useState<boolean>(false);

    const { getNodes, setNodes } = useReactFlow();
    const params = useParams();

    const updateNode = useCallback(
      (key: string, value: string) => {
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === nodeId) {
              node.data = {
                ...node.data,
                properties: {
                  ...node.data.properties,
                  [key]: value,
                },
              };
            }

            return node;
          })
        );
        // setNodes((prev) =>
        //   update(prev, {
        //     [nodeId]: {
        //       data: {
        //         properties: { [key]: { $set: value } },
        //       },
        //     },
        //   })
        // );
      },
      [nodeId, setNodes]
    );

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        updateNode(e.target.name, e.target.value);
      },
      [updateNode]
    );

    const onDrop = useCallback(
      async (acceptedFiles: any) => {
        let llm: string = "Anthropic";
        const nodes = getNodes();
        const llmNode = nodes.find((node) => node.data.name === "LLM");
        if (llmNode) {
          llm = llmNode.data.properties?.model || "OpenAI";
        }

        const setupId = params.setupId;

        if (setupId) {
          const templateData = await generateJsonTemplate({
            file: acceptedFiles[0],
            setupId: +setupId,
            llm,
          }).unwrap();

          updateNode("text", JSON.stringify(templateData.template[0]));
        }
      },
      [setNodes, nodeId, updateNode, generateJsonTemplate]
    );

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      maxFiles: 1,
    });

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {isLoading ? (
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <CircularProgress />
            </Box>
          ) : nodeContent.properties?.template_type === "text" ? (
            <>
              <Box
                mb={0.5}
                sx={{ display: "flex", gap: 1, alignItems: "center" }}
              >
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Button size="small" variant="outlined">
                    Upload File
                  </Button>
                </div>
                <Box fontSize={12} flex={1}>
                  {nodeContent.properties?.file
                    ? nodeContent.properties?.file
                    : ""}
                </Box>
                <Button
                  disabled={!data}
                  size="small"
                  variant="outlined"
                  onClick={() => setShowModal(true)}
                >
                  View
                </Button>
              </Box>
              <TextField
                className="nowheel"
                name="text"
                size="small"
                fullWidth
                multiline
                minRows={5}
                maxRows={10}
                value={nodeContent.properties?.text}
                onChange={onChange}
              />
            </>
          ) : (
            <>
              <Box fontSize={12} mb={0.5}>
                URL:
              </Box>
              <TextField
                className="nowheel"
                name="URL"
                size="small"
                fullWidth
                value={nodeContent.properties?.URL}
                onChange={onChange}
              />
            </>
          )}
          <Box>
            <TextField
              className="nowheel"
              size="small"
              select
              name="template_type"
              value={
                nodeContent.properties?.template_type || templates[0].value
              }
              onChange={onChange}
              sx={{
                mt: 1,
                "& .MuiNativeSelect-select": {
                  padding: "2px",
                },
              }}
              SelectProps={{
                native: true,
              }}
            >
              {templates.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
        </Box>
        {showModal && data ? (
          <TemplateViewModal
            open={showModal}
            onClose={(data) => {
              if (data) {
                updateNode("text", JSON.stringify(data));
              }
              setShowModal(false);
            }}
            data={data}
            isEditMode
          />
        ) : null}
      </Box>
    );
  }
);

DocTemplateNode.displayName = "DocTemplateNode";
