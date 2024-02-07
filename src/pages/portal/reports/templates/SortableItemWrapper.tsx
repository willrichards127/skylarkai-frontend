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
import BarChartIcon from "@mui/icons-material/BarChart";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
  } as CSSProperties,
};

export const SortableItemWrapper = memo(
  ({
    itemId,
    item,
    onAddNew,
    onRemove,
    onItemChanged,
    onAddUploadedFile,
  }: {
    itemId: string;
    item: {
      content: string;
      tag: string;
      visual?: string;
    };
    onAddNew: () => void;
    onRemove: () => void;
    onAddUploadedFile: (data: string[][]) => void;
    onItemChanged: (
      itemContent: string,
      tagName: string,
      visualType?: string
    ) => void;
  }) => {
    const { CSVReader } = useCSVReader();
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id: itemId,
      });

    const style = {
      transform: CSS.Transform.toString(
        transform && { ...transform, scaleY: 1 }
      ),
      transition,
    };

    const [visualType, setVisualType] = useState<string>(
      item.visual || "table"
    );
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

    const onChangeVisualType = useCallback(
      (newVisualType: string) => {
        setVisualType(newVisualType);
        onItemChanged(item.content, item.tag, newVisualType);
      },
      [onItemChanged, item]
    );

    const onClickAway = useCallback(
      (content: string) => {
        setIsEdit(false);
        onItemChanged(content, item.tag);
      },
      [onItemChanged, item]
    );

    const onUploadAccepted = useCallback((results: any) => {
      if (results.data?.length > 0) {
        onAddUploadedFile(results.data);
      }
    }, [onAddUploadedFile]);

    return (
      <div
        ref={setNodeRef}
        id={itemId}
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
          <ItemEditor onClickAway={onClickAway} initialItem={item} />
        ) : (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw as any]}
            components={{
              code: (props) => <p {...props as any} />,
              pre: (props) => <div {...(props as any)} />,
              table: (props) => (
                <XWidget
                  {...props}
                  isVisualize={isVisualize}
                  visualType={visualType}
                  onCloseVisualize={onShowVisualization}
                  onChangeVisualType={onChangeVisualType}
                />
              ),
              th: ({ ...props }) => (
                <th
                  {...props}
                  style={{
                    textAlign: "center",
                    padding: "4px 8px",
                    color: "white",
                    background: "black",
                    border: `1px solid ${colors.grey[500]}`,
                  }}
                />
              ),
              td: ({ ...props }) => (
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
            {item.content}
          </ReactMarkdown>
        )}
        {!isEdit && (
          <Box
            sx={{
              position: "absolute",
              top: -28,
              left: -8,
              right: -48,
              bottom: -8,
            }}
          />
        )}
        {!isEdit && hover && (
          <Box>
            <Box
              sx={{
                position: "absolute",
                top: -8,
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
              <IconButton size="small" onClick={onAddNew}>
                <AddIcon sx={{ fontSize: 16 }} />
              </IconButton>
              <CSVReader onUploadAccepted={onUploadAccepted}>
                {({ getRootProps }: any) => (
                  <div style={styles.csvReader}>
                    <IconButton size="small" {...getRootProps()}>
                      <UploadFileIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </div>
                )}
              </CSVReader>              
              {item.tag === "table" && (
                <IconButton size="small" onClick={onShowVisualization}>
                  <BarChartIcon sx={{ fontSize: 16 }} />
                </IconButton>
              )}
              <IconButton size="small" onClick={onRemove}>
                <CancelIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>
        )}
      </div>
    );
  }
);

SortableItemWrapper.displayName = "SortableItemWrapper";
