/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useMemo } from "react";
import {
  Box,
  Button,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { XModal } from "../../../../../components/XModal";
import { XTable } from "../../../../../components/table";
import { genYears } from "../../../../../shared/utils/basic";
import {
  useFetchFilesMutation,
  useGetFilesQuery,
} from "../../../../../redux/services/transcriptAPI";

const sortRows = (
  rows: any[],
  sorting: {
    order: "asc" | "desc";
    orderBy?: string;
    orderType?: "text" | "number" | "date";
  }
) => {
  const sorted = [...rows];
  if (sorting.orderBy) {
    return sorted.sort((a, b) => {
      if (sorting.orderType === "number") {
        return sorting.order === "asc"
          ? +a[sorting.orderBy!] - +b[sorting.orderBy!]
          : +b[sorting.orderBy!] - +a[sorting.orderBy!];
      }
      if (sorting.orderType === "date") {
        return sorting.order === "asc"
          ? new Date(a[sorting.orderBy!]).getTime() -
              new Date(b[sorting.orderBy!]).getTime()
          : new Date(b[sorting.orderBy!]).getTime() -
              new Date(a[sorting.orderBy!]).getTime();
      }
      return sorting.order === "asc"
        ? a[sorting.orderBy!].localeCompare(b[sorting.orderBy!])
        : b[sorting.orderBy!].localeCompare(a[sorting.orderBy!]);
    });
  }
  return sorted;
};

export const FetchFilesModal = ({
  open,
  onClose,
  company_name,
  ticker,
  analysis_type,
}: {
  open: boolean;
  company_name: string;
  ticker: string;
  analysis_type: "edgar" | "transcript" | "transaction";
  onClose: () => void;
}) => {
  const { isLoading, data } = useGetFilesQuery({
    analysis_type,
    company_name,
    ticker,
  });
  
  const [fetchFiles] = useFetchFilesMutation();

  const years = genYears();
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [numYears, setNumYears] = useState<number>(0);
  const [sorting, setSorting] = useState<{
    order: "asc" | "desc";
    orderBy?: string;
    orderType?: "text" | "number" | "date";
  }>({
    order: "asc",
  });

  const columns = useMemo(() => {
    if (analysis_type === "edgar") {
      return [
        {
          id: "form_type",
          label: "Form",
          sortable: true,
        },
        {
          id: "filing_date",
          label: "Filing Date",
          sortable: true,
          type: "date",
        },
        {
          id: "file_name",
          label: "Filename",
          sortable: true,
        },
      ];
    } else if (analysis_type === "transcript") {
      return [
        {
          id: "name",
          label: "Name",
          sortable: true,
        },
        {
          id: "title",
          label: "Title",
          sortable: true,
        },
        {
          id: "quarter",
          label: "Quarter",
          type: "number",
          sortable: true,
        },
        {
          id: "year",
          label: "Year",
          type: "number",
          sortable: true,
        },
      ];
    } else {
      return [
        {
          id: "insider_name",
          label: "Insider Name",
          sortable: true,
        },
        {
          id: "file_name",
          label: "Filename",
          sortable: true,
        },
        {
          id: "reported_date",
          label: "Reported Date",
          type: "date",
          sortable: true,
        },
      ];
    }
  }, [analysis_type]);

  const onSort = useCallback(
    (columnId: string, order: string) => {
      const column = columns.find((col) => col.id === columnId);
      setSorting({
        order: order as "asc" | "desc",
        orderBy: columnId,
        orderType: column?.type as any,
      });
    },
    [columns]
  );

  const onChange = useCallback(
    (_: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
      newValue && setSelectedYear(newValue);
    },
    []
  );
  const onSubmit = useCallback(() => {
    fetchFiles({
      company_name,
      ticker,
      analysis_type: analysis_type === "transaction" ? "edgar" : analysis_type,
      start_year: selectedYear,
      ...(analysis_type === "transcript" && { number_of_years: numYears }),
    });
    toast.info("Your request is submitted successfully. ");
    onClose();
  }, [
    fetchFiles,
    onClose,
    selectedYear,
    numYears,
    analysis_type,
    company_name,
    ticker,
  ]);

  const rows = useMemo(() => {
    if (!data) return [];
    if (analysis_type === "edgar" || analysis_type === "transaction") {
      return data;
    } else {
      return data.map((row: any) => {
        const splited = row.file_name.split("_");
        return {
          name: splited[0],
          title: "Earning Call",
          quarter: splited[1],
          year: splited[2],
        };
      });
    }
  }, [data, analysis_type]);

  return (
    <XModal
      open={open}
      onClose={onClose}
      header={`Fetch ${analysis_type} files for ${company_name} (${ticker}) `}
      footer={
        <Box sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={
              !selectedYear || (analysis_type === "transcript" && !numYears)
            }
          >
            Submit
          </Button>
        </Box>
      }
      size="md"
    >
      <Typography variant="subtitle1" mb={4}>
        Files for {company_name} are not available in our database. if you want
        to download {analysis_type} files, please select year and submit it.
        This action takes time.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "flex-top", mb: 2, gap: 2 }}>
        <Autocomplete
          options={years}
          filterSelectedOptions
          value={selectedYear}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label={analysis_type === "edgar" ? "Start Year" : "End Year"}
            />
          )}
          sx={{ mb: 2, minWidth: 320 }}
        />

        {analysis_type === "transcript" && (
          <TextField
            size="small"
            type="number"
            label="Number of years"
            value={numYears}
            onChange={(e) => setNumYears(+e.target.value)}
            InputProps={{
              inputProps: { min: 0, max: 5 },
            }}
            sx={{
              minWidth: 200,
            }}
          />
        )}
      </Box>
      <Typography variant="body2" gutterBottom>
        Available files
      </Typography>
      <XTable
        loading={isLoading}
        maxHeight={400}
        columns={columns}
        rows={sortRows(rows, sorting)}
        onSort={onSort}
      />
    </XModal>
  );
};
