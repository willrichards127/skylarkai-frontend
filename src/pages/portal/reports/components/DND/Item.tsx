import { useRef, useState, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Markdown } from "../Markdown";
import { ItemWrapper } from "./ItemWrapper";
import { ItemActionPane } from "./ItemActionPane";
import {
  IReportItemValue,
  TDNDItemType,
  IDNDItem,
  IDNDContainer,
} from "../../../../../shared/models/interfaces";
import { ItemEditor } from "../../templates/ItemEditor";

export const Item = ({
  id,
  value,
  type,
  parentId,
  onMoveItem,
  onAddNew,
  onRemove,
  onItemValueChanged,
  onCitationLink,
}: {
  id: string;
  parentId: string;
  type: TDNDItemType;
  value: IReportItemValue;
  onMoveItem: (dragId: string, hoverId: string) => void; // move item inside one container
  onAddNew: () => void;
  onRemove: () => void;
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
  const [isEdit, setIsEdit] = useState<boolean>(false);
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

  const onEdit = useCallback(() => {
    setIsEdit(true);
  }, []);

  const onClickAway = useCallback(
    (replaceItem: IDNDItem, containers: IDNDContainer[]) => {
      const tinyModal = document.querySelector(".tox-dialog-wrap");
      if (tinyModal) return;
      setIsEdit(false);
      onItemValueChanged(replaceItem, containers);
    },
    [onItemValueChanged]
  );

  drag(drop(ref));

  return (
    <ItemWrapper
      ref={ref}
      className="dnd-item"
      id={id}
      style={{
        width: "100%",
        cursor: "move",
        opacity: isDragging ? 0.4 : 1,
      }}
      data-handler-id={handlerId}
      onDoubleClick={onEdit}
    >
      {!isEdit && (
        <ItemActionPane
          item={{ id, value, type, parentId }}
          onAddNew={onAddNew}
          onRemove={onRemove}
          onShowVisualization={() => {}}
        />
      )}
      {isEdit ? (
        <ItemEditor
          onClickAway={onClickAway}
          item={{ id, value, parentId, type }}
        />
      ) : (
        <Markdown html={value.content} onCitationLink={onCitationLink} />
      )}
    </ItemWrapper>
  );
};
