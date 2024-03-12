import { useCallback, useMemo, useState, useRef } from "react";
import { Box } from "@mui/material";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { HeaderPanel } from "../components/HeaderPanel";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { RefFileModal } from "../components/RefFileModal";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import { SplitContainer } from "../../../../components/SplitContainer";
import { SortableItemWrapper } from "./SortableItemWrapper";
import ChatPanel from "../components/ChatPanel";
import {
  getNewId,
  categoryParser,
  convertCSVToTable,
  parseTable,
} from "../../../../shared/utils/parse";
import { ReportDrawer } from "../components/ReportDrawer";
import { useLazyGetFilesDataQuery } from "../../../../redux/services/transcriptAPI";
import {
  IReportItem,
  IReportItemValue,
  ISetup,
} from "../../../../shared/models/interfaces";
import {
  REPORTS_DICT,
  reportHeaderHeight,
} from "../../../../shared/models/constants";
import { getPdfInBase64 } from "../../../../shared/utils/pdf-generator";

export const MarketAnalysisReport = ({
  setup,
  reportContent,
  reportType,
  onSaveAction,
  onRerunAction,
}: {
  setup: ISetup;
  reportContent: any;
  reportType: string;
  onSaveAction: (content: { key: string; value: any }[]) => void;
  onRerunAction: (append?: Record<string, File[]>) => void;
}) => {
  const printRef = useRef<HTMLDivElement>();

  const initialReportItems = useMemo(
    () => categoryParser(reportContent),
    [reportContent]
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
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const [reportItems, setReportItems] = useState<IReportItem[]>(
    initialReportItems.map((item) => ({
      ...item,
      value: {
        ...item.value,
        ...(item.value.tag === "table" && {
          metadata: { ...parseTable(item.value.content), visual: "table" },
        }),
      },
    }))
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

  const onSave = useCallback(() => {
    onSaveAction(reportItems);
  }, [onSaveAction, reportItems]);

  const onDelete = useCallback(() => {
    showExportModal(true);
  }, []);

  const onDragEnd = useCallback((event: any) => {
    const { active, over } = event;
    if (!active || !over) return;
    if (active.id !== over.id) {
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
  }, []);

  const onClone = useCallback((itemId: string, item: any) => {
    const newId = getNewId();
    setReportItems((prevItems) => {
      const updated = [...prevItems];
      const position = prevItems.map((item) => item.key).indexOf(itemId);
      updated.splice(position, 0, {
        key: newId,
        value: item,
      });
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
  }, []);

  const onRemove = useCallback((itemId: string) => {
    setReportItems((prev) => prev.filter((item) => item.key !== itemId));
  }, []);

  const onUploadedFiles = useCallback((type: string, files: File[]) => {
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
    (itemId: string, data: Partial<IReportItemValue>) => {
      setReportItems((prev) =>
        prev.map((item) => {
          if (item.key === itemId) {
            if (item.value.tag === "table" && data.content && !data.metadata) {
              // Item Changed for table edit(Just data, not configure row/column)
              const newMetadata = parseTable(data.content);
              data.metadata = { ...newMetadata, visual: "table" };
            }

            return {
              ...item,
              value: {
                ...item.value,
                ...data,
              },
            };
          } else {
            return item;
          }
        })
      );
    },
    []
  );

  const onAddToReport = useCallback((content: string) => {
    const newId = getNewId();
    setReportItems((prevItems) => [
      ...prevItems,
      {
        key: newId,
        value: { content, tag: "p" },
      },
    ]);
  }, []);

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

  const onRerunReport = () => {
    onRerunAction(uploadedFiles);
  };

  return (
    <Box sx={{ display: "flex", height: "100%", position: "relative" }}>      
      <Box
        sx={{
          // position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <HeaderPanel
          companyName={setup.name!}
          reportType={reportType}
          onPrint={onPrint}
          onSave={onSave}
          onDelete={onDelete}
          onSendEmail={onSendEmail}
          onRerunReport={onRerunReport}
          onUploadedFiles={onUploadedFiles}
        />
        <Box
          sx={{
            height: `calc(100% - ${reportHeaderHeight}px)`,
            width: "100%",
            p: 2,
          }}
        >
          <SplitContainer
            sizes={[70, 30]}
            leftPanel={
              <Box
                sx={{
                  display: "flex",
                  borderRadius: 2,
                  bgcolor: "#121212",
                }}
              >
                <ReportDrawer
                  items={reportItems}
                  onRemoveFiles={onRemoveFiles}
                  uploadedFiles={uploadedFiles}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    overflowY: "auto",
                    flex: 1,
                  }}
                >
                  <Box
                    ref={printRef}
                    sx={{
                      maxWidth: 892,
                      bgcolor: "white",
                      color: "black",
                      p: 8,
                    }}
                  >
                    <DndContext onDragEnd={onDragEnd}>
                      <SortableContext
                        items={reportItems.map((item) => item.key)}
                        strategy={verticalListSortingStrategy}
                      >
                        {reportItems.map((item) => (
                          <SortableItemWrapper
                            key={item.key}
                            item={item}
                            onAddNew={() => onAddNew(item.key)}
                            onRemove={() => onRemove(item.key)}
                            onClone={(clonedItem) =>
                              onClone(item.key, clonedItem)
                            }
                            onAddUploadedFile={(data) =>
                              onAddUploadedFile(item.key, data)
                            }
                            onJumpTo={onJumpTo}
                            onItemChanged={(data: Partial<IReportItemValue>) =>
                              onItemChanged(item.key, data)
                            }
                          />
                        ))}
                      </SortableContext>
                    </DndContext>
                  </Box>
                </Box>
              </Box>
            }
            rightPanel={
              <ChatPanel
                graph_id={setup.id!}
                analysis_type="financial_diligence"
                onAddToReport={onAddToReport}
              />
            }
          />
        </Box>
        {exportModal && (
          <ExportModal
            open={exportModal}
            exportContent={printRef.current!}
            onClose={() => showExportModal(false)}
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
