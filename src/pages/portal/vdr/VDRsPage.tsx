import { Box, Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { VDRCard } from "./components/VDRCard";
import { useCallback, useState } from "react";
import { NewVDRModal } from "./components/NewVDRModal";
import { SendEmailModal } from "../../../components/modals/SendEmailModal";
import TabContainer from "../../../components/TabContainer";
import { useGetVDRsQuery } from "../../../redux/services/vdrApi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function VDRsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");

  const [viewMode, setViewMode] = useState<string>("active");
  const [emailModal, showEmailModal] = useState<boolean>(false);
  const [newVDRModal, showNewVDRModal] = useState<boolean>(false);
  const { data, isLoading } = useGetVDRsQuery({ unitId: +params.unitId! });

  const onShowEmailTemplate = useCallback(() => {
    showEmailModal(true);
  }, []);

  const onSwitchViewMode = useCallback((mode: string) => {
    setViewMode(mode);
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {isLoading ? (
        <Box textAlign="center" p={4}>
          <CircularProgress />
        </Box>
      ) : (
        <TabContainer
          viewMode={viewMode}
          onSwitchViewMode={onSwitchViewMode}
          suffixActionRenderer={
            <Box sx={{ display: "flex", gap: 2 }}>
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
          }
        >
          {(data || []).map((vdr) => (
            <VDRCard
              key={vdr.id}
              {...vdr}
              onCard={() =>
                navigate(
                  `/portal/vdrs/${vdr.id}?unitId=${params.unitId}&unitName=${unitName}&type=${type}`
                )
              }
            />
          ))}
        </TabContainer>
      )}
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
          initialContent="Hello there, I would require following documents:"
          onClose={() => showEmailModal(false)}
        />
      )}
    </Box>
  );
}
