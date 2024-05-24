/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Autocomplete,
  Checkbox,
  Chip,
  Breadcrumbs,
  Link,
  Typography,
  Divider,
  Backdrop,
  CircularProgress,
  Stack,
  MenuItem,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FileUploader } from "../../../../components/FileUploader";
import { SplitContainer } from "../../../../components/SplitContainer";
import { PdfViewer } from "../../../../components/PDFViewer";
import { ICustomInstance } from "./interfaces";
import {
  useCreateFeatureInstanceMutation,
  useIngestFilesMutation,
  useCompareDocumentsMutation,
} from "../../../../redux/services/transcriptAPI";
import { marked } from "marked";
import { parseCitation } from "../../../../shared/utils/string";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const UploadDocuments = ({
  instance,
  onUploadedDocuments,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onUploadedDocuments: (args: { fileIndex: number; file: File }) => void;
  onNext: (args: ICustomInstance) => void;
  onGotoMain: () => void;
}) => {
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();

  const [ingestFiles, { isLoading: loadingIngest }] = useIngestFilesMutation();

  const [compareDocs, { isLoading: loadingCompare }] =
    useCompareDocumentsMutation();

  const [file0, setFile0] = useState<File | undefined>();
  const [file1, setFile1] = useState<File | undefined>();
  const [fileContent0, setFileContent0] = useState<string>("");
  const [fileContent1, setFileContent1] = useState<string>("");
  const [criteria, setCriteria] = useState<string[]>([]);
  const [llm, setLlm] = useState<string>("Gemini");

  const onFileUploaded = useCallback(
    (fileIndex: number) => (selectedFiles: File[]) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          if (fileIndex === 0) {
            setFileContent0(e.target.result);
          } else {
            setFileContent1(e.target.result);
          }
        }
      };
      reader.readAsDataURL(selectedFiles[0]);
      if (fileIndex === 0) {
        setFile0(selectedFiles[0]);
      } else {
        setFile1(selectedFiles[0]);
      }
      onUploadedDocuments({
        fileIndex,
        file: selectedFiles[0],
      });
    },
    [onUploadedDocuments]
  );

  const onChangeCriteria = useCallback(
    (_: React.SyntheticEvent<Element, Event>, value: any[]) => {
      setCriteria(value);
    },
    []
  );

  const onChangeLLM = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setLlm(e.target.value);
    },
    []
  );

  const onNextStep = useCallback(async () => {
    await ingestFiles({
      analysis_type: "compare",
      files: [file0!, file1!],
    });

    let template = `## Compare Documents Report\n\n\nCreated: ${new Date().toLocaleDateString()} \n\n`;
    criteria!.forEach((crit) => {
      template += `### ${crit} \n\n`;
    });

    const responseCompare = await compareDocs({
      document1: file0!.name.replace(".pdf", ""),
      document2: file1!.name.replace(".pdf", ""),
      template,
      llm,
      is_template_with_content: true,
    }).unwrap();

    const responseInstance = await createInstance({
      ...instance,
      instance_metadata: {
        filename0: file0!.name.replace(".pdf", ""),
        filename1: file1!.name.replace(".pdf", ""),
        criteria,
        report: marked.parse(parseCitation(responseCompare)) as string,
      },
    }).unwrap();
    onNext(responseInstance as ICustomInstance);
  }, [
    createInstance,
    ingestFiles,
    compareDocs,
    onNext,
    criteria,
    instance,
    file0,
    file1,
    llm,
  ]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingCreateInstance || loadingIngest || loadingCompare}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Compare Documents
          </Link>
          <Typography color="text.primary">Upload Document</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onNextStep}
          disabled={!file0 || !file1 || !criteria.length}
        >
          Next
        </Button>
      </Box>
      <Typography variant="body2" gutterBottom mt={4}>
        Upload company specific documents
      </Typography>
      <Stack spacing={2} direction="row" alignItems="flex-start">
        <FileUploader
          isOneFileOnly
          onUploadCompleted={onFileUploaded(0)}
          showFileList
        />
        <Typography variant="h6">VS</Typography>
        <FileUploader
          isOneFileOnly
          onUploadCompleted={onFileUploaded(1)}
          showFileList
        />
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Autocomplete
          id="autocomplete-criteria"
          multiple
          fullWidth
          limitTags={2}
          options={[
            "Similarity Analysis",
            "Contrast Analysis",
            "Key Themes Extraction",
            "Data Comparison",
            "Tone and Style Analysis",
            "Conclusion Comparison",
            "Author's Intent and Purpose",
            "Target Audience Analysis",
            "Comprehensive Analysis",
            "Executive Summary",
          ]}
          getOptionLabel={(option) => option}
          value={criteria}
          onChange={onChangeCriteria}
          renderOption={(props, option, { selected }) => (
            <li {...props} key={option}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
                key={option}
              />
              {option}
            </li>
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                variant="outlined"
                label={option}
                size="small"
                {...getTagProps({ index })}
                key={option}
              />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} size="small" label="Comparison Criteria" />
          )}
        />
        <TextField
          label="Large Language Model"
          value={llm}
          onChange={onChangeLLM}
          select
          size="small"
          fullWidth
        >
          {["Gemini", "OpenAI", "Anthropic"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
      <Divider sx={{ my: 2 }} />
      {(fileContent0 || fileContent1) && (
        <SplitContainer
          sizes={[50, 50]}
          leftPanel={
            <Box
              sx={{
                pb: 2,
                height: 480,
                width: "100%",
              }}
            >
              {!!file0 && (
                <Typography variant="body2" gutterBottom>
                  {file0.name}
                </Typography>
              )}
              {!!fileContent0 && <PdfViewer pdfUrl={fileContent0} />}
            </Box>
          }
          rightPanel={
            <Box
              sx={{
                pb: 2,
                height: 480,
                width: "100%",
              }}
            >
              {!!file1 && (
                <Typography variant="body2" gutterBottom>
                  {file1.name}
                </Typography>
              )}
              {!!fileContent1 && <PdfViewer pdfUrl={fileContent1} />}
            </Box>
          }
        />
      )}
    </Box>
  );
};
