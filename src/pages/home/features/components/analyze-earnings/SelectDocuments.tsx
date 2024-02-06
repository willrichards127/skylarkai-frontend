/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Backdrop,
  CircularProgress,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { XPanel } from "../../../../../components/XPanel";
import { XTable } from "../../../../../components/table";
import { ICustomInstance } from "./interfaces";
import { ITranscript } from "../../../../../redux/interfaces";
import {
  useGetTranscriptsQuery,
  useCreateFeatureInstanceMutation,
} from "../../../../../redux/services/transcriptAPI";

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
  const { isLoading: loadingTranscripts, data: dataTranscripts } =
    useGetTranscriptsQuery({
      company_name: instance.company_name,
      ticker: instance.ticker,
    });
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();

  const [rows, setRows] = useState<
    ({
      name: string;
      title: string;
      quarter: string;
      year: string;
      selected?: boolean;
    } & ITranscript)[]
  >([]);

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

  const onNextStep = useCallback(async () => {
    const selectedDocuments = rows
      .filter((row) => row.selected)
      .map((doc) => ({ file_name: doc.file_name }));
    
    const responseInstance = await createInstance({
      ...instance,
      instance_metadata: {
        docs: selectedDocuments,
      },
    }).unwrap();
    onNext(responseInstance as ICustomInstance);
  }, [onNext, createInstance, rows, instance]);

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
        open={loadingCreateInstance}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Compare and Analyze Earning Calls Trends
          </Link>
          <Typography color="text.primary">Select Documents</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onNextStep}
          disabled={!(instance.instance_metadata?.docs || []).length}
        >
          Next
        </Button>
      </Box>
      <Typography variant="h5" gutterBottom my={4}>
        {instance.company_name} ({instance.ticker})
      </Typography>
      <XPanel sxProps={{ bgcolor: "#000D1C", py: 4, px: 8 }}>
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
      </XPanel>
    </Box>
  );
};
