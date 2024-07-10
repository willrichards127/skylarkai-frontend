import { Box } from "@mui/material";
import ReportsContainer from "./components/ReportsContainer";

export default function ReportsPage({ reportType }: { reportType: number }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ReportsContainer reportType={reportType} />
    </Box>
  );
}
