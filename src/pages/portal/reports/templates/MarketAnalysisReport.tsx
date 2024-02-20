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
import { marked } from "marked";
import { HeaderPanel } from "../components/HeaderPanel";
import { IndexView } from "./IndexView";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { SortableItemWrapper } from "./SortableItemWrapper";
import { getNewId, categoryParser, convertCSVToTable } from "../../../../shared/utils/parse";
import { useSaveReportMutation } from "../../../../redux/services/reportApi";
import { UtilPanel } from "../components/UtilPanel";
import { BottomPanel } from "../components/BottomPanel";
import { ChatAssistWindow } from "../components/ChatAssistWindow";

marked.use({
  pedantic: false,
  gfm: true,
});

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
      () => customizedContent || categoryParser(marked.parse(reportContent) as string),
      [reportContent, customizedContent]
    );

    const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>();
    const [exportModal, showExportModal] = useState<boolean>(false);
    const [chatAssist, showChatAssist] = useState<boolean>(false);

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
    }, [saveReport, reportId, setupId, reportType, reportItems]);

    const onDelete = useCallback(() => {
      showExportModal(true);
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

    const onChatAssist = useCallback(() => {
      showChatAssist(true);
    }, []);

    const onUploadedFile = useCallback((type: string, file: File) => {
      setUploadedFiles((prev) => ({ ...prev, [type]: file }));
    }, []);

    const onRemoveFiles = useCallback((type: string, filename: string) => {
      setUploadedFiles((prev) => {
        const update = { ...prev };
        delete update[type];
        return update;
      });
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
      <Box sx={{ display: "flex", height: "100%" }}>
        <UtilPanel
          onRemoveFiles={onRemoveFiles}
          onChatAssist={onChatAssist}
          uploadedFiles={uploadedFiles}
        />
        <Box sx={{ position: "relative", flex: 1 }}>
          <HeaderPanel
            setupId={+setupId}
            reportType={reportType}
            onPrint={onPrint}
            onSave={onSave}
            onDelete={onDelete}
          />
          <Box sx={{ px: 4, py: 2, height: "calc(100% - 270px)" }}>
            <Box
              ref={printRef}
              sx={{
                px: 32,
                bgcolor: "black",
                py: 4,
                height: "100%",
                overflowY: "auto",
              }}
            >
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
                      item={
                        reportItems.find((item) => item.key === itemId)!.value
                      }
                      onAddNew={() => onAddNew(itemId)}
                      onRemove={() => onRemove(itemId)}
                      onAddUploadedFile={(data) =>
                        onAddUploadedFile(itemId, data)
                      }
                      onItemChanged={(changedValue, tagName, visualType) =>
                        onItemChanged(itemId, changedValue, tagName, visualType)
                      }
                    />
                  ))}
                </SortableContext>
              </DndContext>
            </Box>
          </Box>
          <BottomPanel
            onChatAssist={onChatAssist}
            onUploadedFile={onUploadedFile}
            onRerun={() => {}}
          />
          {exportModal && (
            <ExportModal
              open={exportModal}
              exportContent={printRef.current}
              onClose={() => showExportModal(false)}
            />
          )}
          {chatAssist && (
            <ChatAssistWindow
              reportType={reportType}
              onClose={() => showChatAssist(false)}
              onExportChat={() => {}}
            />
          )}
        </Box>
      </Box>
    );
  }
);

MarketAnalysisReport.displayName = "MarketAnalysisReport";
