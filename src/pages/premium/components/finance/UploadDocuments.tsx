/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Link,
  Typography,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FileUploader } from "../../../../components/FileUploader";
import { ICustomInstance } from "./interface";
import {
  useCreateFeatureInstanceMutation,
} from "../../../../redux/services/transcriptAPI";


export const UploadDocuments = ({
  instance,
  onUploadedDocuments,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onUploadedDocuments: (args: { file: File }) => void;
  onNext: (args: ICustomInstance) => void;
  onGotoMain: () => void;
}) => {
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();

  const [file, setFile] = useState<File | undefined>();

  const onFileUploaded = useCallback((selectedFiles: File[]) => {
    setFile(selectedFiles[0]);
    onUploadedDocuments({
      file: selectedFiles[0],
    });
  },
    [onUploadedDocuments]
  );

  const onNextStep = useCallback(async () => {
    const responseInstance = await createInstance({
      ...instance,
      instance_metadata: {
        filename: file!.name.replace(".pdf", ""),
      },
    }).unwrap();
    onNext(responseInstance as ICustomInstance);
  }, [
    createInstance,
    onNext,
    instance,
  ]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingCreateInstance}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Chat With Enterprise Data
          </Link>
          <Typography color="text.primary">Upload a Document</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onNextStep}
          disabled={!file}
        >
          Next
        </Button>
      </Box>
      <Typography variant="body2" gutterBottom mt={4}>
        Upload company specific documents
      </Typography>
      <FileUploader isOneFileOnly onUploadCompleted={onFileUploaded} cloud />
    </Box>
  );
};
