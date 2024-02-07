import {
  memo,
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { HeaderPanel } from "../components/HeaderPanel";
import { IndexView } from "./IndexView";
import { ExportModal } from "../../../../components/modals/ExportModal";
import ChatPanel from "../../../../components/ChatBotChatPanel";
import { SortableItemWrapper } from "./SortableItemWrapper";
import { getNewId, categoryParser, convertCSVToTable } from "../../../../shared/utils/parse";
import { useSaveReportMutation } from "../../../../redux/services/reportApi";

export const MarketAnalysisReport = memo(
  ({
    reportId,
    reportContent,
    customizedContent,
    setupId,
    reportType,
  }: {
    reportId?: number;
    reportContent: any;
    customizedContent?: { key: string; value: any }[];
    reportType: string;
    setupId: string;
  }) => {
    const printRef = useRef();
    const initialReportItems = useMemo(
      () => customizedContent || categoryParser(reportContent),
      [reportContent, customizedContent]
    );

    const [chatWindow, showChatWindow] = useState<boolean>(false);
    const [exportModal, showExportModal] = useState<boolean>(false);

    const [reportItems, setReportItems] =
      useState<{ key: string; value: any }[]>(initialReportItems);
    const [itemIds, setItemIds] = useState<string[]>(
      initialReportItems.map((item) => item.key)
    );
    
    const [saveReport, { isSuccess }] = useSaveReportMutation({});

    const onPrint = useCallback(() => {
      showExportModal(true);
    }, []);

    const onSave = useCallback(() => {
      const mdTemplate = reportItems.reduce(
        (pv: string, cv: { key: string; value: any }) => {
          pv += cv.value.content;
          return pv;
        },
        ""
      );
      saveReport({
        ...(reportId && { reportId }),
        setupId: +setupId,
        reportName: reportType,
        content: mdTemplate,
        custom: reportItems,
      });
    }, [saveReport, reportId, setupId, reportType, reportItems, itemIds]);

    const onDelete = useCallback(() => {
      showExportModal(true);
    }, []);

    const onChatWindow = useCallback(() => {
      showChatWindow((prev) => !prev);
    }, []);

    const onDragEnd = useCallback((event: any) => {
      const { active, over } = event;
      if (!active || !over) return;
      if (active.id !== over.id) {
        setItemIds((prevItemIds) => {
          const oldIndex = prevItemIds.indexOf(active.id);
          const newIndex = prevItemIds.indexOf(over.id);

          return arrayMove(prevItemIds, oldIndex, newIndex);
        });
        setReportItems((prevItems) => {
          const updated = [...prevItems];
          const oldIndex = prevItems.map((item) => item.key).indexOf(active.id);
          const newIndex = prevItems.map((item) => item.key).indexOf(over.id);
          const temp = updated[oldIndex];
          updated[oldIndex] = updated[newIndex];
          updated[newIndex] = temp;
          return updated;
        });
      }
    }, []);

    const onAddNew = useCallback((itemId: string) => {
      const newId = getNewId();
      setReportItems((prevItems) => {
        const updated = [...prevItems];
        const position = prevItems.map((item) => item.key).indexOf(itemId);
        updated.splice(position, 0, {
          key: newId,
          value: { content: "New Content", tag: "p" },
        });
        return updated;
      });
      setItemIds((prevItemIds) => {
        const updated = [...prevItemIds];
        const position = prevItemIds.indexOf(itemId);
        updated.splice(position, 0, newId);
        return updated;
      });
    }, []);

    const onAddUploadedFile = useCallback(
      (itemId: string, data: string[][]) => {
        const newId = getNewId();
        setReportItems((prevItems) => {
          const updated = [...prevItems];
          const position = prevItems.map((item) => item.key).indexOf(itemId);
          updated.splice(position, 0, {
            key: newId,
            value: { content: convertCSVToTable(data), tag: "table" },
          });
          return updated;
        });
        setItemIds((prevItemIds) => {
          const updated = [...prevItemIds];
          const position = prevItemIds.indexOf(itemId);
          updated.splice(position, 0, newId);
          return updated;
        });
      },
      []
    );

    const onRemove = useCallback((itemId: string) => {
      setReportItems((prev) => prev.filter((item) => item.key !== itemId));
      setItemIds((prevItemIds) =>
        prevItemIds.filter((prevId) => prevId !== itemId)
      );
    }, []);

    // Item content
    const onItemChanged = useCallback(
      (
        itemId: string,
        changedItemContent: string,
        tagName: string,
        visualType?: string
      ) => {
        setReportItems((prev) =>
          prev.map((item) =>
            item.key === itemId
              ? {
                  ...item,
                  value: {
                    tag: tagName,
                    ...(visualType && { visual: visualType }),
                    content: changedItemContent,
                  },
                }
              : item
          )
        );
      },
      []
    );

    useEffect(() => {
      if (isSuccess) {
        toast.success("The report is updated successfully.");
      }
    }, [isSuccess]);

    return (
      <Box>
        <HeaderPanel
          onPrint={onPrint}
          onRerunReport={() => {}}
          onChatWindow={onChatWindow}
          onSave={onSave}
          onDelete={onDelete}
          top={136}
          right={32}
        />
        <Box ref={printRef}>
          <IndexView items={reportItems} />
          <DndContext onDragEnd={onDragEnd}>
            <SortableContext
              items={itemIds}
              strategy={verticalListSortingStrategy}
            >
              {itemIds.map((itemId) => (
                <SortableItemWrapper
                  key={itemId}
                  itemId={itemId}
                  item={reportItems.find((item) => item.key === itemId)!.value}
                  onAddNew={() => onAddNew(itemId)}
                  onRemove={() => onRemove(itemId)}
                  onAddUploadedFile={(data) => onAddUploadedFile(itemId, data)}
                  onItemChanged={(changedValue, tagName, visualType) =>
                    onItemChanged(itemId, changedValue, tagName, visualType)
                  }
                />
              ))}
            </SortableContext>
          </DndContext>
        </Box>
        {chatWindow && (
          <Box sx={{ position: "fixed", bottom: 32, right: 32 }}>
            <ChatPanel setupId={+setupId!} isFloating content={reportContent} />
          </Box>
        )}
        {exportModal && (
          <ExportModal
            open={exportModal}
            exportContent={printRef.current}
            onClose={() => showExportModal(false)}
          />
        )}
      </Box>
    );
  }
);

MarketAnalysisReport.displayName = "MarketAnalysisReport";
