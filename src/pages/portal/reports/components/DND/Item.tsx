import { useRef, useState, useCallback, useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Markdown } from "../Markdown";
import { ItemWrapper } from "./ItemWrapper";
import { ItemActionPane } from "./ItemActionPane";
import { VizModal } from "./VizModal";
import {
  IReportItemValue,
  TDNDItemType,
  IDNDItem,
  IDNDContainer,
  IReportItemMetadata,
} from "../../../../../shared/models/interfaces";
import { ItemEditor } from "./ItemEditor";
import { parseTable } from "../../../../../shared/utils/parse";
import { Chart } from "../Chart";

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
  const [vizModal, showVizModal] = useState<boolean>(false);
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

  const onShowViz = useCallback(() => {
    showVizModal(true);
  }, []);

  const onAddChart = useCallback(
    (vizType: string, axis: string) => {
      onItemValueChanged(
        {
          id,
          parentId,
          type,
          value: {
            ...value,
            vizType,
            axis,
          },
        },
        []
      );
    },
    [onItemValueChanged, id, parentId, value, type]
  );

  const tableValue = useMemo(
    () => (value.tag === "table" ? parseTable(value.content) : null),
    [value]
  );

  const vizContent = useMemo(() => {
    if (value.vizType !== "table" && value.axis) {
      return {
        vizType: value.vizType,
        columns: tableValue?.columns,
        rows: tableValue?.rows,
        ...(!!value.axis && { axis: JSON.parse(value.axis) }),
      };
    }
    return null;
  }, [value, tableValue]);

  drag(drop(ref));

  return (
    <ItemWrapper
      ref={ref}
      className={
        value.vizType && value.vizType !== "table"
          ? "viz-item dnd-item"
          : "dnd-item"
      }
      data-viz-type={value.vizType}
      data-viz-option={value.axis}
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
          onShowViz={onShowViz}
        />
      )}
      {isEdit && (
        <ItemEditor
          onClickAway={onClickAway}
          item={{ id, value, parentId, type }}
        />
      )}
      {!isEdit && vizContent && (
        <Chart
          vizType={vizContent.vizType}
          data={
            {
              columns: vizContent.columns!,
              rows: vizContent.rows!,
              axis: vizContent.axis!,
            } as IReportItemMetadata
          }
          height={320}
        />
      )}
      {!isEdit && (
        <Markdown
          html={value.content}
          onCitationLink={onCitationLink}
          isHidden={!!value.vizType && value.vizType !== "table"}
        />
      )}

      {vizModal && tableValue?.columns.length && tableValue?.rows.length && (
        <VizModal
          open={vizModal}
          columns={tableValue.columns}
          rows={tableValue.rows}
          onClose={() => showVizModal(false)}
          onAddChart={onAddChart}
          initialVizType={vizContent?.vizType}
          initialAxis={vizContent?.axis}
        />
      )}
    </ItemWrapper>
  );
};
