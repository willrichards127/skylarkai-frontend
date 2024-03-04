import { memo, useCallback, useState, CSSProperties } from "react";
import { useCSVReader } from "react-papaparse";
import { Box, IconButton, colors } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { XWidget } from "../components/XWidget";
import { ItemEditor } from "./ItemEditor";
// import { ItemOverlay } from "./ItemOverlay";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { parseCitationInReport2 } from "../../../../shared/utils/string";
import {
  IReportItem,
  IReportItemValue,
} from "../../../../shared/models/interfaces";

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
  } as CSSProperties,
};

export const SortableItemWrapper = memo(
  ({
    item,
    onAddNew,
    onRemove,
    onClone,
    onItemChanged,
    onAddUploadedFile,
    onJumpTo,
  }: {
    item: IReportItem;
    onAddNew: () => void;
    onRemove: () => void;
    onClone: (clonedItem: IReportItemValue) => void;
    onAddUploadedFile: (data: string[][]) => void;
    onItemChanged: (value: Partial<IReportItemValue>) => void;
    onJumpTo: ({
      filename,
      quote,
    }: {
      filename: string;
      quote: string;
    }) => void;
  }) => {
    const { CSVReader } = useCSVReader();
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id: item.key,
      });

    const style = {
      transform: CSS.Transform.toString(
        transform && { ...transform, scaleY: 1 }
      ),
      transition,
    };

    const [hover, setHover] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isVisualize, setIsVisualize] = useState<boolean>(false);

    const onMouseOver = useCallback(() => {
      setHover(true);
    }, []);

    const onMouseOut = useCallback(() => {
      setHover(false);
    }, []);

    const onEdit = useCallback(() => {
      setIsEdit(true);
    }, []);

    const onShowVisualization = useCallback(() => {
      setIsVisualize((prev) => !prev);
    }, []);

    const onClickAway = useCallback(
      (content: string) => {
        setIsEdit(false);
        onItemChanged({ content });
      },
      [onItemChanged]
    );

    const onUploadAccepted = useCallback(
      (results: any) => {
        if (results.data?.length > 0) {
          onAddUploadedFile(results.data);
        }
      },
      [onAddUploadedFile]
    );

    return (
      <div
        ref={setNodeRef}
        id={item.key}
        style={{
          ...style,
          position: "relative",
          marginBottom: "32px",
        }}
        {...attributes}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onDoubleClick={onEdit}
      >
        {isEdit ? (
          <ItemEditor onClickAway={onClickAway} initialItem={item.value} />
        ) : (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw as any]}
            components={{
              code: (props) => <p {...(props as any)} />,
              pre: (props) => <div {...(props as any)} />,
              li: (props) => {
                if (
                  props.children &&
                  typeof props.children === "string" &&
                  props.children.includes("Document Title")
                ) {
                  const citations = parseCitationInReport2(props.children);
                  if (citations.sections?.length) {
                    return (
                      <li
                        {...props}
                        style={{
                          color: "#2196F3",
                          textDecoration: "underline",
                          cursor: "pointer",
                          zIndex: 99999,
                        }}
                        onClick={() => onJumpTo(citations.sections[0])}
                      >
                        [{citations.sections[0].filename}]
                      </li>
                    );
                  } else return <li {...props}>{citations.content}</li>;
                }
                return <li {...props} />;
              },
              table: (props) => {
                return (
                  <XWidget
                    {...props}
                    data={item.value}
                    onChangeData={onItemChanged}
                    isVisualize={isVisualize}
                    onCloseVisualize={onShowVisualization}
                  />
                );
              },
            }}
          >
            {item.value.content}
          </ReactMarkdown>
        )}
        {!isEdit && hover && (
          <Box>
            <Box
              sx={{
                position: "absolute",
                top: -10,
                left: -8,
                right: -8,
                bottom: -8,
                boxSizing: "content-box",
                MozBoxSizing: "content-box",
                WebkitBoxSizing: "content-box",
                border: `1px solid ${colors.grey[800]}`,
              }}
            />
            <DragIndicatorIcon
              {...listeners}
              sx={{ position: "absolute", right: -32, top: 0, cursor: "grab" }}
            />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                gap: 0.5,
                right: 0,
                top: -36,
              }}
            >
              <IconButton
                size="small"
                onClick={onAddNew}
                title="Add New Item Below"
              >
                <AddIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <CSVReader
                onUploadAccepted={onUploadAccepted}
                title="Upload File"
              >
                {({ getRootProps }: any) => (
                  <div style={styles.csvReader}>
                    <IconButton size="small" {...getRootProps()}>
                      <UploadFileIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </div>
                )}
              </CSVReader>
              <IconButton
                size="small"
                onClick={() => onClone(item.value)}
                title="Clone"
              >
                <FileCopyIcon sx={{ fontSize: 16 }} />
              </IconButton>
              {item.value.tag === "table" && (
                <IconButton
                  size="small"
                  onClick={onShowVisualization}
                  title="Visualize"
                >
                  <BarChartIcon sx={{ fontSize: 16 }} />
                </IconButton>
              )}
              <IconButton size="small" onClick={onRemove} title="Remove">
                <DeleteForeverIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>
        )}
      </div>
    );
  }
);

SortableItemWrapper.displayName = "SortableItemWrapper";
