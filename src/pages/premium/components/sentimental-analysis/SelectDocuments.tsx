/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Stack,
  MenuItem,
  Backdrop,
  CircularProgress,
  Breadcrumbs,
  Link,
  Chip,
  Checkbox,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { XPanel } from "../../../../components/XPanel";
import { XTable } from "../../../../components/table";
import { ICustomInstance } from "./interfaces";
import { ITranscript } from "../../../../redux/interfaces";
import {
  useGetTranscriptsQuery,
  useCreateFeatureInstanceMutation,
  useGenerateSentimentAnalysisMutation,
} from "../../../../redux/services/transcriptAPI";
import { marked } from "marked";
import { parseCitation } from "../../../../shared/utils/string";

const extractRow = (row: { file_name: string }) => {
  const splited = row.file_name.split("_");
  return {
    ...row,
    name: splited[0],
    title: "Earning Call",
    quarter: splited[1],
    year: splited[2],
  };
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const SelectDocuments = ({
  instance,
  onChangeDocuments,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onChangeDocuments: (args: { docs: ITranscript[] }) => void;
  onNext: (args: ICustomInstance) => void;
  onGotoMain: () => void;
}) => {
  const { sys_graph_id } = useSelector((state: any) => state.userAuthSlice);
  const { isLoading: loadingTranscripts, data: dataTranscripts } =
    useGetTranscriptsQuery(
      {
        company_name: instance.company_name,
        ticker: instance.ticker,
      },
      {
        skip:
          !instance.company_name ||
          !!instance.instance_metadata.db_files?.length,
      }
    );
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();
  const [generateReport, { isLoading: loadingGenerateReport }] =
    useGenerateSentimentAnalysisMutation();

  const [rows, setRows] = useState<
    ({
      name: string;
      title: string;
      quarter: string;
      year: string;
      selected?: boolean;
    } & ITranscript)[]
  >([]);
  const [criteria, setCriteria] = useState<string[]>([]);
  const [llm, setLlm] = useState<string>("Gemini");

  const onSelectRow = useCallback(
    (row: any) => {
      const prevRows = [...rows];
      const updatedRows = prevRows.map((prevRow: any) =>
        prevRow.file_name === row.file_name
          ? { ...prevRow, selected: !prevRow.selected }
          : prevRow
      );
      onChangeDocuments({
        docs: updatedRows.filter((row) => !!row.selected),
      });
    },
    [rows, onChangeDocuments]
  );

  const onChangeCriteria = useCallback(
    (_: React.SyntheticEvent<Element, Event>, value: string[]) => {
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
    if (instance.instance_metadata.db_files?.length) {
      const responseReport = await generateReport({
        filenames: instance.instance_metadata.db_files.map((file) => ({
          graph_id: file.graph_id,
          id: file.id,
          file_name: file.name.replace(".pdf", ""),
        })),
        analysis_type: "financial_diligence",
        sentiments: criteria,
        llm,
        ...(!!instance.instance_metadata.db_files[0].id && { is_report: true }),
      }).unwrap();
      const responseInstance = await createInstance({
        ...instance,
        instance_metadata: {
          docs: instance.instance_metadata.db_files.map((file) => ({
            file_name: file.name,
            ...(!!file.id && { id: file.id }),
          })),
          criteria,
          report: marked.parse(parseCitation(responseReport.content)) as string,
        },
      }).unwrap();
      onNext(responseInstance as ICustomInstance);
    } else {
      const selectedDocuments = rows.filter((row) => row.selected);
      const responseReport = await generateReport({
        filenames: selectedDocuments.map((doc) => ({
          graph_id: sys_graph_id,
          file_name: doc.file_name,
        })),
        analysis_type: "transcript",
        sentiments: criteria,
        llm,
      }).unwrap();
      const responseInstance = await createInstance({
        ...instance,
        instance_metadata: {
          docs: selectedDocuments.map((doc) => ({ file_name: doc.file_name })),
          criteria,
          report: responseReport.content,
        },
      }).unwrap();
      onNext(responseInstance as ICustomInstance);
    }
  }, [
    onNext,
    createInstance,
    generateReport,
    sys_graph_id,
    llm,
    criteria,
    rows,
    instance,
  ]);

  useEffect(() => {
    if (loadingTranscripts || !dataTranscripts) return;
    setRows(dataTranscripts.map((tran) => extractRow(tran)));
  }, [loadingTranscripts, dataTranscripts]);

  useEffect(() => {
    if (loadingTranscripts) return;
    const selectedFiles = (instance.instance_metadata?.docs || []).map(
      (row: ITranscript) => row.file_name
    );
    setRows((prev) =>
      prev.map((prevRow) => ({
        ...prevRow,
        selected: selectedFiles.includes(prevRow.file_name),
      }))
    );
  }, [instance, loadingTranscripts]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingCreateInstance || loadingGenerateReport}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Investment Criteria Analysis
          </Link>
          <Typography color="text.primary">Select Documents</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onNextStep}
          disabled={
            (!instance.instance_metadata.docs?.length &&
              !instance.instance_metadata.db_files?.length) ||
            !criteria.length
          }
        >
          Next
        </Button>
      </Box>
      {!!instance.company_name && (
        <Box sx={{ my: 2 }}>
          <Typography variant="h5">
            {instance.company_name} ({instance.ticker})
          </Typography>
        </Box>
      )}
      <Stack spacing={2} direction="row" my={2}>
        <Autocomplete
          multiple
          fullWidth
          limitTags={2}
          options={[
            "Tone of Leadership",
            "Financial Performance Indicators",
            "Forward-Looking Statements",
            "Comparison with Previous Periods",
            "Market and Industry Sentiment",
            "Product and Service Reception",
            "Operational Challenges and Successes",
            "Risk Mention and Mitigation",
            "Investor and Stakeholder Relations",
            "ESG (Environmental, Social, Governance) Factors",
            "Acquisition and Expansion Plans",
          ]}
          sx={{ minWidth: 650 }}
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
            <TextField {...params} size="small" label="Investment Criteria" />
          )}
        />
        <TextField
          label="Large Language Model"
          value={llm}
          onChange={onChangeLLM}
          select
          size="small"
          sx={{ ml: 1, minWidth: 240 }}
        >
          {["Gemini", "OpenAI", "Anthropic"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <XPanel sxProps={{ bgcolor: "#000D1C", p: 2 }}>
        {!!instance.instance_metadata.db_files?.length && (
          <Typography variant="body2" fontWeight="bold" mb={2}>
            Selected Report/VDR files
          </Typography>
        )}
        {!!instance.instance_metadata.db_files?.length &&
          instance.instance_metadata.db_files.map((file) => (
            <Box
              key={file.name}
              sx={{ p: 1, borderRadius: 1, bgcolor: "black", mb: 1 }}
            >
              {file.name}
            </Box>
          ))}
        {!!instance.company_name && (
          <Typography variant="body2" fontWeight="bold" mb={2}>
            Transcripts
          </Typography>
        )}
        {!!instance.company_name && (
          <XTable
            loading={loadingTranscripts}
            columns={[
              {
                id: "name",
                label: "Name",
              },
              {
                id: "title",
                label: "Title",
              },
              {
                id: "quarter",
                label: "Quarter",
              },
              {
                id: "year",
                label: "Year",
              },
            ]}
            rows={rows.sort((a: any, b: any) => b.year - a.year)}
            onSelectRow={onSelectRow}
          />
        )}
      </XPanel>
    </Box>
  );
};
