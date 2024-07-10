import { useCallback, useMemo, useRef } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useDrop, useDrag } from "react-dnd";
import { Item } from "./Item";
import { ContainerActionPane } from "./ContainerActionPane";
import {
  IDNDContainer,
  IDNDItem,
  IReportItemValue,
  TDNDItemType,
} from "../../../../../shared/models/interfaces";
import { changeOrder } from "../../../../../shared/utils/base";

export const Container = ({
  loading = false,
  id,
  setupId,
  unitName,
  type,
  children,
  isShowQuestion,
  containers,
  editable,
  onExchangeItem,
  onMoveContainer,
  onChangeChildOrder,
  onAddNew,
  onRemove,
  onAddNewItem,
  onRemoveItem,
  onItemValueChanged,
  onSectionContentChanged,
  onCitationLink,
}: {
  loading?: boolean;
  id: string;
  setupId: number;
  unitName: string;
  type: TDNDItemType;
  children: IDNDItem[];
  containers: IDNDContainer[];
  isShowQuestion?: boolean;
  editable?: boolean;
  onSectionContentChanged: (
    startIndex: number,
    endIndex: number,
    newContainers: IDNDContainer[]
  ) => void;
  onExchangeItem: (
    sourceId: string,
    targetId: string,
    childId: string,
    childValue: IReportItemValue
  ) => void;
  onMoveContainer: (dragId: string, hoverId: string) => void;
  onChangeChildOrder: (id: string, updatedChildren: IDNDItem[]) => void;
  onAddNew: () => void;
  onRemove: () => void;
  onAddNewItem: (item: IDNDItem) => void;
  onRemoveItem: (item: IDNDItem) => void;
  onItemValueChanged: (
    replaceItem: IDNDItem,
    containers: IDNDContainer[]
  ) => void;
  onCitationLink: ({
    filename,
    quote,
  }: {
    filename: string;
    quote: string;
  }) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId, isOver }, drop] = useDrop({
    accept: ["ITEM", "CONTAINER"],
    drop: (item: any, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) return;
      if (item.type === "ITEM") {
        onExchangeItem(item.parentId, id, item.id, item.value);
      } else {
        if (item.id === id) {
          return;
        }
        onMoveContainer(item.id, id);
      }
    },
    canDrop: (item) => {
      return item.type === "ITEM" ? item.parentId !== id : item.id !== id;
    },
    collect(monitor) {
      return {
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: false }),
        handlerId: monitor.getHandlerId(),
      };
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "CONTAINER",
    item: () => ({
      id,
      type,
      children,
    }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const onMoveItem = useCallback(
    (dragId: string, hoverId: string) => {
      onChangeChildOrder(id, changeOrder(children, hoverId, dragId));
    },
    [id, children, onChangeChildOrder]
  );

  drag(drop(ref));

  const isQuestionContainer = useMemo(
    () =>
      children.length === 1 &&
      children[0].value.content.includes("heading-question"),
    [children]
  );

  return (
    <Box
      className={
        children.length > 0 ? "dnd-container" : "dnd-container no-save no-print"
      }
      sx={{
        display: isQuestionContainer
          ? isShowQuestion
            ? "flex"
            : "none"
          : "flex",
        width: "100%",
        padding: "4px",
        marginBottom: "2px",
        opacity: isDragging ? 0.4 : 1,
        borderTop: isOver ? "2px solid blue" : "none",
        position: "relative",
        "&:hover": {
          opacity: 0.7,
          "& > div:first-of-type": {
            display: "flex",
          },
        },
        pointerEvents: loading ? "none" : "auto",
      }}
      data-handler-id={handlerId}
      ref={ref}
    >
      {!loading && editable && (
        <ContainerActionPane onAddNew={onAddNew} onRemove={onRemove} />
      )}
      {children.length > 0 ? (
        children
          .filter((item) =>
            isShowQuestion
              ? true
              : !item.value.content.includes("heading-question")
          )
          .map((child) => (
            <Item
              loading={loading}
              key={child.id}
              containers={containers}
              setupId={setupId}
              unitName={unitName}
              id={child.id}
              type={child.type}
              value={child.value!}
              parentId={child.parentId}
              editable={editable}
              onMoveItem={onMoveItem}
              onAddNew={() => onAddNewItem(child)}
              onRemove={() => onRemoveItem(child)}
              onSectionContentChanged={onSectionContentChanged}
              onItemValueChanged={onItemValueChanged}
              onCitationLink={onCitationLink}
            />
          ))
      ) : (
        <small style={{ color: "grey" }}>Empty Container</small>
      )}
      {loading && (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0, 0, 0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1
          }}
        >
          <CircularProgress color="info" size={20} />
        </Box>
      )}
    </Box>
  );
};
