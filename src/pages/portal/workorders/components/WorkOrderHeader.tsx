import { memo } from "react";
import { Box, Avatar, Typography, Button, colors } from "@mui/material";

export const WorkOrderHeader = memo(
  ({
    orderName,
    logo,
    companyName,
    viewMode,
    isLoading = false,
    configDate = "",
    onNextStep,
  }: {
    orderName: string;
    logo?: string;
    companyName: string;
    viewMode: "edit" | "summary" | "wip" | "completed";
    isLoading?: boolean;
    configDate?: string;
    onNextStep?: () => void;
  }) => {
    return (
      <Box
        sx={{
          width: "100%",
          height: 200,
          bgcolor: "black",
          px: 8,
          py: 4,
        }}
      >
        <Typography variant="body1" fontWeight="bold" mb={3}>
          Work Order ID: {orderName}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              bgcolor: colors.blue[500],
              border: "4px solid white",
              fontSize: 48,
            }}
            src={logo}
            alt={companyName}
          >
            {companyName!.substring(0, 1)}
          </Avatar>
          <Box sx={{ fontWeight: "bold", fontSize: 20 }}>{companyName}</Box>

          <Box mr="auto" />
          {!isLoading && viewMode === "completed" && (
            <Box>
              <Box>Last Configuration:</Box>
              <Box fontWeight="bold">
                {new Date(configDate).toLocaleString()}
              </Box>
            </Box>
          )}

          {["edit", "summary"].includes(viewMode) && (
            <Button
              variant={viewMode === "edit" ? "outlined" : "contained"}
              sx={{ minWidth: 140 }}
              onClick={onNextStep}
              disabled={isLoading}
            >
              {viewMode === "edit" ? "Next" : "Submit Work Order"}
            </Button>
          )}
        </Box>
      </Box>
    );
  }
);

WorkOrderHeader.displayName = "WorkOrderHeader";
