import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

export default StyledTableRow;
