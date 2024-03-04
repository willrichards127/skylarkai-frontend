export type TChartType = "bar" | "line" | "area" | "pie" | "donut";

export type TChat = "question" | "answer";

export type TColumn = {
  label: string;
  type: string; // 'category' | 'numeric'
  unit?: string;
  isUnChecked?: boolean;
};

export type TRow = {
  [key in string]: string;
} & { isUnChecked?: boolean };
