import {
  INode,
  IDBNode,
  IEdge,
  IDBEdge,
  ITemplateNode,
} from "../../../shared/models/interfaces";
// {
//   "width": 320,
//   "height": 251,
//   "id": "Document_1",
//   "type": "custom",
//   "position": {
//       "x": 58,
//       "y": 192
//   },
//   "data": {
//       "node_id": 1,
//       "name": "Document",
//       "description": "Document uploader",
//       "label": "Document uploader",
//       "properties": {
//           "filename": "week2",
//           "filepath": "week2",
//           "filetype": ""
//       }
//   },
//   "selected": false,
//   "dragging": false,
//   "positionAbsolute": {
//       "x": 58,
//       "y": 192
//   }
// }
/**
  shcemas.py
  ---------------------
  temp_id: str
  template_node_id: int
  attributes: dict
  properties: dict
 */
export const convert2DBNode = (node: INode): IDBNode => {
  return {
    temp_id: node.id,
    template_node_id: node.data.template_node_id,
    attributes: {
      graph_node_id: node.id,
      position: node.position,
      width: node.width,
      height: node.height,
      positionAbsolute: node.positionAbsolute,
    },
    properties: node.data.properties || {},
  };
};

export const convert2Node = (
  unitName: string,
  node: IDBNode,
  categoryDict: Record<string, ITemplateNode[]>,
  setupId?: number,
  setupName?: string
): INode => {
  const templateNodes = Object.values(categoryDict).reduce((pv, cv) => {
    pv.push(...cv);
    return pv;
  }, []);
  const tempNode = templateNodes.find(
    (tnode) => tnode.template_node_id === node.template_node_id
  );
  return {
    id: node.attributes.graph_node_id,
    type: "custom",
    graph_node_id: node.attributes.graph_node_id,
    position: node.attributes.position,
    width: node.attributes.width,
    height: node.attributes.height,
    positionAbsolute: node.attributes.positionAbsolute,
    data: {
      ...tempNode!,
      ...(!!setupId && { setupId }),
      ...(!!setupName && { setupName }),
      unitName,
      categoryDict,
      graph_node_id: node.attributes.graph_node_id,
      db_node_id: node.id,
      properties: node.properties!,
    },
  };
};

// {
// 	"source": "Document_1",
// 	"sourceHandle": "Document_1_source_handler",
// 	"target": "OpenAI_1",
// 	"targetHandle": "OpenAI_1_target_handler",
// 	"animated": true,
// 	"markerEnd": {
// 			"type": "arrowclosed"
// 	},
// 	"id": "reactflow__edge-Document_1Document_1_source_handler-OpenAI_1OpenAI_1_target_handler"
// }

export const convert2DBEdge = (edge: IEdge): IDBEdge => {
  return {
    start_node_temp_id: edge.source,
    end_node_temp_id: edge.target,
  };
};

export const convert2Edge = (edge: IDBEdge, nodes: IDBNode[]): IEdge => {
  const sourceNode = nodes.find((node) => node.id === edge.start_node_id);
  const targetNode = nodes.find((node) => node.id === edge.end_node_id);
  return {
    id: edge.id!,
    source: sourceNode!.attributes.graph_node_id,
    sourceHandle: sourceNode!.attributes.graph_node_id + "_source_handler",
    target: targetNode!.attributes.graph_node_id,
    targetHandle: targetNode!.attributes.graph_node_id + "_target_handler",
  };
};

export const isValidGraph = (nodes: INode[], edges: IEdge[]) => {
  if (!nodes.length || !edges.length) return false;

  const nodesIds = nodes.map((node) => node.graph_node_id);
  const sources = edges.map((edge) => edge.source);
  const targets = edges.map((edge) => edge.target);
  return nodesIds.every((id) => [...sources, ...targets].includes(id));
};
