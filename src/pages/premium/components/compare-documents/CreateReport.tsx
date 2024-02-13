import { useState, useCallback } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Typography,
  TextField,
  Divider,
  Stack
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { SavedInstancesContainer } from "../sub-components/SavedInstancesContainer";
import { genInstanceName } from "../../../../shared/utils/basic";
import { useGetFeatureInstancesQuery } from "../../../../redux/services/transcriptAPI";
import { ICustomInstance } from "./interfaces";
import { IFeatureInstance } from "../../../../redux/interfaces";

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
    instance_name: string;
    company_name: string;
    ticker: string;
  }>({
    instance_name: genInstanceName("report"),
    company_name: "SkylarkAI",
    ticker: "SKY",
  });

  const onSubmit = useCallback(() => {
    onNext(form);
  }, [onNext, form]);

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
          <Typography color="text.primary">Compare Documents</Typography>
          <Typography color="text.primary">Create Report</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onSubmit}
          disabled={!form.instance_name}
        >
          Next
        </Button>
      </Box>
      <Stack spacing={2} direction="row" mb={2}>
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
      <SavedInstancesContainer
        loading={loadingInstances}
        instances={dataInstances || []}
        instanceType="report"
        onSavedInstance={onSavedInstance}
      />
    </Box>
  );
};
