/* eslint-disable @typescript-eslint/no-explicit-any */
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import StyledTableRow from "./StyledTableRow";
import StyledTableCell from "./StyledTableCell";
import { TXTableProps } from "./XTable";

type TXTableBodyProps<T> = Partial<TXTableProps<T>>;

const XTableBody = <T extends unknown & { selected?: boolean }>({
  loading,
  error,
  columns = [],
  rows = [],
  onSelectRow,
  loadingRenderer,
  noDataRenderer,
}: TXTableBodyProps<T>) => {
  if (loading) {
    return (
      <TableBody sx={{ position: "relative" }}>
        <TableRow>
          <TableCell colSpan={columns.length}>
            {loadingRenderer ? (
              loadingRenderer
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <CircularProgress />
              </Box>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
  if (error || !rows.length) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length}>
            {noDataRenderer ? (
              noDataRenderer
            ) : (
              <Box sx={{ textAlign: "center", color: "grey" }}>
                No data available
              </Box>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows.map((row, rowIndex) => (
        <StyledTableRow
          key={rowIndex}
          tabIndex={-1}
          selected={!!row.selected}
          onClick={() => {
            if (onSelectRow) {
              onSelectRow(row);
            }
          }}
        >
          {columns.map((column) => (
            <StyledTableCell
              key={column.id}
              padding="none"
              align={column.align || "center"}
              style={{
                width: column.width || "auto",
                position: "relative",
              }}
            >
              {column.cellRenderer
                ? column.cellRenderer({ column, row })
                : (row as any)[column.id]}
            </StyledTableCell>
          ))}
        </StyledTableRow>
      ))}
    </TableBody>
  );
};

export default XTableBody;
