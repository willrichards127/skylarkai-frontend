import { memo, useCallback, useState } from "react";
import { Box, colors, styled } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { XWidget } from "../components/XWidget";
import { ItemEditor } from "./ItemEditor";
import { ItemActionPane } from "./ItemActionPane";
import {
  IReportItem,
  IReportItemValue,
} from "../../../../shared/models/interfaces";

const ItemWrapper = styled(Box)({
  position: "relative",
  backgroundColor: "white",
  color: "black",
  border: "1px solid transparent",
  padding: "4px",
});

const ItemWrapperWithHover = styled(ItemWrapper)({
  "&:hover": {
    border: `1px dotted ${colors.grey[800]}`,
    "& > div:first-of-type": {
      display: "flex",
    },
  },
});

export const SortableItemWrapper = memo(
  ({
    item,
    onAddNew,
    onRemove,
    onClone,
    onSplit,
    onItemChanged,
    onJumpTo,
  }: {
    item: IReportItem;
    onAddNew: () => void;
    onRemove: () => void;
    onClone: (clonedItem: IReportItemValue) => void;
    onSplit: (rows: number) => void;
    onAddUploadedFile?: (data: string[][]) => void;
    onItemChanged: (value: Partial<IReportItemValue>) => void;
    onJumpTo: ({
      filename,
      quote,
    }: {
      filename: string;
      quote: string;
    }) => void;
  }) => {
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

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isVisualize, setIsVisualize] = useState<boolean>(false);

    const onEdit = useCallback(() => {
      setIsEdit(true);
    }, []);

    const onShowVisualization = useCallback(() => {
      setIsVisualize((prev) => !prev);
    }, []);

    const onClickAway = useCallback(
      (tag: string, content: string) => {
        setIsEdit(false);
        onItemChanged({ tag, content });
      },
      [onItemChanged]
    );

    return (
      <ItemWrapperWithHover
        ref={setNodeRef}
        id={item.key}
        sx={{
          ...style,
        }}
        {...attributes}
        onDoubleClick={onEdit}
      >
        {!isEdit && (
          <ItemActionPane
            item={item}
            onAddNew={onAddNew}
            onRemove={onRemove}
            onShowVisualization={onShowVisualization}
            onClone={() => onClone(item.value)}
            onSplit={onSplit}
            listeners={listeners}
          />
        )}
        {isEdit ? (
          <ItemEditor onClickAway={onClickAway} initialItem={item.value} />
        ) : (
          <ReactMarkdown
            rehypePlugins={[rehypeRaw as any]}
            remarkPlugins={[remarkGfm]}
            allowElement={(element, _, parent) => {
              if (element.tagName === "p" && (parent as any).tagName === "li") {
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
              pre: (props) => <div {...(props as any)} />,
              li: (props) => (
                <li
                  {...props}
                  style={{ marginBottom: "12px", fontSize: "14px" }}
                />
              ),
              a: (props: any) => {
                if (props.href) {
                  const splited = props.href.split("______");
                  const filename = splited[0].replaceAll("___", " ").slice(1);
                  const quote = splited[1].replaceAll("___", " ");
                  return (
                    <a
                      {...props}
                      className="no-print"
                      style={{ color: "tomato", fontSize: "14px" }}
                      onClick={() => onJumpTo({ filename, quote })}
                      title={`${filename}.pdf:${quote}`}
                    />
                  );
                } else return <p {...props} />;
              },
              h1: (props) => (
                <h1
                  {...props}
                  style={{
                    ...props.style,
                    fontSize: "28px",
                    color: "red",
                    margin: "18.76px 0",
                  }}
                />
              ),
              h2: (props) => (
                <h2
                  {...props}
                  style={{
                    ...props.style,
                    fontSize: "22px",
                    color: "#327bf0",
                    margin: "18.76px 0",
                  }}
                />
              ),
              h3: (props) => (
                <h3
                  {...props}
                  style={{
                    ...props.style,
                    fontSize: "18px",
                    color: "darkcyan",
                    margin: "16.76px 0",
                  }}
                />
              ),
              h4: (props) => (
                <h4
                  {...props}
                  style={{
                    ...props.style,
                    fontSize: "16px",
                    margin: "16px 0",
                  }}
                />
              ),
              p: (props) => (
                <p
                  {...props}
                  style={{ ...props.style, fontSize: "14px", margin: "8px 0" }}
                />
              ),
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
      </ItemWrapperWithHover>
    );
  }
);
