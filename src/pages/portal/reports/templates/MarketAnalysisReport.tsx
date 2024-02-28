// import { useCallback, useMemo, useState, useRef, useEffect } from "react";
import { useCallback, useMemo, useState, useRef } from "react";
import { Box } from "@mui/material";
// import { toast } from "react-toastify";
import { DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { HeaderPanel } from "../components/HeaderPanel";
import { IndexView } from "./IndexView";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { RefFileModal } from "../components/RefFileModal";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import { SortableItemWrapper } from "./SortableItemWrapper";
import {
  getNewId,
  categoryParser,
  convertCSVToTable,
} from "../../../../shared/utils/parse";
import { UtilPanel } from "../components/UtilPanel";
import { BottomPanel } from "../components/BottomPanel";
import { ChatAssistWindow } from "../components/ChatAssistWindow";
import { useLazyGetFilesDataQuery } from "../../../../redux/services/transcriptAPI";
import { scrollToAndHighlightText } from "../../../../shared/utils/string";
import { ISetup } from "../../../../shared/models/interfaces";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import { getPdfInBase64 } from "../../../../shared/utils/pdf-generator";

export const MarketAnalysisReport = ({
  setup,
  reportContent,
  customizedContent,
  reportType,
  onSave,
  onRerun,
}: {
  setup: ISetup;
  reportContent: any;
  customizedContent?: { key: string; value: any }[];
  reportType: string;
  onSave: (content: { key: string; value: any }[]) => void;
  onRerun: (append?: Record<string, File[]>) => void;
}) => {
  const printRef = useRef<HTMLDivElement>();

  const initialReportItems = useMemo(
    () => customizedContent || categoryParser(reportContent),
    [reportContent, customizedContent]
  );

  const refFileRef = useRef<{
    filename: string;
    text_content: string;
    quote_content: string;
  }>();
  const emailContentRef = useRef<
    { subject?: string; content: string } | undefined
  >();

  const [getFileData] = useLazyGetFilesDataQuery();
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>();
  const [exportModal, showExportModal] = useState<boolean>(false);
  const [refFileModal, showRefFileModal] = useState<boolean>(false);
  const [chatAssist, showChatAssist] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const [reportItems, setReportItems] =
    useState<{ key: string; value: any }[]>(initialReportItems);
  const [itemIds, setItemIds] = useState<string[]>(
    initialReportItems.map((item) => item.key)
  );

  const onPrint = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(async () => {
    if (!printRef.current) return;
    const container = document.createElement("div");
    container.appendChild(printRef.current!.cloneNode(true));
    const removeItems = container.querySelectorAll(".no-print");
    for (const item of removeItems) {
      item.remove();
    }
    const base64str = await getPdfInBase64(container.innerHTML, "Skylark");
    emailContentRef.current = {
      subject: `${REPORTS_DICT[reportType].label} Report`,
      content: base64str,
    };
    showEmailModal(true);
  }, [reportType]);

  const handleSave = useCallback(() => {
    onSave(reportItems);
  }, [onSave, reportItems]);

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

  const onAddUploadedFile = useCallback((itemId: string, data: string[][]) => {
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
  }, []);

  const onRemove = useCallback((itemId: string) => {
    setReportItems((prev) => prev.filter((item) => item.key !== itemId));
    setItemIds((prevItemIds) =>
      prevItemIds.filter((prevId) => prevId !== itemId)
    );
  }, []);

  const onChatAssist = useCallback(() => {
    showChatAssist(true);
  }, []);

  const onUploadedFile = useCallback((type: string, files: File[]) => {
    setUploadedFiles((prev) => ({ ...prev, [type]: files }));
  }, []);

  const onRemoveFiles = useCallback((type: string, filename: string) => {
    setUploadedFiles((prev) => {
      const update = { ...prev };
      const removeFiles = update[type].filter((f) => f.name !== filename);
      if (removeFiles.length) {
        update[type] = removeFiles;
      } else {
        delete update[type];
      }
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

  const onJumpTo = useCallback(
    async ({ filename, quote }: { filename: string; quote: string }) => {
      const response = await getFileData({
        docs: [
          {
            analysis_type: "financial_diligence",
            name: filename,
          },
        ],
      }).unwrap();
      refFileRef.current = {
        filename,
        text_content: response?.length ? response[0] : "",
        quote_content: quote,
      };
      showRefFileModal(true);
    },
    [getFileData]
  );

  const onSearchText = useCallback((searchText: string) => {
    setTimeout(() => {
      scrollToAndHighlightText(printRef.current!, searchText);
    }, 100);
  }, []);

  const handleRerun = () => {
    onRerun(uploadedFiles);
  };

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <UtilPanel
        onRemoveFiles={onRemoveFiles}
        onChatAssist={onChatAssist}
        onUploadedFile={onUploadedFile}
        uploadedFiles={uploadedFiles}
        onSearchText={onSearchText}
      />
      <Box sx={{ position: "relative", flex: 1 }}>
        <HeaderPanel
          companyName={setup.name!}
          reportType={reportType}
          onPrint={onPrint}
          onSave={handleSave}
          onDelete={onDelete}
          onSendEmail={onSendEmail}
        />
        <Box sx={{ px: 4, py: 2, height: "calc(100% - 200px)" }}>
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
                    onJumpTo={onJumpTo}
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
          onRerun={handleRerun}
        />
        {exportModal && (
          <ExportModal
            open={exportModal}
            exportContent={printRef.current!}
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
        {refFileModal && refFileRef.current && (
          <RefFileModal
            open={refFileModal}
            onClose={() => showRefFileModal(false)}
            content={refFileRef.current}
          />
        )}
        {emailModal && (
          <SendEmailModal
            open={emailModal}
            onClose={() => showEmailModal(false)}
            content={emailContentRef.current!.content}
            initialSubject={emailContentRef.current!.subject}
          />
        )}
      </Box>
    </Box>
  );
};

MarketAnalysisReport.displayName = "MarketAnalysisReport";
