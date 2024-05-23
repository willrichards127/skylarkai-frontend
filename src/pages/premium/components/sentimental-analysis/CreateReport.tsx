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
import { SelectFileModal } from "../../../../components/CompanySelector/SelectFileModal";
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

  const [selectFileModal, showSelectFileModal] = useState<boolean>(false);

  const [dbFiles, setDbFiles] = useState<
    { name: string; date: string; id?: number; graph_id: number }[]
  >([]);

  const onSubmit = useCallback(() => {
    onNext({ ...form, instance_metadata: { db_files: dbFiles } });
  }, [onNext, form, dbFiles]);

  const onChangeCompany = useCallback((company: ICompany | null) => {
    setForm((prev) => ({
      ...prev,
      company_name: company?.company_name || "",
      ticker: company?.ticker || "",
      is_company_available: company?.is_available,
      instance_name: genInstanceName("report", company?.ticker),
    }));
  }, []);

  const onSelectedDBFiles = useCallback((files: any[]) => {
    setDbFiles(files);
    setForm((prev) => ({
      ...prev,
      instance_name: genInstanceName("report"),
    }));
  }, []);

  const onSelectFromDb = useCallback(() => {
    showSelectFileModal(true);
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
          <Typography color="text.primary">
            Investment Criteria Analysis
          </Typography>
          <Typography color="text.primary">Create Report</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onSubmit}
          disabled={
            !(
              (form.company_name && form.ticker && form.is_company_available) ||
              dbFiles?.length
            ) || !form.instance_name
          }
        >
          Next
        </Button>
      </Box>
      <Stack spacing={2} direction="row" mb={2}>
        <Stack spacing={1} width="100%">
          <Typography variant="body2" fontWeight="bold" gutterBottom>
            Publicly traded companies
          </Typography>
          <CompanySelector
            value={form}
            analysisType="transcript"
            onChange={onChangeCompany}
          />
          <Box width="100%" textAlign="center">
            OR
          </Box>
          <Typography variant="body2" fontWeight="bold" gutterBottom>
            Local Reports/VDR files
          </Typography>
          <Button size="small" variant="outlined" onClick={onSelectFromDb}>
            Select Reports/VDR files
            {dbFiles.length > 0 && `(${dbFiles.length} files are selected)`}
          </Button>
        </Stack>
        <Stack spacing={1} width="100%">
          <Typography variant="body2" fontWeight="bold" gutterBottom>
            Enter new report name
          </Typography>
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
      </Stack>
      <Divider />
      <SavedInstancesContainer
        loading={loadingInstances}
        instances={dataInstances || []}
        instanceType="report"
        onSavedInstance={onSavedInstance}
      />
      {selectFileModal && (
        <SelectFileModal
          open={selectFileModal}
          onClose={() => showSelectFileModal(false)}
          onActionPerformed={onSelectedDBFiles}
        />
      )}
    </Box>
  );
};
