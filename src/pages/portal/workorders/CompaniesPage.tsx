import { Box } from "@mui/material";
import CompaniesContainer from "./components/CompaniesContainer";

export default function CompaniesPage() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 6 }}
    >
      <CompaniesContainer />
    </Box>
  );
}