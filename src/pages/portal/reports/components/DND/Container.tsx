import { useCallback, useRef } from "react";
import { Box } from "@mui/material";
import { useDrop, useDrag } from "react-dnd";
import { Item } from "./Item";
import {
  IDNDItem,
  IReportItemValue,
  TDNDItemType,
} from "../../../../../shared/models/interfaces";
import { changeOrder } from "../../../../../shared/utils/base";

export const Container = ({
  id,
  type,
  children,
  onExchangeItem,
  onMoveContainer,
  onChangeChildOrder,
}: {
  id: string;
  type: TDNDItemType;
  children: IDNDItem[];
  onExchangeItem: (
    sourceId: string,
    targetId: string,
    childId: string,
    childValue: IReportItemValue
  ) => void;
  onMoveContainer: (dragId: string, hoverId: string) => void;
  onChangeChildOrder: (id: string, updatedChildren: IDNDItem[]) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
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

  return (
    <div
      className={children.length > 0 ? "wrapper" : "no-print"}
      style={{
        display: "flex",
        width: "100%",
        padding: "4px",
        border: "1px solid grey",
        height: children.length > 0 ? "auto" : "36px",
        opacity: isDragging ? 0.4 : 1,
      }}
      data-handler-id={handlerId}
      ref={ref}
    >
      {children.length > 0 ? (
        children.map((child) => (
          <Item
            key={child.id}
            id={child.id}
            type={child.type}
            value={child.value!}
            parentId={child.parentId}
            onMoveItem={onMoveItem}
          />
        ))
      ) : (
        <small style={{ color: "grey" }}>Empty Container</small>
      )}
    </div>
  );
};
