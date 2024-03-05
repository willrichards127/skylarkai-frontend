/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Link,
  Typography,
  Autocomplete,
  Backdrop,
  CircularProgress,
  TextField,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { XPanel } from "../../../../components/XPanel";
import { XTable } from "../../../../components/table";
import { ICustomInstance } from "./interfaces";
import { ITransaction } from "../../../../redux/interfaces";
import {
  currencyFormat,
  getUniques,
  uniqueArr,
} from "../../../../shared/utils/basic";
import {
  useGetTransactionsQuery,
  useCreateFeatureInstanceMutation,
} from "../../../../redux/services/transcriptAPI";

const filtering = (
  rows: ITransaction[],
  filters: {
    year: string;
    insider: string;
    transaction_type: string;
  }
) => {
  let filtered = [...rows];
  if (filters.year) {
    filtered = filtered.filter((row) =>
      row.reported_date.includes(filters.year)
    );
  }
  if (filters.insider) {
    filtered = filtered.filter((row) => row.insider_name === filters.insider);
  }
  if (filters.transaction_type) {
    filtered = filtered.filter(
      (row) => row.transaction_type === filters.transaction_type
    );
  }
  return filtered;
};

export const SelectDocuments = ({
  instance,
  onChangeDocuments,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onChangeDocuments: (args: { docs: ITransaction[] }) => void;
  onNext: (args: ICustomInstance) => void;
  onGotoMain: () => void;
}) => {
  console.log('HEY===', instance)
  const { isLoading: loadingTransactions, data: dataTransactions } =
    useGetTransactionsQuery({
      company_name: instance.company_name,
      ticker: instance.ticker,
    });
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();

  const [rows, setRows] = useState<({ selected?: boolean } & ITransaction)[]>(
    []
  );
  const [filters, setFilters] = useState<{
    year: string;
    insider: string;
    transaction_type: string;
  }>({
    year: "",
    insider: "",
    transaction_type: "",
  });

  const onNextStep = useCallback(async () => {
    const responseInstance = await createInstance({
      ...instance,
      instance_metadata: {
        docs: rows.filter((row) => row.selected),
      },
    }).unwrap();
    onNext(responseInstance as ICustomInstance);
  }, [createInstance, onNext, rows, instance]);

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

  useEffect(() => {
    if (loadingTransactions || !dataTransactions) return;
    setRows(
      uniqueArr(dataTransactions, [
        "file_name",
        "insider_name",
      ]) as ITransaction[]
    );
  }, [loadingTransactions, dataTransactions]);

  useEffect(() => {
    if (loadingTransactions) return;
    const selectedFiles = (instance.instance_metadata?.docs || []).map(
      (row: ITransaction) => row.file_name
    );
    setRows((prev) =>
      prev.map((prevRow) => ({
        ...prevRow,
        selected: selectedFiles.includes(prevRow.file_name),
      }))
    );
  }, [instance, loadingTransactions]);

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
            View Insider Transactions
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
      {(dataTransactions || []).length > 0 && (
        <XPanel sxProps={{ bgcolor: "#000D1C", py: 4, px: 8 }}>
          <Stack spacing={2} direction="row" mb={2}>
            <Autocomplete
              options={getUniques(
                dataTransactions!.map((trans) =>
                  new Date(trans.reported_date).getFullYear().toString()
                )
              )}
              getOptionLabel={(option) => option}
              fullWidth
              value={filters.year}
              onChange={(
                _: React.SyntheticEvent<Element, Event>,
                newValue: string | null
              ) => setFilters((prev) => ({ ...prev, year: newValue || "" }))}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Year" />
              )}
            />
            <Autocomplete
              options={getUniques(
                dataTransactions!.map((trans) => trans.insider_name)
              )}
              getOptionLabel={(option) => option}
              fullWidth
              value={filters.insider}
              onChange={(
                _: React.SyntheticEvent<Element, Event>,
                newValue: string | null
              ) => setFilters((prev) => ({ ...prev, insider: newValue || "" }))}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Insider Name" />
              )}
            />
            <Autocomplete
              options={getUniques(
                dataTransactions!.map((trans) => trans.transaction_type)
              )}
              getOptionLabel={(option) => option}
              fullWidth
              value={filters.transaction_type}
              onChange={(
                _: React.SyntheticEvent<Element, Event>,
                newValue: string | null
              ) =>
                setFilters((prev) => ({
                  ...prev,
                  transaction_type: newValue || "",
                }))
              }
              renderInput={(params) => (
                <TextField {...params} size="small" label="Transaction Type" />
              )}
            />
          </Stack>
          <XTable
            columns={[
              {
                id: "reported_date",
                label: "Reported Date",
              },
              {
                id: "insider_name",
                label: "Insider Name",
                align: "left",
              },
              {
                id: "Director",
                label: "Director",
                cellRenderer: ({ row }: { row: any }) =>
                  row["Director"] ? (
                    <CheckIcon sx={{ color: "green" }} />
                  ) : (
                    <CloseIcon sx={{ color: "red" }} />
                  ),
              },
              {
                id: "Officer",
                label: "Officer",
                cellRenderer: ({ row }: { row: any }) =>
                  row["Officer"] ? (
                    <CheckIcon sx={{ color: "green" }} />
                  ) : (
                    <CloseIcon sx={{ color: "red" }} />
                  ),
              },
              {
                id: "TenPercentOwner",
                label: "10% Owner",
                cellRenderer: ({ row }: { row: any }) =>
                  row["TenPercentOwner"] ? (
                    <CheckIcon sx={{ color: "green" }} />
                  ) : (
                    <CloseIcon sx={{ color: "red" }} />
                  ),
              },
              {
                id: "transaction_type",
                label: "Transaction Type",
                align: "left",
              },
              {
                id: "shares",
                label: "Shares",
                align: "right",
                cellRenderer: ({ column, row }: { column: any; row: any }) =>
                  row[column.id] ? +row[column.id].toLocaleString() : "",
              },
              {
                id: "price",
                label: "Price",
                align: "right",
                cellRenderer: ({ column, row }: { column: any; row: any }) =>
                  row[column.id] ? currencyFormat(row[column.id]) : "",
              },
              {
                id: "remaining",
                label: "Remaining",
                align: "right",
                cellRenderer: ({ column, row }: { column: any; row: any }) =>
                  row[column.id] ? currencyFormat(row[column.id]) : "",
              },
              {
                id: "OfficerTitle",
                label: "Officer Title",
                align: "left",
              },
            ]}
            rows={filtering(rows, filters)}
            onSelectRow={onSelectRow}
          />
        </XPanel>
      )}
    </Box>
  );
};
