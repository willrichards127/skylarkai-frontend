import { useCallback, useRef, useMemo, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Box } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SplitContainer } from "../../../../components/SplitContainer";
import ChatPanel from "../components/ChatPanel";
import { ExportModal } from "../../../../components/modals/ExportModal";
import { SendEmailModal } from "../../../../components/modals/SendEmailModal";
import {
  getNewId,
  categoryParser3,
  initializeHtmlResponse,
} from "../../../../shared/utils/parse";
import { ReportDrawer } from "../components/ReportDrawer";
import { DragLayer } from "../components/DND/DragLayer";
import {
  IDNDContainer,
  IDNDItem,
  IReportItemValue,
} from "../../../../shared/models/interfaces";
import { Container } from "../components/DND/Container";
import {
  addElementsRightAfter,
  changeOrder,
} from "../../../../shared/utils/base";
import { CitationModal } from "../../../../components/modals/CitationModal";
import {
  useReGenerateReportMutation,
  useUpdateReportMutation,
} from "../../../../redux/services/reportApi";
import { useIngestFilesMutation } from "../../../../redux/services/setupApi";
import { REPORTS_DICT } from "../../../../shared/models/constants";

export const ReportTemplate = ({
  reportId,
  reportName,
  setupId,
  unitName,
  reportContent,
  analysisType,
  isReadOnly = false,
}: {
  reportId: number;
  reportName: string;
  setupId: number;
  unitName?: string;
  isReadOnly?: boolean;
  reportContent: string;
  analysisType: string;
}) => {
  const printRef = useRef<HTMLDivElement>(null);
  const [
    regenerateReport,
    // {
    //   isLoading: isGeneratingReport,
    //   isSuccess: isGeneratedReport,
    //   data: generatedData,
    // },
  ] = useReGenerateReportMutation();

  const [saveReport, { isSuccess: isSaved }] = useUpdateReportMutation();

  const [ingestFiles] = useIngestFilesMutation();

  const initialReportItems = useMemo(
    () => categoryParser3(initializeHtmlResponse(reportContent)),
    [reportContent]
  );

  const [exportModal, showExportModal] = useState<boolean>(false);
  const [emailModal, showEmailModal] = useState<boolean>(false);

  const [citationData, setCitationData] = useState<{
    filename: string;
    quote: string;
  }>();

  const [isShowQuestion, setIsShowQuestion] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File[]>>();

  const [reportItems, setReportItems] =
    useState<IDNDContainer[]>(initialReportItems);

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

  const onAddToReport = useCallback((question: string, content: string) => {
    setReportItems((prevContainers) => [
      ...prevContainers,
      ...categoryParser3(
        initializeHtmlResponse(`<h3>${question}</h3>\n` + content)
      ),
    ]);
  }, []);

  const onCitationLink = useCallback(
    ({ filename, quote }: { filename: string; quote: string }) => {
      console.log(filename);
      console.log(quote);
      setCitationData({
        filename: `${filename}.pdf`,
        quote,
      });
    },
    []
  );

  // Actions for Container
  const onExchangeItem = useCallback(
    (
      sourceId: string,
      targetId: string,
      childId: string,
      childValue: IReportItemValue
    ) => {
      setReportItems((prevContainerItems) =>
        prevContainerItems.map((containerItem) => {
          if (containerItem.id === sourceId) {
            return {
              ...containerItem,
              children: containerItem.children.filter(
                (item) => item.id !== childId
              ),
            };
          }
          if (containerItem.id === targetId) {
            return {
              ...containerItem,
              children: [
                ...containerItem.children,
                {
                  id: childId,
                  value: childValue,
                  type: "ITEM",
                  parentId: targetId,
                },
              ],
            };
          }
          return containerItem;
        })
      );
    },
    []
  );

  const onMoveContainer = useCallback((dragId: string, hoverId: string) => {
    setReportItems((prevContainers) =>
      changeOrder(prevContainers, hoverId, dragId)
    );
  }, []);

  const onAddNewContainer = useCallback((container: IDNDContainer) => {
    const newContainerId = getNewId();
    setReportItems((prevContainers) =>
      addElementsRightAfter(prevContainers, container.id, [
        {
          id: newContainerId,
          type: "CONTAINER",
          children: [
            {
              id: getNewId(),
              parentId: newContainerId,
              type: "ITEM",
              value: {
                tag: "p",
                content: "<p>New Item</p>",
              },
            },
          ],
        },
      ])
    );
  }, []);

  const onRemoveContainer = useCallback((container: IDNDContainer) => {
    setReportItems((prevContainers) =>
      prevContainers.filter((c) => c.id !== container.id)
    );
  }, []);

  // Actions for Item
  const onChangeChildOrder = useCallback(
    (containerId: string, updatedChildren: IDNDItem[]) => {
      setReportItems((prevContainerItems) =>
        prevContainerItems.map((containerItem) =>
          containerItem.id === containerId
            ? { ...containerItem, children: updatedChildren }
            : containerItem
        )
      );
    },
    []
  );

  const onItemValueChanged = useCallback(
    (replaceItem: IDNDItem, containers: IDNDContainer[]) => {
      setReportItems((prevContainers) =>
        addElementsRightAfter(
          prevContainers.map((c) =>
            replaceItem.parentId === c.id
              ? {
                  ...c,
                  children: c.children.map((child) =>
                    child.id === replaceItem.id ? replaceItem : child
                  ),
                }
              : c
          ),
          replaceItem.parentId,
          containers
        )
      );
    },
    []
  );

  const onSectionContentChanged = useCallback(
    (startIndex: number, endIndex: number, newContainers: IDNDContainer[]) => {
      console.log(startIndex, endIndex, newContainers, "section indexes");
      if (newContainers.length) {
        setReportItems((prevContainers) => {
          prevContainers.splice(
            startIndex + 1,
            endIndex - startIndex,
            ...newContainers
          );
          return prevContainers.map((con) => ({ ...con, loading: false }));
        });
      } else {
        setReportItems((prevContainers) =>
          prevContainers.map((con, index) =>
            index >= startIndex && index <= endIndex
              ? { ...con, loading: true }
              : { ...con, loading: false }
          )
        );
      }
    },
    []
  );

  const onAddNewItem = useCallback((item: IDNDItem) => {
    setReportItems((prevContainers) =>
      prevContainers.map((c) =>
        item.parentId === c.id
          ? {
              ...c,
              children: addElementsRightAfter(c.children, item.id, [
                {
                  id: getNewId(),
                  parentId: c.id,
                  type: "ITEM",
                  value: {
                    tag: "p",
                    content: "<p></p>",
                  },
                },
              ]),
            }
          : c
      )
    );
  }, []);

  const onRemoveItem = useCallback((item: IDNDItem) => {
    setReportItems((prevContainers) =>
      prevContainers.map((c) =>
        item.parentId === c.id
          ? {
              ...c,
              children: c.children.filter((it) => it.id !== item.id),
            }
          : c
      )
    );
  }, []);

  // Report Management
  const onPrint = useCallback(() => {
    showExportModal(true);
  }, []);

  const onSendEmail = useCallback(() => {
    showEmailModal(true);
  }, []);

  const onSaveReport = useCallback(() => {
    if (!printRef.current) return;
    const container = document.createElement("div");
    container.appendChild(printRef.current.cloneNode(true));
    const removeItems = container.querySelectorAll(".chart, .no-save");
    for (const item of removeItems) {
      item.remove();
    }
    saveReport({
      reportId,
      content: container.firstElementChild!.innerHTML,
      custom: [],
    });
  }, [saveReport, reportId]);

  // const onUploadedFiles = useCallback((type: string, files: File[]) => {
  //   setUploadedFiles((prev) => ({ ...prev, [type]: files }));
  // }, []);

  const onRerunReport = async () => {
    if (uploadedFiles && uploadedFiles["file"] && unitName) {
      await ingestFiles({
        setupId,
        companyName: unitName,
        analysisType: "financial_diligence",
        files: uploadedFiles["file"],
      });
    }

    regenerateReport({
      reportId,
      setupId,
      queryType: reportName, // reportType!,
      template: REPORTS_DICT[reportName!].template,
    });
  };

  useEffect(() => {
    if (isSaved) {
      toast.success("The report is saved successfully.");
    }
  }, [isSaved]);

  return (
    <>
      {isReadOnly ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            overflowY: "auto",
            flex: 1,
            py: 2,
          }}
        >
          <Box
            ref={printRef}
            sx={{
              maxWidth: "8.8in",
              bgcolor: "white",
              color: "black",
              p: 6,
            }}
          >
            <DndProvider backend={HTML5Backend}>
              <DragLayer />
              {reportItems.map((item) => (
                <Container
                  key={item.id}
                  loading={item.loading}
                  containers={reportItems}
                  setupId={setupId}
                  unitName={unitName!}
                  id={item.id}
                  type={item.type}
                  children={item.children}
                  onExchangeItem={onExchangeItem}
                  onMoveContainer={onMoveContainer}
                  onChangeChildOrder={onChangeChildOrder}
                  isShowQuestion={isShowQuestion}
                  onSectionContentChanged={onSectionContentChanged}
                  onAddNew={() => onAddNewContainer(item)}
                  onRemove={() => onRemoveContainer(item)}
                  onAddNewItem={onAddNewItem}
                  onRemoveItem={onRemoveItem}
                  onItemValueChanged={onItemValueChanged}
                  onCitationLink={onCitationLink}
                />
              ))}
            </DndProvider>
          </Box>
        </Box>
      ) : (
        <SplitContainer
          sizes={[70, 30]}
          leftPanel={
            <Box
              sx={{
                display: "flex",
                borderRadius: 2,
              }}
            >
              <ReportDrawer
                setupId={setupId}
                isShowQuestion={isShowQuestion}
                items={reportItems}
                onSwitchMode={(mode) => setIsShowQuestion(mode)}
                onRemoveFiles={onRemoveFiles}
                // onUploadedFiles={onUploadedFiles}
                onRerunReport={onRerunReport}
                onSave={onSaveReport}
                onPrint={onPrint}
                onSendEmail={onSendEmail}
                uploadedFiles={uploadedFiles}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  overflowY: "auto",
                  flex: 1,
                  py: 2,
                }}
              >
                <Box
                  ref={printRef}
                  sx={{
                    maxWidth: "8.8in",
                    bgcolor: "white",
                    color: "black",
                    p: 6,
                  }}
                >
                  <DndProvider backend={HTML5Backend}>
                    <DragLayer />
                    {reportItems.map((item) => (
                      <Container
                        key={item.id}
                        loading={item.loading}
                        containers={reportItems}
                        setupId={setupId}
                        unitName={unitName!}
                        id={item.id}
                        type={item.type}
                        children={item.children}
                        onExchangeItem={onExchangeItem}
                        onMoveContainer={onMoveContainer}
                        onChangeChildOrder={onChangeChildOrder}
                        isShowQuestion={isShowQuestion}
                        onAddNew={() => onAddNewContainer(item)}
                        onRemove={() => onRemoveContainer(item)}
                        onAddNewItem={onAddNewItem}
                        onRemoveItem={onRemoveItem}
                        onItemValueChanged={onItemValueChanged}
                        onSectionContentChanged={onSectionContentChanged}
                        onCitationLink={onCitationLink}
                      />
                    ))}
                  </DndProvider>
                </Box>
              </Box>
            </Box>
          }
          rightPanel={
            unitName ? (
              <ChatPanel
                graph_id={setupId}
                companyName={unitName}
                analysis_type={analysisType}
                onAddToReport={onAddToReport}
                filenames={[]}
                onJumpTo={onCitationLink}
              />
            ) : (
              <></>
            )
          }
        />
      )}

      {citationData ? (
        <CitationModal
          open={!!citationData}
          onClose={() => setCitationData(undefined)}
          data={{
            ...citationData,
            graph_id: setupId!,
            analysis_type: "financial_diligence",
          }}
        />
      ) : null}
      {exportModal && (
        <ExportModal
          open={exportModal}
          exportContent={printRef.current!}
          onClose={() => showExportModal(false)}
        />
      )}
      {emailModal && (
        <SendEmailModal
          open={emailModal}
          onClose={() => showEmailModal(false)}
          element={printRef.current!}
          filename={`${reportName}.pdf`}
        />
      )}
    </>
  );
};
