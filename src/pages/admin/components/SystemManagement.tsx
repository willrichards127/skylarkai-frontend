import { useState, useCallback } from "react";
import {
  // colors,
  Box,
  // Button,
  GridSize,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

const durations = [
  {
    label: "Today",
    value: 0,
  },
  {
    label: "Yesterday",
    value: 1,
  },
  {
    label: "Last 7 Days",
    value: 7,
  },
  {
    label: "Last 30 Days",
    value: 30,
  },
  {
    label: "Last 60 Days",
    value: 60,
  },
  {
    label: "Last 90 Days",
    value: 90,
  },
];

const GridItem = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
}: {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  children: React.ReactNode;
}) => {
  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Box sx={{ p: 2, borderRadius: 2, bgcolor: "black" }}>{children}</Box>
    </Grid>
  );
};

export const SystemManagement = () => {
  const [duration, setDuration] = useState<number>(7);

  const onChangeDuration = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDuration(+e.target.value),
    []
  );

  return (
    <Box sx={{ height: "100%", bgcolor: "secondary.dark" }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Box mr="auto" />
        <TextField
          size="small"
          label="Select Duration"
          select
          value={duration}
          onChange={onChangeDuration}
          sx={{ minWidth: 320 }}
        >
          {durations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ px: 2 }}>
        <Grid container spacing={2}>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Typography variant="body2">Total Companies</Typography>
            <Typography variant="h4">8</Typography>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Typography variant="body2">Total Sectors</Typography>
            <Typography variant="h4">8</Typography>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={2}>
            <Typography variant="body2">Total Reports</Typography>
            <Typography variant="h4">7</Typography>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={2}>
            <Typography variant="body2">Total SLMs</Typography>
            <Typography variant="h4">7</Typography>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={2}>
            <Typography variant="body2">Total VDRs</Typography>
            <Typography variant="h4">7</Typography>
          </GridItem>
          {/* <Grid item xs={4} sx={{ height: "100%" }}>
            <Box sx={{ p: 2, borderRadius: 2, bgcolor: "black", height: 570 }}>
              <Box fontWeight="bold">Support Tickets</Box>
              <Box sx={{ height: 480, overflowY: "auto", p: 2 }}>
                {supportTickets.map((ticket) => (
                  <Box
                    key={ticket.id}
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      py: 1,
                      fontSize: 13,
                    }}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: 16,
                        color:
                          ticket.status === 1
                            ? "red"
                            : ticket.status === 2
                            ? "green"
                            : "blue",
                      }}
                    />
                    <Box>{ticket.name}</Box>
                    <Box>{ticket.created_at}</Box>
                    <Box px={2}>{ticket.created_by}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid> */}
        </Grid>
        <Box pt={4}>
          <Box fontWeight="bold" mb={2}>
            Generated Reports:
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
