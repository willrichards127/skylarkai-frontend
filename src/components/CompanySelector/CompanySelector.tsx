import { useCallback, useMemo, useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Autocomplete,
  Button,
} from "@mui/material";
import { StyledPopper, ListboxComponent } from "./sub-components";
import { FetchFilesModal } from "../../pages/premium/components/sub-components/FetchFilesModal";
import { tickers } from "../../shared/models/constants";
import { useGetEnabledCompaniesQuery } from "../../redux/services/transcriptAPI";
import { ICompany } from "../../redux/interfaces";

export const CompanySelector = ({
  analysisType = "",
  value,
  onChange,
}: {
  analysisType?: "edgar" | "transcript" | "transaction" | "";
  value: ICompany | null;
  onChange: (company: ICompany | null, isAvailable?: boolean) => void;
}) => {
  const { isLoading, data, refetch } = useGetEnabledCompaniesQuery(
    {
      analysis_type: analysisType === "transaction" ? "edgar" : analysisType,
    },
    { skip: !analysisType }
  );

  const [viewMode, setViewMode] = useState<"all" | "available">("all");
  const [fetchModal, showFetchModal] = useState<boolean>(false);

  const updatedTickers: ICompany[] = useMemo(() => {
    if (!data || !data.length) return tickers;
    const availableTickers = data.map((item) => item.ticker);
    if (viewMode === "available") {
      return tickers
        .map((item) => ({
          ...item,
          is_available: availableTickers.includes(item.ticker),
        }))
        .filter((item) => !!item.is_available);
    }
    return tickers
      .map((item) => ({
        ...item,
        is_available: availableTickers.includes(item.ticker),
      }))
      .sort((a, b) =>
        a.is_available === b.is_available ? 0 : a.is_available ? -1 : 1
      );
  }, [data, viewMode]);

  const onViewMode = useCallback(
    (_: React.MouseEvent<HTMLElement>, newValue: string) => {
      setViewMode(newValue as "all" | "available");
    },
    []
  );

  const onShowFetchModal = useCallback(() => {
    showFetchModal(true);
  }, []);

  const onInputAction = useCallback(() => {
    if (!analysisType) return;
    refetch();
  }, [analysisType, refetch]);

  return (
    <Box width="100%">
      <Autocomplete
        loading={isLoading}
        fullWidth
        disableListWrap
        PopperComponent={StyledPopper}
        ListboxComponent={ListboxComponent}
        options={updatedTickers}
        getOptionLabel={(option) => option.company_name}
        getOptionKey={(option) => option.ticker}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            label="Company"
            placeholder="Select Company"
            onClick={onInputAction}
          />
        )}
        renderOption={(props, option, state) =>
          [props, option, state.index] as React.ReactNode
        }
        value={value}
        onChange={(
          _: React.SyntheticEvent<Element, Event>,
          newValue: ICompany | null
        ) => {
          onChange(newValue);
        }}
      />
      {!!analysisType && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 0.5,
            gap: 0.5,
          }}
        >
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={onViewMode}
            size="small"
          >
            {["all", "available"].map((option) => (
              <ToggleButton
                key={option}
                size="small"
                value={option}
                sx={{
                  px: 1,
                  py: 0,
                  textTransform: "capitalize",
                }}
              >
                {option}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          {analysisType === "transcript" && (
            <Button
              variant="outlined"
              size="small"
              disabled={!value?.ticker}
              onClick={onShowFetchModal}
            >
              Download files
            </Button>
          )}
        </Box>
      )}
      {fetchModal && (
        <FetchFilesModal
          open={fetchModal}
          onClose={() => showFetchModal(false)}
          company_name={value!.company_name}
          ticker={value!.ticker}
          analysis_type={analysisType as "edgar" | "transcript" | "transaction"}
        />
      )}
    </Box>
  );
};
