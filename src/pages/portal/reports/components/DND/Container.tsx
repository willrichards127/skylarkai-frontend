import { useCallback, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import { Item } from "./Item";
import { ItemWrapper } from "./ItemWrapper";
import { ContainerActionPane } from "./ContainerActionPane";
import {
  IDNDContainer,
  IDNDItem,
  IReportItemValue,
  TDNDItemType,
} from "../../../../../shared/models/interfaces";
import { changeOrder } from "../../../../../shared/utils/base";

export const Container = ({
  id,
  type,
  children,
  isShowQuestion,
  onExchangeItem,
  onMoveContainer,
  onChangeChildOrder,
  onAddNew,
  onRemove,
  onAddNewItem,
  onRemoveItem,
  onItemValueChanged,
  onCitationLink,
}: {
  id: string;
  type: TDNDItemType;
  children: IDNDItem[];
  isShowQuestion?: boolean;
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
    <ItemWrapper
      className={children.length > 0 ? "dnd-container" : "no-print"}
      style={{
        display: "flex",
        width: "100%",
        padding: "4px",
        height: children.length > 0 ? "auto" : "36px",
        minHeight: "36px",
        opacity: isDragging ? 0.4 : 1,
      }}
      data-handler-id={handlerId}
      ref={ref}
    >
      <ContainerActionPane onAddNew={onAddNew} onRemove={onRemove} />
      {children.length > 0 ? (
        children
          .filter((item) =>
            isShowQuestion
              ? true
              : !item.value.content.includes("heading-question")
          )
          .map((child) => (
            <Item
              key={child.id}
              id={child.id}
              type={child.type}
              value={child.value!}
              parentId={child.parentId}
              onMoveItem={onMoveItem}
              onAddNew={() => onAddNewItem(child)}
              onRemove={() => onRemoveItem(child)}
              onItemValueChanged={onItemValueChanged}
              onCitationLink={onCitationLink}
            />
          ))
      ) : (
        <small style={{ color: "grey" }}>Empty Container</small>
      )}
    </ItemWrapper>
  );
};
