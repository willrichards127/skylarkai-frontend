/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { visuallyHidden } from "@mui/utils";
import StyledTableCell from "./StyledTableCell";
import { TXTableProps } from "./XTable";
import { TOrder } from "./model";

type TXTableHeaderProps<T> = Partial<TXTableProps<T>>;

const XTableHeader = <T extends unknown>(props: TXTableHeaderProps<T>) => {
  const { columns = [], onSort } = props;
  const [orderBy, setOrderBy] = useState(columns[0].id);
  const [order, setOrder] = useState<TOrder>("asc");
  const onHeadCell = useCallback(
    (columnId: string) => () => {
      const newOrder =
        orderBy === columnId ? (order === "asc" ? "desc" : "asc") : "asc";
      setOrder(newOrder);
      setOrderBy(columnId);

      onSort?.(columnId, newOrder);
    },
    [orderBy, order, onSort]
  );

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.align || "center"}
            padding="none"
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={onHeadCell(headCell.id)}
                sx={{
                  transform: "translate(10px, 0)",
                  "&:hover": {
                    color: "white",
                  },
                  "&.Mui-active .MuiTableSortLabel-icon": {
                    color: "white",
                  },
                }}
                IconComponent={ArrowDropDownIcon}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default XTableHeader;
