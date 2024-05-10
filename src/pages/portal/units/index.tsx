import { useCallback, useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Stack,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { currentUser } from "../../../redux/features/authSlice";
import { NewUnitModal } from "./components/NewUnitModal";
import { UnitCard } from "./components/UnitCard";
import TabContainer from "../../../components/TabContainer";
import { useGetUnitsQuery } from "../../../redux/services/setupApi";

const UnitsPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector(currentUser);

  const unitRef = useRef<any>();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const { isLoading, data: units } = useGetUnitsQuery({
    isPartner: user!.persona_id === 2,
    type: type === "companies" ? 1 : 2,
  });

  const [viewMode, setViewMode] = useState<string>("active");
  const [unitModal, showUnitModal] = useState<boolean>(false);

  const onAddUnit = useCallback(() => {
    showUnitModal(true);
  }, []);

  const onCard = useCallback(
    ({
      id,
      name,
      username,
    }: {
      id: number;
      name: string;
      username?: string;
    }) => {
      navigate(
        `/portal/units/${id}/reports?unitName=${name}&type=${type}${
          username ? "&analyst=" + username : ""
        }`
      );
    },
    [navigate, type]
  );

  const onSwitchViewMode = useCallback((viewMode: string) => {
    setViewMode(viewMode);
  }, []);

  const onMoreItem = useCallback((unit: any, menuItemId: string) => {
    if (menuItemId === "edit") {
      unitRef.current = unit;
      showUnitModal(true);
    }
  }, []);

  useEffect(() => {
    setViewMode("active");
  }, [type]);

  return (
    <Stack spacing={2} p={2}>
      {isLoading ? (
        <Box sx={{ p: 2, width: "100%", textAlign: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <TabContainer
          hasDivider
          headerHeight={90}
          viewMode={viewMode}
          onSwitchViewMode={onSwitchViewMode}
          prefixActionRenderer={
            <Stack spacing={2} direction="row" alignItems="center">
              {type === "companies" ? (
                <ApartmentIcon />
              ) : (
                <BusinessCenterIcon />
              )}
              <Typography variant="h5" textTransform="capitalize">
                {type}
              </Typography>
            </Stack>
          }
          suffixActionRenderer={
            <Button variant="contained" onClick={onAddUnit}>
              + Add {type === "companies" ? "Company" : "Sector"}
            </Button>
          }
        >
          {(units || []).map((unit) => (
            <UnitCard
              key={unit.id}
              name={unit.name}
              created_at={unit.created_at}
              logo={unit.logo}
              author={unit.username}
              onCard={() => onCard(unit)}
              onMoreItem={(menuItemId) => onMoreItem(unit, menuItemId)}
              moreItems={[
                {
                  id: "edit",
                  content: "Edit",
                  clickable: true,
                },
                {
                  id: "archive",
                  content: "Archive",
                  clickable: true,
                },
              ]}
            />
          ))}
        </TabContainer>
      )}
      {unitModal && (
        <NewUnitModal
          open={unitModal}
          category={type === "companies" ? "company" : "sector"}
          initialUnit={unitRef.current}
          onClose={() => {
            unitRef.current = null;
            showUnitModal(false);
          }}
        />
      )}
    </Stack>
  );
};

export default UnitsPage;
