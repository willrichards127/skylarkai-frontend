import React, { useCallback, useMemo, useState } from "react";
import { Box, TextField, Typography, CircularProgress } from "@mui/material";
import { useGetUnitsQuery } from "../../../../../redux/services/setupApi";

export const UnitStepPanel = ({
  onSelectedUnit,
}: {
  onSelectedUnit: (unit: any) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedUnit, setSelectedUnit] = useState<any>(null);

  const { isLoading: loadingUnits, data: units } = useGetUnitsQuery({
    view_mode: "active",
  });

  const onChangeSearchText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  const onSelectUnit = useCallback(
    (unit: any) => {
      setSelectedUnit(unit);
      onSelectedUnit(unit);
    },
    [onSelectedUnit]
  );

  const filteredUnits = useMemo(
    () =>
      (units || []).filter((unit) =>
        unit.name!.toLowerCase().includes(searchText.toLocaleLowerCase())
      ),
    [units, searchText]
  );

  return (
    <>
      <TextField
        value={searchText}
        onChange={onChangeSearchText}
        size="small"
        sx={{ minWidth: 480 }}
        label={"Search"}
        disabled={loadingUnits}
      />
      {loadingUnits ? (
        <Box sx={{ textAlign: "center", p: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            px: 0.5,
            py: 2,
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            maxHeight: 640,
            overflowY: "auto",
          }}
        >
          {filteredUnits.length > 0 ? (
            filteredUnits.map((unit) => (
              <Box
                key={unit.id!}
                sx={{
                  p: 2,
                  bgcolor: "secondary.main",
                  borderRadius: 1,
                  width: 320,
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.25)",
                  },
                  filter:
                    unit.id === selectedUnit?.id
                      ? "brightness(1.5)"
                      : "brightness(1)",
                }}
                onClick={() => onSelectUnit(unit)}
              >
                <Typography variant="h6" fontWeight="bold">
                  {unit.name!}
                </Typography>
                <Typography variant="body2">
                  Type: {unit.type === 1 ? "Company" : "Sector"}
                </Typography>
              </Box>
            ))
          ) : (
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                color: "grey",
                fontSize: 12,
                p: 3,
              }}
            >
              No Data Available
            </Box>
          )}
        </Box>
      )}
    </>
  );
};
