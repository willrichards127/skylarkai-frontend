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
import { SelectFileModal } from "../../../../components/CompanySelector/SelectFileModal";
import { ICustomInstance } from "./interfaces";
import {
  useCreateFeatureInstanceMutation,
  useIngestFilesMutation,
  useCompareDocumentsMutation,
} from "../../../../redux/services/transcriptAPI";
import { marked } from "marked";
import { parseCitation } from "../../../../shared/utils/string";
import { downloadPdf } from "../../../../shared/utils/download";

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

  const [file0, setFile0] = useState<any>();
  const [file1, setFile1] = useState<any>();
  const [fileContent0, setFileContent0] = useState<any>();
  const [fileContent1, setFileContent1] = useState<any>();
  const [dbFile0, setDbFile0] = useState<any>();
  const [dbFile1, setDbFile1] = useState<any>();
  const [selectFileModal, showSelectFileModal] = useState<number>(-1);
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
        setDbFile0(null);
      } else {
        setFile1(selectedFiles[0]);
        setDbFile1(null);
      }
      onUploadedDocuments({
        fileIndex,
        file: selectedFiles[0],
      });
    },
    [onUploadedDocuments]
  );

  const onSelectFromDb = useCallback(
    (fileIndex: number) => () => {
      showSelectFileModal(fileIndex);
    },
    []
  );

  const onSelectedDBFiles = useCallback(
    (files: any[]) => {
      if (selectFileModal === 0) {
        setDbFile0(files[0]);
        setFile0(null);
        downloadPdf({
          graph_id: files[0].graph_id,
          analysis_type: "financial_diligence",
          filename: files[0].name.replace(".pdf", ""),
        }).then((pdfBuffer) => {
          if (pdfBuffer) {
            setFileContent0(new Uint8Array(pdfBuffer));
          }
        });
      } else {
        setDbFile1(files[0]);
        setFile1(null);
      }
      downloadPdf({
        graph_id: files[0].graph_id,
        analysis_type: "financial_diligence",
        filename: files[0].name.replace(".pdf", ""),
      }).then((pdfBuffer) => {
        if (pdfBuffer) {
          if (selectFileModal === 0) {
            setFileContent0(new Uint8Array(pdfBuffer));
          } else {
            setFileContent1(new Uint8Array(pdfBuffer));
          }
        }
      });
      onUploadedDocuments({
        fileIndex: selectFileModal,
        file: files[0],
      });
    },
    [selectFileModal, onUploadedDocuments]
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
    let template = `## Compare Documents Report\n\n\nCreated: ${new Date().toLocaleDateString()} \n\n`;
    criteria!.forEach((crit) => {
      template += `### ${crit} \n\n`;
    });
    let filename0, filename1: string;
    if (file0 && file1) {
      filename0 = file0.name;
      filename1 = file1.name;
      await ingestFiles({
        analysis_type: "compare",
        files: [file0!, file1!],
      });
    } else if (dbFile0 && file1) {
      filename0 = dbFile0.name;
      filename1 = file1.name;
      await ingestFiles({
        analysis_type: "compare",
        files: [file1!],
      });
    } else if (dbFile1 && file0) {
      filename0 = file0.name;
      filename1 = dbFile1.name;
      await ingestFiles({
        analysis_type: "compare",
        files: [file0!],
      });
    } else {
      filename0 = dbFile0.name;
      filename1 = dbFile1.name;
    }

    const responseCompare = await compareDocs({
      document1: filename0.replace(".pdf", ""),
      document2: filename1.replace(".pdf", ""),
      template,
      llm,
      is_template_with_content: true,
    }).unwrap();

    const responseInstance = await createInstance({
      ...instance,
      instance_metadata: {
        filename0: filename0.replace(".pdf", ""),
        filename1: filename1.replace(".pdf", ""),
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
    dbFile0,
    dbFile1,
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
          disabled={
            (!file0 && dbFile1) ||
            (file0 && !dbFile1) ||
            (!file1 && dbFile0) ||
            (file1 && !dbFile0) ||
            (!file0 && !file1) ||
            (!dbFile0 && !dbFile1) ||
            !criteria.length
          }
        >
          Next
        </Button>
      </Box>
      <Typography variant="body2" gutterBottom mt={4}>
        Upload company specific documents
      </Typography>
      <Stack spacing={2} direction="row" alignItems="flex-start">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: 1,
          }}
        >
          <FileUploader
            isOneFileOnly
            onUploadCompleted={onFileUploaded(0)}
            showFileList
          />
          <Box width="100%" textAlign="center" mt="auto">
            OR
          </Box>
          <Typography variant="body2" fontWeight="bold" gutterBottom>
            Local VDR files
          </Typography>
          <Button size="small" variant="outlined" onClick={onSelectFromDb(0)}>
            Select VDR files
            {!!dbFile0 && `(${dbFile0.name})`}
          </Button>
        </Box>
        <Typography variant="h6">VS</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            gap: 1,
          }}
        >
          <FileUploader
            isOneFileOnly
            onUploadCompleted={onFileUploaded(1)}
            showFileList
          />
          <Box width="100%" textAlign="center" mt="auto">
            OR
          </Box>
          <Typography variant="body2" fontWeight="bold" gutterBottom>
            Local VDR files
          </Typography>
          <Button size="small" variant="outlined" onClick={onSelectFromDb(1)}>
            Select VDR files
            {!!dbFile1 && `(${dbFile1.name})`}
          </Button>
        </Box>
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
              {!!fileContent1 && <PdfViewer pdfUrl={fileContent1} />}
            </Box>
          }
        />
      )}
      {selectFileModal > -1 && (
        <SelectFileModal
          open={selectFileModal > -1}
          onClose={() => showSelectFileModal(-1)}
          onActionPerformed={onSelectedDBFiles}
          isVDROnly
        />
      )}
    </Box>
  );
};
