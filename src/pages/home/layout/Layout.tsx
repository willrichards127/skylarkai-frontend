import { Box } from "@mui/material";
import { MainAppBar } from "./MainAppBar";
import { HeaderConfig } from "../../../models/constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <MainAppBar />
      <Box
        sx={{
          height: `calc(100% - ${
            HeaderConfig.mainToolbarHeight + HeaderConfig.subToolbarHeight
          }px)`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
