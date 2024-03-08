/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, useRef } from "react";
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ICustomInstance } from "./interfaces";
import { XAccordion } from "../../../../components/XAccordion";
import {
  useCreateFeatureInstanceMutation,
  useIngestFilesMutation,
  // useGetSiteContentMutation,
  useReportSectionTemplateMutation,
} from "../../../../redux/services/transcriptAPI";
// import { useLazyGetReportQuery } from "../../../../redux/services/reportApi";
import { parseCitationInReport } from "../../../../shared/utils/string";

const generateMD = (
  companyName: string,
  reportData: Record<string, string>
): string => {
  let reportMD: string = `<h1>Investment Memo Report: ${companyName}</h1><br /><b>Created: ${new Date().toDateString()}</b><br />
  `;
  Object.values(reportData).forEach((section) => {
    reportMD += section;
  });
  return parseCitationInReport(reportMD);
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
  // const [getWebsiteContent, { isLoading: loadingWebContent }] =
  //   useGetSiteContentMutation();
  const [generateReportSection, { isLoading: loadingSection }] =
    useReportSectionTemplateMutation();

  // const [generateReport, { isLoading: generatingReport }] =
  //   useGenerateInvestmentReportMutation();

  // const [getReport, { isLoading: loadingReport }] = useLazyGetReportQuery();
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [processStep, setProcessStep] = useState<number>(0);
  const processedDataDictRef = useRef<Record<string, string>>();

  const onNextStep = useCallback(async () => {
    try {
      // let webContent;
      // if (instance.company_url) {
      //   webContent = await getWebsiteContent({
      //     website_url: instance.company_url,
      //   }).unwrap();
      // }

      await ingestFiles({
        analysis_type: "template",
        files: instance.instance_metadata.uploaded_files,
      });

      for (const [
        categoryIndex,
        { category, questions },
      ] of instance.instance_metadata.template_content.entries()) {
        const data = await generateReportSection({
          question: category,
          sub_question: questions,
          template: `# ${category}`,
          analysis_type: "investmentmemo",
          company_name: instance.company_name,
        }).unwrap();
        processedDataDictRef.current = {
          ...processedDataDictRef.current,
          [category]: data.filled_template,
        };
        setProcessStep(categoryIndex + 1);
      }
      // if (webContent) {
      //   processedDataDictRef.current = {
      //     ...processedDataDictRef.current,
      //     website: {
      //       text_content: webContent.text_content,
      //     },
      //   };
      // }

      const responseInstance = await createInstance({
        ...instance,
        instance_metadata: {
          ...instance.instance_metadata,
          report: generateMD(
            instance.company_name,
            processedDataDictRef.current!
          ),
        },
      }).unwrap();
      onNext({ ...responseInstance, saved: true } as ICustomInstance);
    } catch (e) {
      console.log("Error in next step", e);
    }
  }, [
    ingestFiles,
    instance,
    // getWebsiteContent,
    generateReportSection,
    createInstance,
    onNext,
  ]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingCreateInstance || loadingIngest}
      >
        <Stack spacing={1} alignItems="center">
          <CircularProgress color="inherit" />
          <Typography variant="caption" textAlign="center" mt={1}>
            Data Processing...
          </Typography>
        </Stack>
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton size="small" onClick={onPrev} sx={{ mr: 1 }}>
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link
            underline="hover"
            color="inherit"
            href="#"
            onClick={onGotoMain}
            sx={{ pointerEvents: loadingSection ? "none" : "auto" }}
          >
            Create Investment Memo
          </Link>
          <Typography color="text.primary">Review Files</Typography>
        </Breadcrumbs>
        <Box mr="auto" />
        <Button
          variant="contained"
          sx={{ minWidth: 140 }}
          onClick={onNextStep}
          disabled={loadingSection}
        >
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
              ...instance.instance_metadata.template_content,
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
              options={instance.instance_metadata.template_content.map(
                (item, index) => ({
                  summary: (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {item.category} ({item.questions.length} Questions)
                      <Box>
                        {processedDataDictRef.current?.[item.category] ? (
                          <CheckCircleIcon
                            sx={{ color: "success.main", fontSize: 18 }}
                          />
                        ) : (processStep === index && loadingSection) ? (
                          <CircularProgress size={14} />
                        ) : (
                          <></>
                        )}
                      </Box>
                    </Box>
                  ),
                  detail: item.questions.map((question, index) => (
                    <Box
                      key={question}
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>
                        {index + 1}. {question}
                      </p>
                    </Box>
                  )),
                })
              )}
            />
          ) : (
            instance.instance_metadata.template_content
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
