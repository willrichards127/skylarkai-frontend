/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { genInstanceName } from "../../../../shared/utils/basic";
import { ICustomInstance } from "./interfaces";
import { IFeatureInstance } from "../../../../redux/interfaces";
import { useGetFeatureInstancesQuery } from "../../../../redux/services/transcriptAPI";

export const CreateReport = ({
  instance,
  onNext,
}: {
  instance: ICustomInstance;
  onNext: (args: Partial<ICustomInstance>) => void;
}) => {
  const [form, setForm] = useState<{
    company_name: string;
    ticker: string;
    instance_name: string;
    company_url?: string;
  }>({
    company_name: "",
    company_url: "",
    ticker: "",
    instance_name: "",
  });
  const { isLoading: loadingInstances, data: dataInstances } =
    useGetFeatureInstancesQuery({
      feature_id: instance.feature_id,
    });

  const onSavedInstance = useCallback(
    (savedInstance: IFeatureInstance) => {
      onNext({ ...savedInstance, saved: true } as ICustomInstance);
    },
    [onNext]
  );

  const onSubmit = useCallback(() => {
    onNext(form);
  }, [onNext, form]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Typography color="text.primary">Create Investment Memo</Typography>
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
            !form.company_url
          }
        >
          Next
        </Button>
      </Box>
      <Stack spacing={2} mb={4}>
        <Stack spacing={2} direction="row">
          <CompanySelector
            value={form}
            onChange={(company) =>
              setForm((prev) => ({
                ...prev,
                company_name: company?.company_name || "",
                ticker: company?.ticker || "",
                instance_name: genInstanceName("report", company?.ticker),
              }))
            }
          />
          <TextField
            fullWidth
            size="small"
            label="Company URL"
            value={form.company_url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, company_url: e.target.value }))
            }
          />
        </Stack>
        <Divider />
        <Stack spacing={2} direction="row">
          <TextField
            fullWidth
            size="small"
            label="Report Name"
            value={form.instance_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, instance_name: e.target.value }))
            }
          />
          <Box width="100%" />
        </Stack>
        <Divider />
      </Stack>
      <SavedInstancesContainer
        loading={loadingInstances}
        instances={dataInstances || []}
        instanceType="report"
        onSavedInstance={onSavedInstance}
      />
    </Box>
  );
};
