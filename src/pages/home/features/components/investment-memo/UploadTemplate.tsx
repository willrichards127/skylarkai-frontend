/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  colors,
  Breadcrumbs,
  Link,
  Typography,
  Divider,
  RadioGroup,
  Radio,
  FormControlLabel,
  Backdrop,
  CircularProgress,
  Stack,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { FileUploader } from "../../../../../components/FileUploader";
import { ICustomInstance } from "./interfaces";
import {
  useCreateFeatureInstanceMutation,
  useIngestFilesMutation,
  useGenerateInvestmentReportMutation,
  useGetSiteContentMutation,
  useLazyGetFilesDataQuery,
} from "../../../../../redux/services/transcriptAPI";
import { investmentTemplate } from "../../../../../models/constants";
import { getDomainFromUrl } from "../../../../../shared/utils/basic";

export const UploadTemplate = ({
  instance,
  onUploadedTemplate,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onUploadedTemplate: (doc?: string) => void;
  onNext: (args: ICustomInstance) => void;
  onGotoMain: () => void;
}) => {
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();

  const [ingestFiles, { isLoading: loadingIngest }] = useIngestFilesMutation();
  const [getFilesData, { isLoading: loadingFilesdata }] =
    useLazyGetFilesDataQuery();
  const [scrapeWebContent, { isLoading: loadingWebContent }] =
    useGetSiteContentMutation();

  const [generateReport, { isLoading: loadingReport }] =
    useGenerateInvestmentReportMutation();

  const [file, setFile] = useState<File | undefined>();
  const [fileContent, setFileContent] = useState<string>("");
  const [uploadType, setUploadType] = useState<"default" | "custom">("default");

  const onFileUploaded = useCallback(
    (files: File[]) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          setFileContent(e.target.result);
        }
      };
      reader.readAsDataURL(files[0]);
      setFile(files[0]);
      onUploadedTemplate(files[0].name);
    },
    [onUploadedTemplate]
  );

  const onChangeUploadType = useCallback(
    (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setUploadType(value as "default" | "custom");
      setFile(undefined);
      if (value === "default") {
        onUploadedTemplate();
      } else {
        setFileContent("");
      }
    },
    [onUploadedTemplate]
  );

  const onNextStep = useCallback(async () => {
    try {
      const resWebContent: any = await scrapeWebContent({
        website_url: getDomainFromUrl(instance.company_url!),
      }).unwrap();

      let template = "";
      if (file) {
        await ingestFiles({
          analysis_type: "template",
          files: [file],
        });
        const responseFileData = await getFilesData({
          docs: [{ name: file.name, analysis_type: "template" }],
        }).unwrap();        
        template =
          responseFileData?.length > 0 ? responseFileData[0] : "";
      }
      const responseReport = await generateReport({
        template: template || investmentTemplate,
        data: Object.values(resWebContent.text_content).join("\n"),
      }).unwrap();
      const responseInstance = await createInstance({
        ...instance,
        instance_metadata: {
          template: file?.name || "",
          report: responseReport?.length > 0 ? responseReport[0] : "",
        },
      }).unwrap();
      onNext(responseInstance as ICustomInstance);
    } catch (e) {
      console.log("Error in next step", e);
    }
  }, [
    createInstance,
    ingestFiles,
    scrapeWebContent,
    generateReport,
    getFilesData,
    onNext,
    file,
    instance,
  ]);

  useEffect(() => {
    if(uploadType === 'default') {
      setFileContent(investmentTemplate);
    }
  }, [uploadType])

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={
          loadingCreateInstance ||
          loadingIngest ||
          loadingReport ||
          loadingFilesdata ||
          loadingWebContent
        }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Create Investment Memo
          </Link>
          <Typography color="text.primary">Select Template</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onNextStep}
          disabled={uploadType === 'custom' && !file}
        >
          Next
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={2}>
        <Typography variant="body2" gutterBottom>
          Choose Template for Investement memo report.
        </Typography>
        <RadioGroup
          value={uploadType}
          onChange={onChangeUploadType}
          name="radio-buttons-group"
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControlLabel
              value="default"
              control={<Radio />}
              label="Use Default"
            />
            <FormControlLabel
              value="custom"
              control={<Radio />}
              label="Upload Investment Memo Template"
            />
          </Box>
        </RadioGroup>
        {uploadType === "custom" && (
          <Box sx={{ width: 320 }}>
            <FileUploader
              initialFiles={file ? [file] : []}
              onUploadCompleted={onFileUploaded}
              isOneFileOnly
            />
          </Box>
        )}
      </Stack>
      <Divider sx={{ my: 2 }} />
      {!!fileContent && (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            overflowY: "auto",
            height: "calc(100% - 170px)",
          }}
        >
          {uploadType === "custom" ? (
            <iframe src={fileContent} width="80%" height="100%" />
          ) : (
            <Box
              sx={{
                width: "80%",
                bgcolor: "white",
                color: "black",
                px: 10,
                py: 8,
                position: "absolute",
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  pre: (props) => <div {...(props as any)} />,
                  table: (props) => (
                    <table
                      {...props}
                      style={{
                        borderCollapse: "collapse",
                        margin: "4px 2px",
                        overflowX: "auto",
                      }}
                    />
                  ),
                  th: (props) => (
                    <th
                      {...props}
                      style={{
                        textAlign: "center",
                        padding: "2px 4px",
                        color: "white",
                        background: "black",
                        border: `1px solid ${colors.grey[500]}`,
                      }}
                    />
                  ),
                  td: (props) => (
                    <td
                      {...props}
                      style={{
                        textAlign: "center",
                        padding: "4px 8px",
                        border: `1px solid ${colors.grey[500]}`,
                      }}
                    />
                  ),
                }}
              >
                {fileContent}
              </ReactMarkdown>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
