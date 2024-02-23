/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Breadcrumbs,
  IconButton,
  Link,
  Typography,
  Divider,
  Backdrop,
  CircularProgress,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ICustomInstance } from "./interfaces";
import { XAccordion } from "../../../../components/XAccordion";
import {
  useCreateFeatureInstanceMutation,
  useIngestFilesMutation,
  useGenerateInvestmentReportMutation,
  useLazyGetFilesDataQuery,
} from "../../../../redux/services/transcriptAPI";
import { investmentTemplateDict } from "../../../../shared/models/constants";

const generateMD = (
  categories: { category: string; questions: string[] }[]
): string => {
  return categories.reduce(
    (a: string, c: { category: string; questions: string[] }) => {
      a += `## ${c.category} \n\n`;
      for (const question of c.questions) {
        a += `- **${question}** \n`;
      }
      a += "\n\n";
      return a;
    },
    ""
  );
};

export const ReviewFiles = ({
  instance,
  onPrev,
  onNext,
  onGotoMain,
}: {
  instance: ICustomInstance;
  onPrev: () => void;
  onNext: (args: ICustomInstance) => void;
  onGotoMain: () => void;
}) => {
  const [createInstance, { isLoading: loadingCreateInstance }] =
    useCreateFeatureInstanceMutation();

  const [ingestFiles, { isLoading: loadingIngest }] = useIngestFilesMutation();
  const [getFilesData, { isLoading: loadingFilesdata }] =
    useLazyGetFilesDataQuery();

  const [generateReport, { isLoading: loadingReport }] =
    useGenerateInvestmentReportMutation();

  const [selectedTab, setSelectedTab] = useState<string>("All");

  const onNextStep = useCallback(async () => {
    try {
      await ingestFiles({
        analysis_type: "transcript",
        files: instance.instance_metadata.uploaded_files,
      });
      const responseFileData: any = await getFilesData({
        docs: instance.instance_metadata.uploaded_files.map((file) => ({
          name: file.name,
          analysis_type: "transcript",
        })),
      }).unwrap();
      console.log(responseFileData, "###responseFileData");
      const responseReport = await generateReport({
        template: generateMD(
          investmentTemplateDict[instance.instance_metadata!.template_name!]
        ),
        data: JSON.stringify({
          answer: responseFileData.reduce((a: any, c: any) => {
            a[c.file_name] = c.text_content;
            return a;
          }, {}),
        }),
      }).unwrap();
      console.log(responseReport, "Generated report");
      const responseInstance = await createInstance({
        ...instance,
        instance_metadata: {
          ...instance.instance_metadata,
          report: responseReport?.length > 0 ? responseReport[0] : "",
        },        
      }).unwrap();
      onNext({...responseInstance, saved: true} as ICustomInstance);
    } catch (e) {
      console.log("Error in next step", e);
    }
  }, [
    createInstance,
    ingestFiles,
    generateReport,
    getFilesData,
    onNext,
    instance,
  ]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={
          loadingCreateInstance ||
          loadingIngest ||
          loadingReport ||
          loadingFilesdata
        }
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={onPrev} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" onClick={onGotoMain}>
            Create Investment Memo
          </Link>
          <Typography color="text.primary">Review Files</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button variant="contained" sx={{ minWidth: 140 }} onClick={onNextStep}>
          Create Report
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={2}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            {[
              { category: "All" },
              ...investmentTemplateDict[
                instance.instance_metadata!.template_name!
              ],
            ].map((item) => (
              <Tab
                key={item.category}
                value={item.category}
                label={item.category}
              />
            ))}
          </Tabs>
        </Box>
        <Box pb={2}>
          {selectedTab === "All" ? (
            <XAccordion
              defaultExpanded
              options={investmentTemplateDict[
                instance.instance_metadata!.template_name!
              ].map((item) => ({
                summary: item.category,
                detail: item.questions.map((question, index) => (
                  <p key={question}>
                    {index + 1}. {question}
                  </p>
                )),
              }))}
            />
          ) : (
            investmentTemplateDict[instance.instance_metadata!.template_name!]
              .find((item) => item.category === selectedTab)!
              .questions.map((question, index) => (
                <p key={question}>
                  {index + 1}. {question}
                </p>
              ))
          )}
        </Box>
      </Stack>
    </Box>
  );
};
