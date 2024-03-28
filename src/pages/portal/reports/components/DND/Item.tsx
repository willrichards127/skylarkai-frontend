import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Markdown } from "../Markdown";
import { ItemWrapper } from "./ItemWrapper";
import { ItemActionPane } from "./ItemActionPane";
import {
  IReportItemValue,
  TDNDItemType,
} from "../../../../../shared/models/interfaces";

export const Item = ({
  id,
  value,
  type,
  parentId,
  onMoveItem,
}: {
  id: string;
  parentId: string;
  type: TDNDItemType;
  value: IReportItemValue;
  onMoveItem: (dragId: string, hoverId: string) => void; // move item inside one container
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "ITEM",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    canDrop: (item: any) => {
      return item.parentId === parentId;
    },
    drop(item: any) {
      if (!ref.current || item.parentId !== parentId) {
        return;
      }
      // Don't replace items with themselves
      if (item.id === id) {
        return;
      }
      onMoveItem(item.id, id);
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "ITEM",
    item: () => ({
      id,
      parentId,
      value,
      type,
    }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <ItemWrapper
      ref={ref}
      className="dnd-item"
      style={{
        width: "100%",
        cursor: "move",
        opacity: isDragging ? 0.4 : 1,
      }}
      data-handler-id={handlerId}
    >
      <ItemActionPane
        item={{ id, value, type, parentId }}
        onAddNew={() => {}}
        onRemove={() => {}}
        onShowVisualization={() => {}}
      />
      <Markdown html={value.content} />
    </ItemWrapper>
  );
};
