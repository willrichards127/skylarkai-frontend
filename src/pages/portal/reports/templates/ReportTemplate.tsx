import {
  useCallback,
  useMemo,
  useState,
  ForwardedRef,
  forwardRef,
} from "react";
import { Box } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SplitContainer } from "../../../../components/SplitContainer";
import ChatPanel from "../components/ChatPanel";
import {
  getNewId,
  categoryParser3,
  initializeHtmlResponse,
  // convertCSVToTable,
  // parseTable,
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
    const initialReportItems = useMemo(
      () => categoryParser3(reportContent),
      [reportContent]
    );

    const [isShowQuestion, setIsShowQuestion] = useState<boolean>(false);
    const [uploadedFiles, setUploadedFiles] =
      useState<Record<string, File[]>>();

    const [reportItems, setReportItems] = useState<IDNDContainer[]>(
      initialReportItems
      // .map((item) => ({
      //   ...item,
      //   value: {
      //     ...item.value,
      //     ...(item.value.tag === "table" && {
      //       metadata: { ...parseTable(item.value.content), visual: "table" },
      //     }),
      //   },
      // }))
    );
    console.log(reportItems);

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
        console.log(filename, quote);
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
                      onCitationLink={onCitationLink}
                    />
                  ))}
                </DndProvider>
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
            onJumpTo={onCitationLink}
          />
        }
      />
    );
  }
);
