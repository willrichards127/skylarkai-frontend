import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

import { XModal } from "../../../../components/XModal";
import { NeutralLoadingButton } from "../../../../components/buttons/NeutralLoadingButton";
import { useGetSetupsQuery } from "../../../../redux/services/setupApi";
import {
  useGenerateReportMutation,
  useGenerateWarrantReportMutation,
} from "../../../../redux/services/reportApi";
import {
  REPORTS_DICT,
  EdgarFilings,
} from "../../../../shared/models/constants";

export const NewReportModal = memo(
  ({ open, onClose }: { open: boolean; onClose: () => void }) => {
    const navigate = useNavigate();
    const params = useParams();
    const { isLoading, data } = useGetSetupsQuery({ unitId: +params.unitId! });
    const [
      generateReport,
      {
        isLoading: isGeneratingReport,
        isSuccess: isGeneratedReport,
        data: generatedReportId,
      },
    ] = useGenerateReportMutation();

    const [
      generateWarrantReport,
      {
        isLoading: isGeneratingWarrantReport,
        isSuccess: isGeneratedWarrantReport,
        data: generatedWarrantReportId,
      },
    ] = useGenerateWarrantReportMutation();

    const [documentType, setDocumentType] = useState<string>("report");
    const [form, setForm] = useState<{
      company?: number;
      report?: string;
    }>({
      report: "commercialduediligence",
    });

    const [filing, setFiling] = useState<string>(EdgarFilings[0].value);

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      },
      []
    );

    const onChangeFiling = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFiling(e.target.value);
      },
      []
    );

    /** FIXME: React Navigate */
    const onSubmit = useCallback(() => {
      if (documentType === "report") {
        generateReport({
          setupId: form.company!,
          queryType: form.report!,
          template: REPORTS_DICT[form.report!].template,
        });
      } else {
        const matched = EdgarFilings.find((item) => item.value === filing);
        generateWarrantReport({
          setupId: form.company!,
          question: matched!.question,
          reportName: matched!.value,
        });
      }
    }, [form, documentType, filing, generateReport, generateWarrantReport]);

    const onCreateNew = useCallback(() => {
      navigate("/portal/setups/");
    }, [navigate]);

    const onChangeDocumentType = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setDocumentType((event.target as HTMLInputElement).value);
    };

    useEffect(() => {
      if (isLoading || !data || !data.length) return;
      setForm((prev) => ({ ...prev, company: +data[0].id! }));
    }, [isLoading, data]);

    useEffect(() => {
      if (isGeneratedReport && generatedReportId) {
        navigate(
          `/portal/reports/${generatedReportId}?reportType=${form.report}&setupId=${form.company}&newReport=true`
        );
      }
    }, [navigate, isGeneratedReport, generatedReportId]);

    useEffect(() => {
      if (isGeneratedWarrantReport && generatedWarrantReportId) {
        navigate(
          `/portal/reports/${generatedWarrantReportId}?reportType=${form.report}&setupId=${form.company}`
        );
      }
    }, [navigate, isGeneratedWarrantReport, generatedWarrantReportId]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="md"
        header="New Report"
        footer={
          <Box
            sx={{
              width: "100%",
              display: "flex",
              p: 2,
              borderRadius: 2,
              bgcolor: "secondary.main",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" mr="auto">
              Create New Setup
            </Typography>
            <Button
              variant="contained"
              sx={{ minWidth: 120 }}
              onClick={onCreateNew}
            >
              Create New
            </Button>
          </Box>
        }
      >
        {isLoading || isGeneratingReport || isGeneratingWarrantReport ? (
          <Box textAlign="center" p={4}>
            <CircularProgress />
          </Box>
        ) : (
          <Box pt={2}>
            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                select
                size="small"
                name="company"
                label="Target Company"
                value={form.company}
                onChange={onChange}
                SelectProps={{
                  native: true,
                }}
              >
                {(data || []).map((company) => (
                  <option key={company.id!} value={company.id!}>
                    {company.name!}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box my={4}>
              <FormLabel>Document Type</FormLabel>
              <RadioGroup value={documentType} onChange={onChangeDocumentType}>
                {["report", "filing"].map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={
                      <Box sx={{ textTransform: "capitalize" }}>{item}</Box>
                    }
                  />
                ))}
              </RadioGroup>
            </Box>
            <Box sx={{ mb: 2 }}>
              {documentType === "report" ? (
                <TextField
                  fullWidth
                  select
                  size="small"
                  name="report"
                  label="Report"
                  value={form.report}
                  onChange={onChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {Object.entries(REPORTS_DICT).map(([reportName, content]) => (
                    <option
                      key={reportName}
                      value={reportName}
                      style={{
                        fontWeight: !content.parent ? "normal" : "bold",
                        fontSize: !content.parent ? 12 : 16,
                      }}
                    >
                      {content.label}
                    </option>
                  ))}
                </TextField>
              ) : (
                <TextField
                  fullWidth
                  select
                  size="small"
                  name="filing"
                  label="EDGAR Filing"
                  value={filing}
                  onChange={onChangeFiling}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {EdgarFilings.map((item) => (
                    <option
                      key={item.value}
                      value={item.value}
                      style={{
                        fontSize: 16,
                      }}
                    >
                      {item.label}
                    </option>
                  ))}
                </TextField>
              )}
            </Box>
            <Box textAlign="end" mr={1}>
              <NeutralLoadingButton
                variant="contained"
                sx={{ minWidth: 120 }}
                onClick={onSubmit}
                disabled={!form.company || !form.report}
              >
                Submit
              </NeutralLoadingButton>
            </Box>
          </Box>
        )}
      </XModal>
    );
  }
);

NewReportModal.displayName = "NewReportModal";
