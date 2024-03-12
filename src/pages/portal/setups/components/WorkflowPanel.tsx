import React, {
  memo,
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import ReactFlow, {
  addEdge,
  MarkerType,
  useNodesState,
  useEdgesState,
  updateEdge,
  Controls,
  Connection,
  Edge,
  ReactFlowInstance,
} from "reactflow";
import { XIconButton } from "../../../../components/buttons/XIconButton";
import CustomNode from "./custom-nodes/CustomNode";
import {
  DeleteIcon,
  // DeployIcon,
  // ImportIcon,
  PlayIcon,
  UploadIcon,
} from "../../../../components/Svgs";
import { ExportModal } from "./ExportModal/ExportModal";
import { SaveSetupModal } from "./SaveSetupModal";
import {
  IEdge,
  INode,
  ISetup,
  ITemplateNode,
} from "../../../../shared/models/interfaces";
import { ACCEPT_TEMPLATE_NODE_DICT } from "../../../../shared/models/constants";
import {
  convert2DBNode,
  convert2DBEdge,
  convert2Node,
  convert2Edge,
  isValidGraph,
} from "../utils";
import "reactflow/dist/style.css";
import {
  useGetSetupQuery,
  useSaveSetupMutation,
  useExecuteGraphMutation,
} from "../../../../redux/services/setupApi";

const nodeTypes = {
  custom: CustomNode,
};

const WorkflowPanel = memo(
  ({
    setupId,
    categoryDict,
  }: {
    setupId: string;
    categoryDict: Record<string, ITemplateNode[]>;
  }) => {
    const isNew = setupId === "new";
    const navigate = useNavigate();
    const { data: setup, isFetching } = useGetSetupQuery(
      { setupId: +setupId },
      {
        skip: isNew,
      }
    );
    const [saveSetup, { isLoading: isLoadingSaveSetup, data: savedData }] =
      useSaveSetupMutation();

    const [
      executeGraph,
      { isLoading: isLoadingExecuteGraph, data: executedData },
    ] = useExecuteGraphMutation();

    const reactFlowWrapper = useRef<HTMLDivElement>(null);
    const edgeUpdateSuccessful = useRef(true);
    const setupRef = useRef<{
      id?: number;
      name?: string;
    }>({});

    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] =
      useState<ReactFlowInstance<any, any>>();
    const [deployModal, showDeployModal] = useState<boolean>(false);
    const [saveSetupModal, showSaveSetupModal] = useState<boolean>(false);

    const onConnect = useCallback(
      (params: Connection) => {
        const sourceNode = nodes.find(({ id }) => id === params.source);
        const targetNode = nodes.find(({ id }) => id === params.target);

        if (!targetNode || !ACCEPT_TEMPLATE_NODE_DICT[targetNode.data.name])
          return;

        if (
          ACCEPT_TEMPLATE_NODE_DICT[targetNode.data.name].some(
            (accept: string) => accept.includes(sourceNode!.data.name)
          )
        ) {
          setEdges((eds) =>
            addEdge(
              {
                ...params,
                animated: true,
                markerEnd: {
                  type: MarkerType.ArrowClosed,
                },
              },
              eds
            )
          );
        }
      },
      [setEdges, nodes]
    );

    const onEdgeUpdateStart = useCallback(() => {
      edgeUpdateSuccessful.current = false;
    }, []);

    const onEdgeUpdate = useCallback(
      (oldEdge: Edge, newConnection: Connection) => {
        edgeUpdateSuccessful.current = true;
        setEdges((els) => updateEdge(oldEdge, newConnection, els));
      },
      [setEdges]
    );

    const onEdgeUpdateEnd = useCallback(
      (_: MouseEvent | TouchEvent, edge: Edge) => {
        if (!edgeUpdateSuccessful.current) {
          setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }
        edgeUpdateSuccessful.current = true;
      },
      [setEdges]
    );

    const onInit = useCallback((instance: ReactFlowInstance<any, any>) => {
      setReactFlowInstance(instance);
    }, []);

    const onDragOver = useCallback(
      (event: React.DragEvent<HTMLDivElement> | undefined) => {
        if (!event) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      },
      []
    );

    const onDrop = useCallback(
      (event: React.DragEvent<HTMLDivElement> | undefined) => {
        if (!event) return;
        event.preventDefault();
        if (!reactFlowWrapper.current) return;
        const reactFlowBounds =
          reactFlowWrapper.current.getBoundingClientRect();
        const stringifiedDndItem = event.dataTransfer.getData(
          "application/reactflow"
        );

        // check if the dropped element is valid
        if (!stringifiedDndItem) {
          return;
        }

        const dndItem: ITemplateNode = JSON.parse(stringifiedDndItem);
        if (!reactFlowInstance) return;
        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });
        setNodes((prev) => {
          const order =
            prev.filter(
              (node) => node.data.name === dndItem.name // name is node type
            ).length + 1;
          const graph_node_id = `${dndItem.name}_${order}`;

          return prev.concat({
            id: graph_node_id,
            type: "custom",
            position,
            data: {
              ...dndItem,
              setupId,
              setupName: setupRef.current.name,
              graph_node_id,
              categoryDict,
            },
          });
        });
      },
      [reactFlowInstance, setupId, categoryDict, setNodes]
    );
    const onExport = useCallback(() => {
      showDeployModal(true);
    }, []);

    const onExecute = useCallback(() => {
      const dbNodes = nodes.map((node) => convert2DBNode(node as INode));
      const dbEdges = edges.map((edge) => convert2DBEdge(edge as IEdge));
      executeGraph({
        setup: {
          id: +setupRef.current.id!,
          name: setupRef.current.name!,
          nodes: dbNodes,
          edges: dbEdges,
        },
        analysisType: "financial_diligence",
      });
    }, [executeGraph, nodes, edges]);

    const onSaveSetup = useCallback(() => {
      showSaveSetupModal(true);
    }, []);

    const onSaveName = useCallback(
      (newSetupName: string) => {
        const dbNodes = nodes.map((node) => convert2DBNode(node as INode));
        const dbEdges = edges.map((edge) => convert2DBEdge(edge as IEdge));
        saveSetup({
          setupId: setupRef.current.id,
          setup: {
            name: newSetupName,
            nodes: dbNodes,
            edges: dbEdges,
          },
        });
      },
      [saveSetup, nodes, edges]
    );

    const updateSetupWithLoadedData = useCallback(
      (loadedSetup: ISetup) => {
        setupRef.current = {
          id: loadedSetup.id,
          name: loadedSetup.name,
        };
        const loadedNodes = loadedSetup.nodes.map((node) =>
          convert2Node(node, categoryDict, +loadedSetup.id!, loadedSetup.name)
        );
        const loadedEdges = loadedSetup.edges.map((edge) =>
          convert2Edge(edge, loadedSetup.nodes)
        );

        setNodes(loadedNodes);
        setEdges(loadedEdges as Edge<any>[]);
      },
      [categoryDict, setNodes, setEdges]
    );
    /** FIXME: React Navigate */
    useEffect(() => {
      if (isLoadingSaveSetup || !savedData) return;
      if (isNew) {
        navigate(`/portal/setups/${savedData.id}`);
      } else {
        updateSetupWithLoadedData(savedData);
      }
    }, [
      updateSetupWithLoadedData,
      isLoadingSaveSetup,
      isNew,
      savedData,
      navigate,
    ]);

    useEffect(() => {
      if (isFetching || !setup) return;
      updateSetupWithLoadedData(setup);
    }, [updateSetupWithLoadedData, setup, isFetching]);

    useEffect(() => {
      if (isLoadingExecuteGraph || !executedData) return;
      updateSetupWithLoadedData(executedData);
    }, [updateSetupWithLoadedData, isLoadingExecuteGraph, executedData]);

    const isValid = useMemo(
      () => isValidGraph(nodes as any, edges as any),
      [nodes, edges]
    );

    return (
      <Box ref={reactFlowWrapper} sx={{ flex: 1, position: "relative" }}>
        <Backdrop
          sx={{
            textAlign: "center",
            p: 4,
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={isFetching || isLoadingSaveSetup || isLoadingExecuteGraph}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onEdgeUpdate={onEdgeUpdate}
          onEdgeUpdateStart={onEdgeUpdateStart}
          onEdgeUpdateEnd={onEdgeUpdateEnd}
          onConnect={onConnect}
          onInit={onInit}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView={false}
        >
          <Controls />
        </ReactFlow>
        <Box sx={{ position: "absolute", top: 16, left: 16 }}>
          {!isFetching && (
            <Typography variant="h6" fontWeight="bold">
              {isNew ? "Untitled" : savedData?.name || setup!.name}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 24,
            display: "flex",
            gap: 1.2,
          }}
        >
          <XIconButton variant="outlined" startIcon={<DeleteIcon />} disabled />

          <XIconButton
            variant="contained"
            startIcon={<PlayIcon />}
            isNeutral
            disabled={isNew || !isValid}
            onClick={onExecute}
          />
          {/* <XIconButton
						variant='contained'
						startIcon={<DeployIcon />}
						size='small'
						isNeutral
						disabled
					/> */}
          <XIconButton
            variant="contained"
            startIcon={<UploadIcon />}
            size="small"
            isNeutral
            disabled={!setup || !setup?.id || !isValid}
            onClick={onExport}
          />
          {/* <XIconButton
						variant='contained'
						startIcon={<ImportIcon />}
						size='small'
						isNeutral
						disabled
					/> */}
          <Button
            variant="contained"
            // disabled={!nodes.length || !edges.length}
            onClick={onSaveSetup}
          >
            Save Setup
          </Button>
        </Box>
        {deployModal && (
          <ExportModal
            setupId={setup!.id!}
            setupName={setup!.name!}
            open={deployModal}
            onClose={() => showDeployModal(false)}
          />
        )}
        {saveSetupModal && (
          <SaveSetupModal
            existingSetupName={setupRef.current.name}
            open={saveSetupModal}
            onClose={() => showSaveSetupModal(false)}
            onSaveName={onSaveName}
          />
        )}
      </Box>
    );
  }
);

WorkflowPanel.displayName = "WorkflowPanel";

export default WorkflowPanel;
