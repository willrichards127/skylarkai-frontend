import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { VDRCard } from "./components/VDRCard";
import { useCallback, useEffect, useState } from "react";
import { NewVDRModal } from "./components/NewVDRModal";
import { SendEmailModal } from "../../../components/modals/SendEmailModal";
import { useGetVDRsQuery } from "../../../redux/services/vdrApi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useNotification } from "../../../shared/socket/NotificationProvider";

export default function VDRsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");

  const { newIngesting } = useNotification();
  const [emailModal, showEmailModal] = useState<boolean>(false);
  const [newVDRModal, showNewVDRModal] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGetVDRsQuery({
    unitId: +params.unitId!,
  });

  useEffect(() => {
    if (newIngesting) {
      refetch();
    }
  }, [newIngesting]);

  const onShowEmailTemplate = useCallback(() => {
    showEmailModal(true);
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 2 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Virtual Data Rooms
        </Typography>
        <Box mr="auto" />
        <Button variant="contained" onClick={onShowEmailTemplate}>
          Send Email
        </Button>
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
                  onCard={() =>
                    navigate(
                      `/portal/vdrs/${vdr.id}?unitId=${params.unitId}&unitName=${unitName}&type=${type}`
                    )
                  }
                />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Box>
      {newVDRModal && (
        <NewVDRModal
          open={newVDRModal}
          unitId={params.unitId!}
          type={type!}
          unitName={unitName!}
          onClose={() => showNewVDRModal(false)}
        />
      )}
      {emailModal && (
        <SendEmailModal
          open={emailModal}
          initialTitle="We need following documents"
          initialContent="Hello there, I would required following documents:"
          onClose={() => showEmailModal(false)}
        />
      )}
    </Box>
  );
}
