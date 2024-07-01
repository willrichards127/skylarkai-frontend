import { memo, useEffect, useMemo, useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { XModal } from "../XModal";
import { ColDef } from "ag-grid-community";
import AGTable from "../agTable/AGTable";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { parseCitation } from "../../shared/utils/string";

export const ReportDetailModal = memo(
  ({
    open,
    onClose,
    status,
  }: {
    open: boolean;
    onClose: () => void;
    status: any;
  }) => {
    const [history, setHistory] = useState<any>();
    const [data, setData] = useState<any>();
    const [subIndex, setSubIndex] = useState<number>();

    useEffect(() => {
      if (status) {
        const currentResultStatus =
          status.report.execution_data.base_query.sections.map(
            (section: any, index: number) => {
              const subQueryResults = section.sub_query_results.map(
                (query: any, index: number) => {
                  return {
                    id: index + 1,
                    ...query,
                  };
                }
              );

              return {
                id: index + 1,
                ...section,
                sub_query_results: subQueryResults,
              };
            }
          );
        setData(currentResultStatus);
      }
    }, [status]);

    const columns = useMemo<ColDef[]>(
      () =>
        subIndex
          ? [
              { field: "id", headerName: "ID" },
              {
                field: "question",
                headerName: "Question",
                align: "left",
                filter: "agTextColumnFilter",
              },
              {
                headerName: "Rating",
                align: "left",
                filter: "agNumberColumnFilter",
                valueFormatter: (params: any) => params.data?.answer?.rating,
                tooltipValueGetter: (params: any) =>
                  Object.keys(params.data?.answer?.rating_response || {})
                    .map(
                      (key: string) =>
                        key +
                        ":" +
                        params.data?.answer?.rating_response[key]["Rating"] +
                        "\n" +
                        params.data?.answer?.rating_response[key]["Feedback"]
                    )
                    ?.join("\n"),
              },
              {
                headerName: "History",
                align: "left",
                filter: "agNumberColumnFilter",
                valueFormatter: (params: any) =>
                  params.data?.answer?.question_history?.length,
              },
              {
                field: "actions",
                headerName: "Actions",
                cellRenderer: (params: any) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "42px",
                      }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() =>
                          setHistory(params.data?.answer?.question_history)
                        }
                      >
                        View Detail
                      </Button>
                    </Box>
                  );
                },
              },
            ]
          : [
              { field: "id", headerName: "ID" },
              {
                field: "section_name",
                headerName: "Section Name",
                align: "left",
                filter: "agTextColumnFilter",
              },
              {
                field: "summary_result",
                headerName: "Summary",
                align: "left",
                filter: "agTextColumnFilter",
                maxWidth: 900,
              },
              {
                field: "actions",
                headerName: "Actions",
                cellRenderer: (params: any) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "42px",
                      }}
                    >
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => setSubIndex(params.data?.id)}
                      >
                        View Detail
                      </Button>
                    </Box>
                  );
                },
              },
            ],
      [subIndex]
    );

    const content = useMemo(() => {
      if (history) {
        if (history.length) {
          return history.map((h: any) => parseCitation(h[0][0])).join("<br/></br/><br/>")
        }
      } else {
        return undefined;
      }
    }, [history]);

    const rowData = useMemo<any[]>(
      () =>
        status ? (subIndex ? data[subIndex - 1].sub_query_results : data) : [],
      [data, status, subIndex]
    );

    return (
      <XModal
        open={open}
        onClose={onClose}
        header={<Box textAlign="center">Ingested Files</Box>}
        size="lg"
      >
        <Box height={700} sx={{ position: "relative" }}>
          {subIndex ? (
            <Box>
              <IconButton
                aria-label="close"
                onClick={() => {
                  if (history) {
                    setHistory(undefined);
                  } else {
                    setSubIndex(undefined);
                  }
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            </Box>
          ) : null}
          {content ? (
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
            >
              {content}
            </ReactMarkdown>
          ) : (
            <AGTable columnDefs={columns} rowData={rowData} />
          )}
        </Box>
      </XModal>
    );
  }
);
