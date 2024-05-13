import { TChat, TColumn, TRow } from "./types";

export interface IMenuItem {
  content?: React.ReactNode;
  id: string | "divider";
  clickable?: boolean;
}

export interface ICard {
  id: string;
  thumbnail?: string;
  logo?: string;
  label: string;
  updatedAt?: string;
}

export interface ITemplateNode {
  setupId?: number;
  setupName?: string;
  db_node_id?: number;
  graph_node_id?: string;
  template_node_id: number; // template_node_id
  category_id: number;
  name: string; // this is a node template
  description: string;
  unitName?: string;
  label: string;
  attributes?: Record<string, any>;
  properties: Record<string, any>;
  categoryDict?: Record<string, ITemplateNode[]>;
}

export interface IAttributes {
  graph_node_id: string;
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  positionAbsolute: {
    x: number;
    y: number;
  };
}

export interface INode extends IAttributes {
  id: string; // = graph_node_id
  type?: string;
  data: ITemplateNode;
}
export interface IDBNode {
  temp_id: string;
  id?: number;
  template_node_id: number; // = ITemplateNode.node_id
  attributes: IAttributes; // for react workflow
  properties?: Record<string, any>; // for template node: llm model, temperature etc..
}

export interface IEdge {
  id: string | number;
  source: string;
  sourceHandle: string;
  target: string;
  targetHandle: string;
}

export interface IDBEdge {
  id?: string | number;
  start_node_temp_id: string;
  end_node_temp_id: string;
  start_node_id?: number;
  end_node_id?: number;
}

export interface ISetup {
  id?: number;
  name?: string;
  nodes: IDBNode[];
  edges: IDBEdge[];
  description?: string;
}

export interface IDropdownItem {
  value: string;
  label: string;
  children?: IDropdownItem[];
}

export interface IChart {
  title: string;
  categories: (string | number)[];
  series: {
    name: string;
    data: number[][] | number[];
  }[];
}

export interface ICategoryCard {
  imgUrl?: string;
  name: string;
  value: string | number;
}

export interface IContent {
  contentType: "text" | "chart" | "table" | "card" | "list";
  text?: string;
  chartType?: string;
  title?: string;
  categories?: string[]; // or columns
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  cards?: ICategoryCard[];
  rows?: (number | string)[][];
}

export interface IChat {
  type: TChat;
  contents: string;
}

export interface IReportItemValue {
  tag: string;
  content: string;
  vizType?: string; // "table" | "bar" | "column" etc..
  axis?: string; // json stringified
}

export type IReportItemMetadata = {
  rows: TRow[];
  columns: TColumn[];
  axis: {
    x: string;
    y: string[];
  };
};
export type IAxis = Required<IReportItemMetadata>["axis"];
export type IAxisKey = keyof IAxis;

export type TDNDItemType = "ITEM" | "CONTAINER";

interface IDNDItemBase {
  id: string;
  type: TDNDItemType;
}
export interface IDNDContainer extends IDNDItemBase {
  children: IDNDItem[];
}

export interface IDNDItem extends IDNDItemBase {
  parentId: string;
  value: IReportItemValue;
}

export type TTreeData = {
  name: string;
  template?: string;
  isUnChecked?: boolean;
  isLoading?: boolean;
  isSuccess?: boolean;
  isFailed?: boolean;
};

export interface ITemplateItem extends TTreeData {
  index: string;
  children?: ITemplateItem[];
}

export interface ITemplateItemPure
  extends Pick<TTreeData, "name" | "template" | "isUnChecked"> {
  children?: ITemplateItemPure[];
}

export interface ITemplate {
  title: string;
  data: ITemplateItemPure[];
  recursion?: number;
  default_llm?: "OpenAI" | "Anthropic";
}
