import { Box } from "@mui/material";
import { NotAvblIcon } from "./Svgs";

export const NoAvailable = ({ desc }: { desc?: string }) => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <NotAvblIcon />
      <Box color="grey" p={2}>
        {desc || "No data available"}
      </Box>
    </Box>
  );
};
