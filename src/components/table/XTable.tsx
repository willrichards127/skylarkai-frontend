import { ReactNode } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import XTableHeader from "./XTableHeader";
import XTableBody from "./XTableBody";

import { TColumn, TOrder } from "./model";

export type TXTableProps<T> = {
  loading?: boolean;
  error?: boolean;
  columns: TColumn[];
  rows: T[];
  maxHeight?: number;
  size?: "small" | "medium";
  onSort?: (columnId: string, order: TOrder) => void;
  loadingRenderer?: ReactNode;
  noDataRenderer?: ReactNode;
  hasHeader?: boolean;
  onSelectRow?: (row: T) => void;
};

export const XTable = <T extends Record<string, unknown>>({
  columns = [],
  rows = [],
  size = "medium",
  hasHeader = true,
  maxHeight,
  onSort,
  onSelectRow,
  ...rest
}: TXTableProps<T>) => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          position: "relative",
          overflowX: "auto",
          borderTop: "1px solid",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          bgcolor: "#000D1C",
          borderColor: "secondary.main",
          borderRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          maxHeight: maxHeight || "auto",
          overflowY: maxHeight ? "auto" : "hidden",
        }}
      >
        <Table stickyHeader size={size}>
          {hasHeader && <XTableHeader columns={columns} onSort={onSort} />}
          <XTableBody
            columns={columns}
            rows={rows}
            onSelectRow={onSelectRow}
            {...rest}
          />
        </Table>
      </TableContainer>
    </>
  );
};
