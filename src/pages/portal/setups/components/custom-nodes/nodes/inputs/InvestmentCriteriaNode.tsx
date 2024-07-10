import { memo, useEffect, useMemo, useState } from "react";
import { useReactFlow } from "reactflow";
import {
  Box,
  List,
  ListItemText,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { XSmallAccordion } from "../../../../../../../components/XAccordion";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { convertCriteriaJSON } from "../../../../../../../shared/utils/base";

export const InvestmentCriteriaNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const [viewMode, setViewMode] = useState<"view" | "edit">("view");
    const [text, setText] = useState<string>(JSON.stringify(nodeContent.properties.json || ""));
    const json = useMemo(() => convertCriteriaJSON(text), [text]);
    const { setNodes } = useReactFlow();

    const handlViewMode = (
      _: React.MouseEvent<HTMLElement>,
      newAlignment: "view" | "edit"
    ) => {
      setViewMode(newAlignment);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };

    useEffect(() => {
      if (json) {
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === nodeId) {
              node.data = {
                ...node.data,
                properties: {
                  json,
                  isExecutable: true,
                },
              };
            }

            return node;
          })
        );
      } else {
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === nodeId) {
              node.data = {
                ...node.data,
                properties: {
                  ...node.data.properties,
                  isExecutable: false,
                },
              };
            }

            return node;
          })
        );
      }
    }, [nodeId, setNodes, json]);

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />
        <Box
          mb={0.5}
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handlViewMode}
          >
            <ToggleButton sx={{ padding: "4px 8px" }} value="edit">
              Edit
            </ToggleButton>
            <ToggleButton disabled={!json} sx={{ padding: "4px 8px" }} value="view">
              View
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        {viewMode === "view" ? (
          <Box
            className="nowheel"
            sx={{ minHeight: 200, maxHeight: 320, overflow: "auto" }}
          >
            {json
              ? json.map((criteria: any, index: number) => (
                  <XSmallAccordion
                    defaultExpanded={false}
                    key={`criteria-${index}`}
                    summary={criteria.name}
                    detail={
                      <List
                        sx={{
                          bgcolor: "background.paper",
                          height: "100%",
                          padding: 0,
                          paddingLeft: 2,
                        }}
                      >
                        {criteria.children.map(
                          (subCriteria: any, subIndex: number) => (
                            <ListItemText
                              disableTypography
                              key={`sub-criteria-${subIndex}`}
                              primary={
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography
                                    variant="body1"
                                    fontWeight={"bold"}
                                    sx={{
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    {subCriteria.name}
                                  </Typography>
                                  {subCriteria.Criteria ||
                                  subCriteria.Explanation ? (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                      }}
                                    >
                                      {subCriteria.Criteria ? (
                                        subCriteria.Criteria === "Pass" ? (
                                          <CheckCircleIcon
                                            sx={{
                                              color: "success.main",
                                              fontSize: 18,
                                            }}
                                          />
                                        ) : (
                                          <CancelIcon
                                            sx={{ color: "red", fontSize: 18 }}
                                          />
                                        )
                                      ) : null}
                                      {subCriteria.Explanation ? (
                                        <Tooltip
                                          title={subCriteria.Explanation}
                                        >
                                          <ErrorIcon
                                            sx={{
                                              color: "info.main",
                                              fontSize: 18,
                                            }}
                                          />
                                        </Tooltip>
                                      ) : null}
                                    </Box>
                                  ) : null}
                                </Box>
                              }
                              secondary={subCriteria.question}
                            />
                          )
                        )}
                      </List>
                    }
                  />
                ))
              : null}
          </Box>
        ) : (
          <TextField
            className="nowheel"
            name="text"
            size="small"
            fullWidth
            multiline
            minRows={5}
            maxRows={10}
            value={text}
            onChange={onChange}
          />
        )}
      </Box>
    );
  }
);
