import { useCallback, useState, useMemo, useEffect, useRef } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { VDRCard } from "./components/VDRCard";
import { NewVDRModal } from "./components/NewVDRModal";
import { SendEmailModal } from "../../../components/modals/SendEmailModal";
import TabContainer from "../../../components/TabContainer";
import {
  useGetVDRsQuery,
  useSaveVDRMutation,
} from "../../../redux/services/vdrApi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useNotification } from "../../../shared/socket/NotificationProvider";

export default function VDRsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const unitName = searchParams.get("unitName");
  const type = searchParams.get("type");

  const vdrRef = useRef<any>();

  const [viewMode, setViewMode] = useState<string>("active");
  const [emailModal, showEmailModal] = useState<boolean>(false);
  const [newVDRModal, showNewVDRModal] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGetVDRsQuery({
    unitId: +params.unitId!,
    view_mode: viewMode,
  });
  const [updateVDR] = useSaveVDRMutation();

  const moreItems = useMemo(
    () => [
      ...(viewMode === "archived"
        ? [
            {
              id: "mark_as_active",
              content: "Mark as active",
              clickable: true,
            },
          ]
        : [
            {
              id: "archive",
              content: "Archive",
              clickable: true,
            },
          ]),
    ],
    [viewMode]
  );
  const { newIngesting } = useNotification();
  

  useEffect(() => {
    if (newIngesting) {
      refetch();
    }
  }, [newIngesting]);

  const onShowEmailTemplate = useCallback(() => {
    showEmailModal(true);
  }, []);

  const onSwitchViewMode = useCallback((mode: string) => {
    setViewMode(mode);
  }, []);

  const onMoreItem = useCallback(
    (vdr: any, menuItemId: string) => {
      if (menuItemId === "edit") {
        vdrRef.current = vdr;
        showNewVDRModal(true);
      } else if (menuItemId === "archive") {
        updateVDR({
          unitId: +params.unitId!,
          vdrId: vdr.id,
          data: { is_active: "false" },
        });
      } else if (menuItemId === "mark_as_active") {
        updateVDR({
          unitId: +params.unitId!,
          vdrId: vdr.id,
          data: { is_active: "true" },
        });
      }
    },
    [params.unitId, updateVDR]
  );

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
              moreItems={moreItems}
              onMoreItem={(menuItemId) => onMoreItem(vdr, menuItemId)}
            />
          ))}
        </TabContainer>
      )}
      {newVDRModal && (
        <NewVDRModal
          initialVDR={vdrRef.current}
          open={newVDRModal}
          unitId={params.unitId!}
          type={type!}
          unitName={unitName!}
          onClose={() => {
            vdrRef.current = null;
            showNewVDRModal(false);
          }}
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
