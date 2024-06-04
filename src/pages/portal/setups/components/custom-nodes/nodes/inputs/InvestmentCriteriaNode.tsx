import { memo } from "react";
// import { useReactFlow } from "reactflow";
import { Box, List, ListItemText, Tooltip, Typography } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { XSmallAccordion } from "../../../../../../../components/XAccordion";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

export const InvestmentCriteriaNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    // const { setNodes } = useReactFlow();

    // const onChange = useCallback(
    //   (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNodes((prev) =>
    //       prev.map((node) => {
    //         if (node.id === nodeId) {
    //           node.data = {
    //             ...node.data,
    //             properties: {
    //               text: e.target.value,
    //             },
    //           };
    //         }

    //         return node;
    //       })
    //     );
    //   },
    //   [nodeId, setNodes]
    // );

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />
        <Box className="nowheel" sx={{ minHeight: 200, maxHeight: 320, overflow: "auto" }}>
          {nodeContent.properties.json.map((criteria: any, index: number) => (
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
                            {subCriteria.Criteria || subCriteria.Explanation ? (
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
                                  <Tooltip title={subCriteria.Explanation}>
                                    <ErrorIcon
                                      sx={{ color: "info.main", fontSize: 18 }}
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
          ))}
        </Box>
      </Box>
    );
  }
);
