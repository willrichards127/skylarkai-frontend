import { memo, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { XModal } from "../XModal";
import Templateview from "../TemplateView";
import {
  ITemplate,
  ITemplateItem,
  ITemplateResultItem,
} from "../../shared/models/interfaces";
import {
  addIdtoTemplateJson,
  removeIdTemplateJson,
  selectAll,
  updateStatus,
} from "../TemplateView/utils";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { parseCitation } from "../../shared/utils/string";
import { IExecutionSectionDetail } from "../../redux/interfaces";
import { convertUtcToLocal } from "../../shared/utils/dateUtils";

export const TemplateViewModal = memo(
  ({
    open,
    onClose,
    data,
    isEditMode,
    status,
  }: {
    open: boolean;
    onClose: (data?: ITemplate) => void;
    data: ITemplate;
    isEditMode?: boolean;
    status?: { resultStatus: any; timeStatus: IExecutionSectionDetail[] };
  }) => {
    const [title, setTitle] = useState<string>(data.title);
    const [items, setItems] = useState<ITemplateItem[]>(
      addIdtoTemplateJson(data.data)
    );

    const [answer, setAnswer] = useState<string>();
    const [duration, setDuration] = useState<string>();
    const [completedAt, setCompletedAt] = useState<string>();

    useEffect(() => {
      if (status) {
        const currentResultStatus: ITemplateResultItem[] =
          status.resultStatus.map((section: any) => {
            const sectionIndex = status.timeStatus.findIndex(
              (t) => t.section_name === section.section_name
            );
            const duration = status.timeStatus[sectionIndex].section_duration;
            const completedAt =
              status.timeStatus[sectionIndex].section_completed_at;

            const children: ITemplateResultItem[] =
              section.sub_query_results.map((query: any) => {
                const queryIndex = status.timeStatus[
                  sectionIndex
                ].sub_queries.findIndex(
                  (t) => t.question === query["question"]
                );
                const duration =
                  status.timeStatus[sectionIndex].sub_queries[queryIndex]
                    .sub_query_duration;
                const completedAt =
                  status.timeStatus[sectionIndex].sub_queries[queryIndex]
                    .completed_at;

                return {
                  question: query["question"],
                  answer: query["answer"]
                    ? query["answer"]["answer"]
                    : undefined,
                  duration,
                  completedAt,
                };
              });

            return {
              question: section.section_name,
              answer: section.summary_result,
              duration,
              completedAt,
              children,
            };
          });
        setItems((prev) => updateStatus(prev, currentResultStatus));
      }
    }, [status]);

    const onItemSelected = (item: ITemplateItem) => {
      if (item.isSuccess) {
        setAnswer(item.answer);
        setDuration(item.duration);
        setCompletedAt(item.completedAt);
      }
    };

    return (
      <XModal
        open={open}
        onClose={() => onClose()}
        header={<Box textAlign="center">Template View</Box>}
        footer={
          isEditMode && (
            <Box
              display="flex"
              justifyContent={isEditMode ? "space-between" : "end"}
              width="100%"
              px={1}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setItems((prev) => selectAll(prev, true));
                  }}
                >
                  Select All
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setItems((prev) => selectAll(prev, false));
                  }}
                >
                  Deselect All
                </Button>
              </Box>
              <Button
                variant="contained"
                onClick={() => {
                  onClose({ title, data: removeIdTemplateJson(items) });
                }}
              >
                Save
              </Button>
            </Box>
          )
        }
        size="md"
      >
        <Box paddingTop={1}>
          {isEditMode && (
            <TextField
              fullWidth
              placeholder="Enter report name"
              label="Report name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          )}
          <Box maxHeight={400} overflow={"auto"} marginTop={1}>
            <Templateview
              data={items}
              onChangeData={setItems}
              isEditMode={isEditMode}
              onItemSelected={onItemSelected}
            />
          </Box>
          {duration || completedAt || answer ? (
            <Box sx={{ marginTop: 1, position: "relative" }}>
              <Box sx={{ position: "absolute", right: -12, top: -12 }}>
                <IconButton
                  aria-label="close"
                  onClick={() => {
                    setDuration(undefined);
                    setCompletedAt(undefined);
                    setAnswer(undefined);
                  }}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              {duration || completedAt ? (
                <Box sx={{ display: "flex", gap: 1 }}>
                  {duration ? (
                    <Typography>Duration: {duration}</Typography>
                  ) : null}
                  {completedAt ? (
                    <Typography>
                      Completed at:{" "}
                      {convertUtcToLocal(
                        completedAt,
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                    </Typography>
                  ) : null}
                </Box>
              ) : null}
              {answer ? (
                <Box
                  sx={{
                    minHeight: 200,
                    maxHeight: 400,
                    overflowY: "auto",
                    border: "1px solid gray",
                    borderRadius: 2,
                    padding: 2,
                    mt: 2,
                  }}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw as any]}
                    allowElement={(element, _, parent) => {
                      if (
                        element.tagName === "p" &&
                        (parent as any).tagName === "li"
                      ) {
                        return false;
                      }
                      if (
                        element.tagName === "strong" &&
                        (parent as any).tagName === "li"
                      ) {
                        return false;
                      }
                      return true;
                    }}
                    unwrapDisallowed={true}
                    components={{
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      li: ({ ordered, ...props }: any) => (
                        <li style={{ marginLeft: 16 }} {...props} />
                      ),
                      p: ({ ...props }: any) => (
                        <p {...props} style={{ margin: "6px 0" }} />
                      ),
                      a: (props: any) => {
                        if (props.href) {
                          const splited = props.href.split("______");
                          const filename = splited[0]
                            .replaceAll("___", " ")
                            .slice(1);
                          const quote = splited[1].replaceAll("___", " ");
                          return (
                            <a
                              {...props}
                              className="no-print"
                              style={{ color: "tomato" }}
                              // onClick={() => onJumpTo({ filename, quote })}
                              title={`${filename}.pdf:${quote}`}
                            />
                          );
                        } else return <p {...props} />;
                      },
                      table: (props: any) => {
                        return (
                          <table
                            {...props}
                            style={{
                              borderCollapse: "collapse",
                              margin: "4px 2px",
                              overflowX: "auto",
                            }}
                          />
                        );
                      },
                      th: (props) => (
                        <th
                          {...props}
                          style={{
                            textAlign: "center",
                            padding: "2px 4px",
                            border: `1px solid ${colors.grey[500]}`,
                          }}
                        />
                      ),
                      td: (props) => (
                        <td
                          {...props}
                          style={{
                            textAlign: "center",
                            padding: "4px 8px",
                            border: `1px solid ${colors.grey[500]}`,
                          }}
                        />
                      ),
                    }}
                  >
                    {parseCitation(answer)}
                  </ReactMarkdown>
                </Box>
              ) : null}
            </Box>
          ) : null}
        </Box>
      </XModal>
    );
  }
);

TemplateViewModal.displayName = "TemplateViewModal";
