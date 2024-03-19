import {
  useCallback,
  useMemo,
  useState,
  ForwardedRef,
  forwardRef,
} from "react";
import { Box } from "@mui/material";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SplitContainer } from "../../../../components/SplitContainer";
import { SortableItemWrapper } from "./SortableItemWrapper";
import ChatPanel from "../components/ChatPanel";
import {
  getNewId,
  categoryParser2,
  convertCSVToTable,
  parseTable,
} from "../../../../shared/utils/parse";
import { ReportDrawer } from "../components/ReportDrawer";
import {
  IReportItem,
  IReportItemValue,
} from "../../../../shared/models/interfaces";

export const ReportTemplate = forwardRef(
  (
    {
      setup,
      reportContent,
      analysisType,
      filenames,
    }: {
      setup: { id?: number; name: string };
      reportContent: string;
      analysisType: string;
      filenames: string[];
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const initialReportItems = useMemo(() => {
      return categoryParser2(reportContent);
    }, [reportContent]);
    const [isShowQuestion, setIsShowQuestion] = useState<boolean>(true);
    const [uploadedFiles, setUploadedFiles] =
      useState<Record<string, File[]>>();

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
      },
      []
    );

    const onRemove = useCallback((itemId: string) => {
      setReportItems((prev) => prev.filter((item) => item.key !== itemId));
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
              if (
                item.value.tag === "table" &&
                data.content &&
                !data.metadata
              ) {
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

    const onAddToReport = useCallback((question: string, content: string) => {
      setReportItems((prevItems) => [
        ...prevItems,
        {
          key: getNewId(),
          value: { content: `<h3>${question}</h3>`, tag: "h4" },
        },
        ...categoryParser2(content),
      ]);
    }, []);

    const onJumpTo = useCallback(
      ({ filename, quote }: { filename: string; quote: string }) => {
        console.log(filename, quote);
      },
      []
    );

    return (
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
              isShowQuestion={isShowQuestion}
              items={reportItems}
              onSwitchMode={(mode) => setIsShowQuestion(mode)}
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
                ref={ref}
                sx={{
                  maxWidth: 892,
                  bgcolor: "white",
                  color: "black",
                  p: 8,
                }}
              >
                <DndContext onDragEnd={onDragEnd}>
                  <SortableContext
                    items={reportItems
                      .filter((item) =>
                        isShowQuestion
                          ? true
                          : !item.value.content.includes(
                              'heading-question'
                            )
                      )
                      .map((item) => item.key)}
                    strategy={verticalListSortingStrategy}
                  >
                    {reportItems
                      .filter((item) =>
                        isShowQuestion
                          ? true
                          : !item.value.content.includes(
                              'heading-question'
                            )
                      )
                      .map((item) => (
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
                          // onJumpTo={onJumpTo}
                          onJumpTo={() => {}}
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
            graph_id={setup.id}
            companyName={setup.name!}
            analysis_type={analysisType}
            onAddToReport={onAddToReport}
            filenames={filenames}
            onJumpTo={onJumpTo}
          />
        }
      />
    );
  }
);
