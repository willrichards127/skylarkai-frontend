import { memo } from "react";
import {
  // Box,
  Stack,
  Drawer,
  Typography,
  Divider,
  // FormControlLabel,
  // Checkbox,
  // TextField,
  // MenuItem,
  // Accordion as MuiAccordion,
  // AccordionSummary as MuiAccordionSummary,
  // AccordionDetails as MuiAccordionDetails,
  // AccordionProps,
  // styled,
  // AccordionSummaryProps,
} from "@mui/material";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
// import PieChartIcon from "@mui/icons-material/PieChart";
// import DonutLargeIcon from "@mui/icons-material/DonutLarge";
// import { XIconButton } from "../../../../../components/buttons/XIconButton";

export const VizDrawer = memo(
  ({
    open,
    // vizType = "bar",
    onClose,
  }: {
    open: boolean;
    onClose: () => void;
    vizType?: string;
  }) => {
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Stack spacing={1} sx={{ width: 400, py: 2 }}>
          <Typography variant="subtitle2" pl={2}>
            Choose Chart Type
          </Typography>
          <Divider />
        </Stack>
        {/* <Box
          p={2}
          sx={{ display: "flex", gap: 2, maxWidth: 280, flexWrap: "wrap" }}
        >
          {VizItems.map((item) => (
            <XIconButton
              key={item.value}
              variant={item.value === visualType ? "contained" : "outlined"}
              startIcon={item.icon}
              size="small"
              onClick={() => onChangeVisualType(item.value)}
            />
          ))}
        </Box> */}
        <Divider />
        Content
      </Drawer>
    );
  }
);
