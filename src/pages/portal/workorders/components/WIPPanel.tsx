import { memo } from "react";
import { Box } from "@mui/material";
import { WorkOrderHeader } from "./WorkOrderHeader";

const WIPPanel = memo(
  ({
    workOrderName,
    companyName,
  }: {
    companyName: string;
    workOrderName: string;
  }) => {
    return (
      <Box sx={{ height: "100%", bgcolor: "secondary.dark" }}>
        <WorkOrderHeader
          orderName={workOrderName}
          companyName={companyName}
          viewMode="wip"
        />
        <Box
          sx={{
            px: 8,
            py: 4,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "calc(100% - 200px)",
          }}
        >
          <img
            src="/wip_back.png"
            width={720}
            height={480}
            alt="WIP background"
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
            }}
          />
          <Box textAlign="center">
            <img
              src="/wip_icon.png"
              width={150}
              height={178}
              alt="WIP icon"
            />
            <Box my={4}>
              Our team is working on the Report. <br />
              Please wait for sometime. We will notify you.
            </Box>
            <Box fontWeight="bold">Work Order ID: {workOrderName}</Box>
          </Box>
        </Box>
      </Box>
    );
  }
);

WIPPanel.displayName = "WIPPanel";
export default WIPPanel;
