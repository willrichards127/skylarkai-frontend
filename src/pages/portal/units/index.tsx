import { useCallback, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Divider,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { NewUnitModal } from "./components/NewUnitModal";
import { UnitCard } from "./components/UnitCard";
import { useGetUnitsQuery } from "../../../redux/services/setupApi";

const UnitsPage = () => {
  const navigate = useNavigate();
  const unitRef = useRef<any>();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const { isLoading, data: units } = useGetUnitsQuery({
    type: type === "companies" ? 1 : 2,
  });

  const [unitModal, showUnitModal] = useState<boolean>(false);

  const onAddUnit = useCallback(() => {
    showUnitModal(true);
  }, []);

  const onCard = useCallback(
    ({ id, name }: { id: number; name: string; logo?: string }) => {
      navigate(`/portal/units/${id}/reports?unitName=${name}&type=${type}`);
    },
    [navigate, type]
  );

  const onMoreItem = useCallback((unit: any, menuItemId: string) => {
    if (menuItemId === "edit") {
      unitRef.current = unit;
      showUnitModal(true);
    }
  }, []);

  return (
    <Stack spacing={2} p={2} height="100%">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          {type === "companies" ? <ApartmentIcon /> : <BusinessCenterIcon />}
          <Typography variant="h5" textTransform="capitalize">
            {type}
          </Typography>
        </Stack>
        <Button variant="contained" onClick={onAddUnit}>
          + Add {type === "companies" ? "Company" : "Sector"}
        </Button>
      </Box>
      <Divider />
      <Box
        sx={{
          height: "calc(100% - 60px)",
          overflowY: "auto",
        }}
      >
        {isLoading ? (
          <Box p={2}>
            <CircularProgress />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            {units?.length ? (
              units.map((unit) => (
                <UnitCard
                  key={unit.id}
                  name={unit.name}
                  created_at={unit.created_at}
                  logo={unit.logo}
                  onCard={() => onCard(unit)}
                  onMoreItem={(menuItemId) => onMoreItem(unit, menuItemId)}
                  moreItems={[
                    {
                      id: "edit",
                      content: "Edit",
                      clickable: true,
                    },
                    {
                      id: "delete",
                      content: "Delete",
                      clickable: true,
                    },
                  ]}
                />
              ))
            ) : (
              <Box
                textAlign="center"
                p={2}
                color="grey"
                fontSize={13}
                width="100%"
              >
                No available {type}
              </Box>
            )}
          </Box>
        )}
      </Box>
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
