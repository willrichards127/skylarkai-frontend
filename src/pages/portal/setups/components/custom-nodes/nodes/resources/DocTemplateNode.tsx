import React, { memo, useCallback, useMemo, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
// import update from "immutability-helper";

import { Handlers } from "../../Handlers";
import { useReactFlow } from "reactflow";
import { useDropzone } from "react-dropzone";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { TemplateViewModal } from "../../../../../../../components/modals/TemplateViewModal";
import { convertJSON } from "../../../../../../../components/TemplateView/utils";

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
          ? convertJSON(nodeContent.properties.text)
          : undefined,
      [nodeContent]
    );

    const [showModal, setShowModal] = useState<boolean>(false);

    const { setNodes } = useReactFlow();

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
      (acceptedFiles: any) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = async () => {
          setNodes((prev) =>
            prev.map((node) => {
              if (node.id === nodeId) {
                node.data = {
                  ...node.data,
                  properties: {
                    ...node.data.properties,
                    text: reader.result,
                    file: acceptedFiles[0].name,
                  },
                };
              }

              return node;
            })
          );
        };
        reader.readAsText(acceptedFiles[0]);
      },
      [setNodes, nodeId]
    );

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      maxFiles: 1,
    });

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {nodeContent.properties?.template_type === "text" ? (
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
          />
        ) : null}
      </Box>
    );
  }
);

DocTemplateNode.displayName = "DocTemplateNode";
