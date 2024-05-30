import { memo, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Box, Button, IconButton, TextField, colors } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { XModal } from "../XModal";
import Templateview from "../TemplateView";
import { ITemplate, ITemplateItem } from "../../shared/models/interfaces";
import {
  addIdtoTemplateJson,
  getIndexing,
  removeIdTemplateJson,
  selectAll,
  updateStatus,
} from "../TemplateView/utils";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { parseCitation } from "../../shared/utils/string";

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
    status?: any;
  }) => {
    const [title, setTitle] = useState<string>(data.title);
    const [items, setItems] = useState<ITemplateItem[]>(
      addIdtoTemplateJson(data.data)
    );

    const [answer, setAnswer] = useState<string>();

    useEffect(() => {
      if (status) {
        const loadingStatus = status.reduce(
          (prev: number[], cur: any, index: number) => {
            if (cur.summary_result) {
              return prev;
            } else {
              return [index, cur.sub_query_results.length];
            }
          },
          []
        );
        setItems((prev) => updateStatus(prev, loadingStatus));
      }
    }, [status]);

    const onItemSelected = (item: ITemplateItem) => {
      const indexing = getIndexing(items, item);
      if (item.isSuccess && indexing && status) {
        let result: string | undefined;
        if (indexing.length === 1) {
          result = status[indexing[0]]["summary_result"];
        } else if (indexing.length === 2) {
          const subQueryItem = items[indexing[0]].children;
          if (subQueryItem && subQueryItem[indexing[1]].name) {
            const subQueryResultItem = status[indexing[0]][
              "sub_query_results"
            ].find(
              (r: any) => r["question"] === subQueryItem[indexing[1]].name
            );
            if (subQueryResultItem) {
              result = subQueryResultItem["answer"]["answer"];
            }
          }
        }

        setAnswer(result);
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
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                <IconButton
                  aria-label="close"
                  onClick={() => setAnswer(undefined)}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
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
      </XModal>
    );
  }
);

TemplateViewModal.displayName = "TemplateViewModal";
