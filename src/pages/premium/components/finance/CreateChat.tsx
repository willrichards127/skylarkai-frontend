import { useCallback, useState } from "react";
import {
  Box,
  Stack,
  Button,
  Breadcrumbs,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { CompanySelector } from "../../../../components/CompanySelector";
import { SavedInstancesContainer } from "../sub-components/SavedInstancesContainer";
import { ICustomInstance } from "./interface";
import { genInstanceName } from "../../../../shared/utils/basic";
import { useGetFeatureInstancesQuery } from "../../../../redux/services/transcriptAPI";
import { ICompany, IFeatureInstance } from "../../../../redux/interfaces";
import { FileUploader } from "../../../../components/FileUploader";

export const CreateChat = ({
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
    is_company_available?: boolean;
    instance_name: string;
  }>({
    company_name: "",
    ticker: "",
    is_company_available: false,
    instance_name: "",
  });

  const onSubmit = useCallback(() => {
    onNext(form);
  }, [onNext, form]);

  const onSavedInstance = useCallback(
    (savedInstance: IFeatureInstance) => {
      onNext({
        ...savedInstance,
        saved: true,
        view_doc: savedInstance.instance_metadata!.docs[0].file_name,
      } as ICustomInstance);
    },
    [onNext]
  );

  const onChangeCompany = useCallback((company: ICompany | null) => {
    setForm((prev) => ({
      ...prev,
      company_name: company?.company_name || "",
      ticker: company?.ticker || "",
      is_company_available: company?.is_available,
      instance_name: genInstanceName("chat", company?.ticker),
    }));
  }, []);

  const onFileUploaded = useCallback((selectedFiles: File[]) => {

  }, []);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Typography color="text.primary">Finance Co-Pilot</Typography>
          <Typography color="text.primary">Create a Chat</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onSubmit}
          disabled={
            !form.company_name ||
            !form.instance_name ||
            !form.ticker ||
            !form.is_company_available
          }
        >
          Next
        </Button>
      </Box>
      <Stack spacing={2} mb={2}>
        <Stack direction={"row"} spacing={2} mb={2}>
          <TextField
            fullWidth
            size="small"
            label="Chat Name"
            placeholder="FCP Chatbot"
            value={form.instance_name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, instance_name: e.target.value }))
            }
          />
          <Box width="100%" />
        </Stack>
        <Divider />
        <Stack direction={"row"} spacing={2} mb={2}>
          <CompanySelector
            value={form}
            analysisType="edgar"
            onChange={onChangeCompany}
          />
          <Box width="100%" />
        </Stack>
        <Divider>Or</Divider>
        <Typography variant="body2" gutterBottom mt={4}>
          Upload company specific document
        </Typography>
        <FileUploader isOneFileOnly onUploadCompleted={onFileUploaded} cloud />
      </Stack>
      <Divider />
      <SavedInstancesContainer
        loading={loadingInstances}
        instances={dataInstances || []}
        instanceType="chat"
        onSavedInstance={onSavedInstance}
      />
    </Box>
  );
};
