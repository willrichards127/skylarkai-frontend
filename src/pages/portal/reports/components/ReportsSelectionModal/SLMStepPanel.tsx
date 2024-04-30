import { Box, TextField, Typography, CircularProgress } from "@mui/material";
import { useGetSetupsQuery } from "../../../../../redux/services/setupApi";
import React, { useCallback, useMemo, useState } from "react";
import { ISetup } from "../../../../../shared/models/interfaces";

export const SLMStepPanel = ({
  onSelectedSLM,
}: {
  onSelectedSLM: (slm: ISetup) => void;
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedSlm, setSelectedSlm] = useState<ISetup | null>(null);

  const { isLoading: loadingSlms, data: slms } = useGetSetupsQuery();

  const onChangeSearchText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  const onSelectSLM = useCallback(
    (slm: ISetup) => {
      setSelectedSlm(slm);
      onSelectedSLM(slm);
    },
    [onSelectedSLM]
  );

  const filteredSlms = useMemo(
    () =>
      (slms || []).filter((slm) =>
        slm.name!.toLowerCase().includes(searchText.toLocaleLowerCase())
      ),
    [slms, searchText]
  );

  return (
    <>
      <TextField
        value={searchText}
        onChange={onChangeSearchText}
        size="small"
        sx={{ minWidth: 480 }}
        label={"Search"}
        disabled={loadingSlms}
      />
      {loadingSlms ? (
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
          {filteredSlms.length > 0 ? (
            filteredSlms.map((slm) => (
              <Box
                key={slm.id!}
                sx={{
                  p: 2,
                  bgcolor: "secondary.main",
                  borderRadius: 1,
                  width: 270,
                  "&:hover": {
                    cursor: "pointer",
                    filter: "brightness(1.25)",
                  },
                  filter:
                    slm.id === selectedSlm?.id
                      ? "brightness(1.5)"
                      : "brightness(1)",
                }}
                onClick={() => onSelectSLM(slm)}
              >
                <Typography variant="h6" fontWeight="bold">
                  {slm.name!}
                </Typography>
                <Typography variant="body2">
                  Company: {slm.description || slm.name}
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
