import React, {
  memo,
  useRef,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
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
  Connection,
  Edge,
  ReactFlowInstance,
  Controls,
} from "reactflow";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { XIconButton } from "../../../../components/buttons/XIconButton";
import CustomNode from "./custom-nodes/CustomNode";
import { DeleteIcon, PlayIcon } from "../../../../components/Svgs";
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
} from "../../../../redux/services/setupApi";
import { ExecutionModal } from "./ExecutionModal";

import TemplateNodeData from "../../../../shared/utils/mock/template.json";
import CriteriaNodeData from "../../../../shared/utils/mock/criteria.json";

const nodeTypes = {
  custom: CustomNode,
};

const WorkflowPanel = memo(
  ({ categoryDict }: { categoryDict: Record<string, ITemplateNode[]> }) => {
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams] = useSearchParams();

    const unitId = searchParams.get("unitId");
    const unitName = searchParams.get("unitName");

    const isNew = params.setupId === "new";

    const { data: setup, isFetching } = useGetSetupQuery(
      { setupId: +params.setupId! },
      {
        skip: isNew,
        refetchOnMountOrArgChange: true,
      }
    );

    const [saveSetup, { isLoading: isLoadingSaveSetup, data: savedData }] =
      useSaveSetupMutation();

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
    const [progressModal, showProgressModal] = useState<boolean>(false);

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

        // Temporary
        if (dndItem.template_node_id === 17) {
          dndItem.properties = {
            ...dndItem.properties,
            text: JSON.stringify(TemplateNodeData),
          };
        }

        if (dndItem.template_node_id === 48) {
          dndItem.properties = {
            ...dndItem.properties,
            json: CriteriaNodeData,
          };
        }
        //
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
              setupId: params.setupId,
              setupName: setupRef.current.name,
              unitName,
              graph_node_id,
              categoryDict,
            },
          });
        });
      },
      [reactFlowInstance, params.setupId, unitName, categoryDict, setNodes]
    );

    const onExecute = useCallback(async () => {
      showProgressModal(true);
    }, []);

    const onSaveSetup = useCallback(() => {
      showSaveSetupModal(true);
    }, []);

    const onSaveName = useCallback(
      (setupName: string) => {
        const dbNodes = nodes.map((node) => convert2DBNode(node as INode));
        const dbEdges = edges.map((edge) => convert2DBEdge(edge as IEdge));
        saveSetup({
          unitId: +unitId!,
          setupId: setupRef.current.id,
          setup: {
            name: setupName,
            nodes: dbNodes,
            edges: dbEdges,
          },
        });
      },
      [saveSetup, unitId, nodes, edges]
    );

    const updateSetupWithLoadedData = useCallback(
      (loadedSetup: ISetup) => {
        setupRef.current = {
          id: loadedSetup.id,
          name: loadedSetup.name,
        };
        const loadedNodes = loadedSetup.nodes.map((node) =>
          convert2Node(
            unitName!,
            node,
            categoryDict,
            +loadedSetup.id!,
            loadedSetup.name
          )
        );
        const loadedEdges = loadedSetup.edges.map((edge) =>
          convert2Edge(edge, loadedSetup.nodes)
        );

        setNodes(loadedNodes);
        setEdges(loadedEdges as Edge<any>[]);
      },
      [categoryDict, unitName, setNodes, setEdges]
    );
    /** FIXME: React Navigate */
    useEffect(() => {
      if (isLoadingSaveSetup || !savedData) return;
      if (isNew) {
        navigate(`/portal/setups/${savedData.id}?unitId=${unitId}&unitName=${unitName}&type=companies`);
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
          open={isFetching || isLoadingSaveSetup}
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
          <Controls position="bottom-right" />
        </ReactFlow>
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            px: 1,
            py: 0.5,
            bgcolor: "rgba(0, 0, 0, 0.4)",
            borderRadius: 1,
          }}
        >
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
          <XIconButton
            variant="contained"
            startIcon={<KeyboardReturnIcon />}
            onClick={() =>
              navigate(
                `/portal/units/${unitId}/setups?unitName=${unitName}&type=companies`
              )
            }
          />
          <XIconButton variant="outlined" startIcon={<DeleteIcon />} disabled />

          <XIconButton
            variant="contained"
            startIcon={<PlayIcon />}
            isNeutral
            disabled={isNew || !isValid}
            onClick={onExecute}
          />
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
        {progressModal ? (
          <ExecutionModal
            open={progressModal}
            setup={{
              id: setup?.id,
              name: savedData?.name || setup?.name,
              nodes: nodes.map((node) => convert2DBNode(node as INode)),
              edges: edges.map((edge) => convert2DBEdge(edge as IEdge)),
            }}
            unitId={+unitId!}
            unitName={unitName!}
            onClose={(setup?: ISetup) => {
              showProgressModal(false);
              if (setup) {
                updateSetupWithLoadedData(setup);
              }
            }}
          />
        ) : null}
      </Box>
    );
  }
);

export default WorkflowPanel;
