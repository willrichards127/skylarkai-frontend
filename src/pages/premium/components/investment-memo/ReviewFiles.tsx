/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState, useRef, useMemo } from "react";
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
  useCustomQueryMutation,
} from "../../../../redux/services/transcriptAPI";
import { parseCitationInReport } from "../../../../shared/utils/string";

const generateMD = (
  companyName: string,
  reportData: Record<string, Record<string, string>>
): string => {
  let reportMD: string = `<h1>Investment Memo Report: ${companyName}</h1><br /><b>Created: ${new Date().toDateString()}</b><br />
  `;
  Object.entries(reportData).forEach(([category, qa]) => {
    reportMD += `<br /><h2>${category}</h2>`;
    Object.entries(qa).forEach(([question, answer]) => {
      reportMD += `<br /><h3>${question}</h3><p>${answer}<p><br />`;
    });
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
  const [customQuery, { isLoading: loadingCustomQuery }] =
    useCustomQueryMutation();

  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [processStatus, setProcessStatus] = useState<string>("");
  const processedDataDictRef = useRef<Record<string, Record<string, string>>>(
    {}
  );

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
        for (const [questionIndex, question] of questions.entries()) {
          const data = await customQuery({
            filenames: instance.instance_metadata.uploaded_file_names,
            question,
            analysis_type: "transcript",
          }).unwrap();
          processedDataDictRef.current = {
            ...processedDataDictRef.current,
            [category]: {
              ...(processedDataDictRef.current?.[category] || {}),
              [question]: data.content as string,
            },
          };
          setProcessStatus(`${categoryIndex + 1}/${questionIndex + 1}`);
        }
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
            processedDataDictRef.current
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
    customQuery,
    createInstance,
    onNext,
  ]);

  const isQueryProcessing = useMemo(() => {
    if (!processStatus && !loadingCustomQuery) return false;
    if (loadingCreateInstance) return true;
    const finalStatus = `${
      instance.instance_metadata.template_content.length
    }/${
      instance.instance_metadata.template_content[
        instance.instance_metadata.template_content.length - 1
      ].questions.length
    }`;
    if (loadingCustomQuery || processStatus !== finalStatus) return true;
    return false;
  }, [loadingCreateInstance, processStatus, loadingCustomQuery, instance]);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingIngest}
      >
        <Stack spacing={1} alignItems="center">
          <CircularProgress color="inherit" />
          <Typography variant="caption" textAlign="center" mt={1}>
            Data Processing...
          </Typography>
        </Stack>
      </Backdrop>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="small"
          disabled={loadingIngest || isQueryProcessing}
          onClick={onPrev}
          sx={{ mr: 1 }}
        >
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link
            underline="hover"
            color="inherit"
            href="#"
            onClick={onGotoMain}
            sx={{
              pointerEvents:
                loadingIngest || isQueryProcessing ? "none" : "auto",
            }}
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
          disabled={loadingIngest || isQueryProcessing}
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
                (item) => ({
                  summary: (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {item.category}
                      <span>
                        {processedDataDictRef.current?.[item.category]
                          ? Object.values(
                              processedDataDictRef.current[item.category]
                            ).length
                          : 0}
                        /{item.questions.length}
                      </span>
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
                      {processedDataDictRef.current?.[item.category]?.[
                        question
                      ] ? (
                        <CheckCircleIcon
                          sx={{ color: "success.main", fontSize: 18 }}
                        />
                      ) : (
                        loadingCustomQuery && <CircularProgress size={14} />
                      )}
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
