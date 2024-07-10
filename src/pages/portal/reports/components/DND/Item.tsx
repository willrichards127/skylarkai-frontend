import { useRef, useState, useCallback, useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import * as marked from "marked";
import { toast } from "react-toastify";
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
import { ItemEditorTiny } from "./ItemEditor";
import {
  categoryParser2,
  getSectionName,
  parseTable,
  sectionIndexes,
} from "../../../../../shared/utils/parse";
import { Chart } from "../Chart";
import { htmlTable2CSV } from "../../../../../shared/utils/string";
import { downloadCSV } from "../../../../../shared/utils/download";
import { useBulkCustomQueryMutation } from "../../../../../redux/services/transcriptAPI";
import { useGetSetupQuery } from "../../../../../redux/services/setupApi";


export const Item = ({
  loading,
  setupId,
  containers,
  unitName,
  id,
  value,
  type,
  parentId,
  editable,
  onMoveItem,
  onAddNew,
  onRemove,
  onSectionContentChanged,
  onItemValueChanged,
  onCitationLink,
}: {
  loading?: boolean;
  setupId: number;
  containers: IDNDContainer[];
  unitName: string;
  id: string;
  parentId: string;
  type: TDNDItemType;
  value: IReportItemValue;
  editable?: boolean;
  onMoveItem: (dragId: string, hoverId: string) => void; // move item inside one container
  onAddNew: () => void;
  onRemove: () => void;
  onSectionContentChanged: (
    startIndex: number,
    endIndex: number,
    newContainers: IDNDContainer[]
  ) => void;
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
  const { isLoading: loadingSetup, data: setup } = useGetSetupQuery({
    setupId,
  });
  const [bulkCustomQuery, { isLoading: loadingBulkQuery }] =
    useBulkCustomQueryMutation();
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
    if(editable) {
      setIsEdit(true);
    }
  }, [editable]);

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

  const onDownloadCSV = useCallback(() => {
    downloadCSV(htmlTable2CSV(value.content));
  }, [value]);

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

  const onRerunSection = useCallback(
    async (htmlContent: string, llm: string) => {
      const templateNode = (setup as any).nodes.find((node: any) =>
        node.attributes.graph_node_id.startsWith("Template_")
      );
      const template = JSON.parse(templateNode.properties.text);

      const matchedSection = template.data.find(
        (item: any) => item.name === getSectionName(htmlContent)
      );
      if (!matchedSection) {
        toast.warn("This section doesn't match to the template.");
        return;
      }

      const validQuestions = matchedSection.children!.filter(
        (child: any) => !child.isUnChecked
      );
      // get all containers for this section
      const indexes = sectionIndexes(containers, parentId);
      // update the current containers statuses
      onSectionContentChanged(indexes.startIndex, indexes.endIndex, []);

      const answers = await bulkCustomQuery({
        graph_id: setup!.id,
        filenames: [],
        questions: validQuestions.map((item: any) => item.name),
        company_name: unitName,
        analysis_type: "financial_diligence",
        llm,
      }).unwrap();

      const html = answers.reduce((pv, cv) => {
        pv += marked.parse(cv, { gfm: true });
        return pv;
      }, "");
      const newContainers = categoryParser2(html);

      onSectionContentChanged(
        indexes.startIndex,
        indexes.endIndex,
        newContainers
      );
    },
    [
      parentId,
      setup,
      unitName,
      containers,
      bulkCustomQuery,
      onSectionContentChanged,
    ]
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

  const isLoading = loading || loadingSetup || loadingBulkQuery;

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
        pointerEvents: isLoading ? "none" : "auto",
        width: "100%",
        cursor: "move",
        opacity: isDragging ? 0.4 : 1,
      }}
      data-handler-id={handlerId}
      onDoubleClick={() => (isLoading ? null : onEdit())}
    >
      {!isLoading && !isEdit && editable && (
        <ItemActionPane
          item={{ id, value, type, parentId }}
          onAddNew={onAddNew}
          onRemove={onRemove}
          onShowViz={onShowViz}
          onDownloadCSV={onDownloadCSV}
          onRerunSection={onRerunSection}
        />
      )}
      {!isLoading && isEdit && editable && (
        <ItemEditorTiny
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
