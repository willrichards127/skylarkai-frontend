import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Markdown } from "../Markdown";
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
    <div
      ref={ref}
      style={{
        width: "100%",
        border: "1px dashed gray",
        cursor: "move",
        opacity: isDragging ? 0.4 : 1,
      }}
      data-handler-id={handlerId}
    >
      <Markdown html={value.content} />
    </div>
  );
};
