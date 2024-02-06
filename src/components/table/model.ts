export enum EColumnType {
  ROW_BAR = "row_bar",
  STRING = "string",
  NUMBER = "number",
}

export type TOrder = "asc" | "desc";

export type TColumn = {
  id: string;
  label: string;
  sortable?: boolean | undefined;
  align?: "left" | "center" | "right";
  type?: string;
  cellRenderer?: <T>({
    column,
    row,
  }: {
    column: TColumn;
    row: T;
  }) => React.ReactNode;
  minWidth?: number;
  width?: number;
};
