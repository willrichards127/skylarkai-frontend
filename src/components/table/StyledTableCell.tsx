import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: '8px 16px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    padding: 8,
  },
}));

export default StyledTableCell;
