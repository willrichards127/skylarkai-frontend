/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  Link,
  Typography,
  Backdrop,
  CircularProgress,
  Grid,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { XPanel } from "../../../../../components/XPanel";
import { XTable } from "../../../../../components/table";
import { ICustomInstance } from "./interface";
import { IEdgarFile } from "../../../../../redux/interfaces";
import {
  useGetEdgarsQuery,
  useCreateFeatureInstanceMutation,
} from "../../../../../redux/services/transcriptAPI";
import { categorizeEdgars } from "../../../../../shared/utils/transformation";

export const SelectDocuments = ({
  instance,
  onChangeDocuments,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onChangeDocuments: (args: { docs: IEdgarFile[] }) => void;
  onNext: (args: ICustomInstance) => void;
  onGotoMain: () => void;
}) => {
  const { isLoading, data: edgars } = useGetEdgarsQuery({
    company_name: instance.company_name,
    ticker: instance.ticker,
  });
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();
  const [rows, setRows] = useState<
    Record<string, ({ selected?: boolean } & IEdgarFile)[]>
  >({});

  const onSelectRow = useCallback(
    (row: any, category: string) => {
      if (instance.saved) return;
      const prevRows = { ...rows };
      prevRows[category] = prevRows[category].map((prevRow: any) =>
        prevRow.file_name === row.file_name
          ? { ...prevRow, selected: !prevRow.selected }
          : prevRow
      );
      onChangeDocuments({
        docs: prevRows[category].filter((row: any) => !!row.selected),
      });
    },
    [rows, instance, onChangeDocuments]
  );

  const onNextStep = useCallback(async () => {
    const selectedDocuments = Object.values(rows).reduce(
      (pv: IEdgarFile[], cv: ({ selected?: boolean } & IEdgarFile)[]) => {
        pv = [...pv, ...cv.filter((row) => row.selected)];
        return pv;
      },
      []
    );
    const responseInstance = await createInstance({
      ...instance,
      instance_metadata: {
        docs: selectedDocuments,
      },
    }).unwrap();

    onNext(responseInstance as ICustomInstance);
  }, [createInstance, onNext, rows, instance]);

  useEffect(() => {
    if (isLoading || !edgars) return;
    const categorized = categorizeEdgars(edgars);
    setRows(categorized);
  }, [isLoading, edgars]);

  useEffect(() => {
    if (isLoading || !edgars) return;
    const selectedFilenames = (instance.instance_metadata?.docs || []).map(
      (row: IEdgarFile) => row.file_name
    );
    setRows((prev: any) => {
      const update = { ...prev };
      for (const key in update) {
        update[key] = update[key].map((prevRow: any) => ({
          ...prevRow,
          selected: selectedFilenames.includes(prevRow.file_name),
        }));
      }
      return update;
    });
  }, [instance, isLoading, edgars]);

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
            Ask SEC filings
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
      <XPanel sxProps={{ bgcolor: "#000D1C", py: 4, px: 8, mb: 8 }}>
        <Grid container spacing={4}>
          {Object.entries(rows).map(([category, records]) => (
            <Grid item sm={6} key={category}>
              <Typography variant="h6" gutterBottom>
                {category} ({records.length})
              </Typography>
              <XTable
                loading={isLoading}
                maxHeight={320}
                hasHeader={false}
                columns={[
                  {
                    id: "form_type",
                    label: "Form",
                  },
                  {
                    id: "title",
                    label: "Title",
                    align: "left"
                  },
                  {
                    id: "filing_date",
                    label: "Filing Date",
                  },
                ]}
                rows={records as any[]}
                onSelectRow={(row) => onSelectRow(row, category)}
              />
            </Grid>
          ))}
        </Grid>
      </XPanel>
    </Box>
  );
};
