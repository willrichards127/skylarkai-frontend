import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { VDRCard } from "./components/VDRCard";
import { useState } from "react";
import { NewVDRModal } from "./components/NewVDRModal";
import { useGetVDRsQuery } from "../../../redux/services/vdrApi";
import { useNavigate } from "react-router-dom";

export default function VDRsPage() {
  const navigate = useNavigate();

  const [newVDRModal, showNewVDRModal] = useState<boolean>(false);
  const { data, isLoading } = useGetVDRsQuery();

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 2 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Virtual Data Rooms
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => showNewVDRModal(true)}
        >
          Add VDR
        </Button>
      </Box>
      <Box
        sx={{
          height: "calc(100% - 64px)",
        }}
      >
        {isLoading ? (
          <Box textAlign="center" p={4}>
            <CircularProgress />
          </Box>
        ) : data ? (
          <Grid container spacing={4}>
            {data.map((vdr) => (
              <Grid key={vdr.id} item xs={12} sm={6} md={4} lg={3}>
                <VDRCard
                  key={vdr.id}
                  {...vdr}
                  onCard={() => navigate(`/portal/vdrs/${vdr.id}`)}
                />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Box>
      {newVDRModal && (
        <NewVDRModal
          open={newVDRModal}
          onClose={() => showNewVDRModal(false)}
        />
      )}
    </Box>
  );
}
