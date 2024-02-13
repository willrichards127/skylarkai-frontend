import { useState, useCallback } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Typography,
  TextField,
  Divider,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CompanySelector } from "../../../../components/CompanySelector";
import { SavedInstancesContainer } from "../sub-components/SavedInstancesContainer";
import { ICustomInstance } from "./interfaces";
import { IFeatureInstance, ICompany } from "../../../../redux/interfaces";
import { useGetFeatureInstancesQuery } from "../../../../redux/services/transcriptAPI";
import { genInstanceName } from "../../../../shared/utils/basic";

export const CreateReport = ({
  instance,
  onNext,
}: {
  instance: ICustomInstance;
  onNext: (args: Partial<ICustomInstance>) => void;
}) => {
  const { isLoading: loadingInstances, data: dataInstances } =
    useGetFeatureInstancesQuery({
      feature_id: instance.feature_id,
    });

  const [form, setForm] = useState<{
    company_name: string;
    ticker: string;
    instance_name: string;
    is_company_available?: boolean;
  }>({
    company_name: "",
    ticker: "",
    instance_name: "",
    is_company_available: false,
  });

  const onSubmit = useCallback(() => {
    onNext(form);
  }, [onNext, form]);

  const onChangeCompany = useCallback((company: ICompany | null) => {
    setForm((prev) => ({
      ...prev,
      company_name: company?.company_name || "",
      ticker: company?.ticker || "",
      is_company_available: company?.is_available,
      instance_name: genInstanceName("report", company?.ticker),
    }));
  }, []);

  const onSavedInstance = useCallback(
    (savedInstance: IFeatureInstance) => {
      onNext({ ...savedInstance, saved: true } as ICustomInstance);
    },
    [onNext]
  );

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Typography color="text.primary">Sentiment Analysis</Typography>
          <Typography color="text.primary">Create Report</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onSubmit}
          disabled={
            !form.company_name ||
            !form.ticker ||
            !form.instance_name ||
            !form.is_company_available
          }
        >
          Next
        </Button>
      </Box>
      <Stack spacing={2} direction="row" mb={2}>
        <CompanySelector
          value={form}
          analysisType="transcript"
          onChange={onChangeCompany}
        />
        <TextField
          fullWidth
          size="small"
          label="Report Name"
          value={form.instance_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setForm((prev) => ({ ...prev, instance_name: e.target.value }))
          }
        />
      </Stack>
      <Divider />
      <SavedInstancesContainer
        loading={loadingInstances}
        instances={dataInstances || []}
        instanceType="report"
        onSavedInstance={onSavedInstance}
      />
    </Box>
  );
};
