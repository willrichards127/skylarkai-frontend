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
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import update from "immutability-helper";
import * as marked from "marked";
import { ICustomInstance } from "./interfaces";
import {
  useCreateFeatureInstanceMutation,
  useIngestFilesMutation,
  useCustomQueryMutation,
} from "../../../../redux/services/transcriptAPI";
import Templateview from "../../../../components/TemplateView";
import { ITemplateItem } from "../../../../shared/models/interfaces";
import { longDateFormat } from "../../../../shared/utils/basic";

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
  const [items, setItems] = useState<ITemplateItem[]>(
    instance.instance_metadata.template_content
  );
  const [backDisabled, setBackDisabled] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [createInstance] = useCreateFeatureInstanceMutation();
  const [ingestFiles, { isLoading: loadingIngest }] = useIngestFilesMutation();
  const [customQuery] = useCustomQueryMutation();

  const handleCustomQuery = useCallback(
    async (templateItems: ITemplateItem[], depth: number[] = []) => {
      let result: string = "";
      for (let i = 0; i < templateItems.length; i++) {
        const item = templateItems[i];
        if (item.children) {
          const subResult = await handleCustomQuery(item.children, [
            ...depth,
            i,
          ]);
          result +=
            `<h${depth.length + 2}>${item.name}</h${depth.length + 2}>` +
            subResult;
        } else {
          const loadingObj = depth.reduceRight<any>(
            (acc, curr) => ({ [curr]: { children: acc } }),
            { [i]: { isLoading: { $set: true } } }
          );
          setItems((prev) => update(prev, loadingObj));
          // await new Promise((resolve) => setTimeout(resolve, 1000));
          const data = await customQuery({
            filenames: instance.instance_metadata.uploaded_file_names,
            question: item.name,
            analysis_type: "transcript",
          }).unwrap();
          result += `<h${depth.length + 3} class='heading-question'>${
            item.name
          }</h${depth.length + 3}>${
            marked.parse(data.content as string) as string
          }`;
          const successObj = depth.reduceRight<any>(
            (acc, curr) => ({ [curr]: { children: acc } }),
            { [i]: { isLoading: { $set: false }, isSuccess: { $set: true } } }
          );
          setItems((prev) => update(prev, successObj));
        }
      }
      return result;
    },
    [customQuery, instance]
  );

  const onNextStep = useCallback(async () => {
    try {
      setIsEditMode(false);
      setBackDisabled(true);
      await ingestFiles({
        analysis_type: "template",
        files: instance.instance_metadata.uploaded_files,
      });
      const ret = await handleCustomQuery(items);
      setBackDisabled(false);
      const report =
        `<h1 style="text-align: center;">Investment memo: ${
          instance.company_name
        }</h1>
        <p style="text-align: center;"><strong>${longDateFormat(
          new Date()
        )}</strong></p>` + ret;
      const responseInstance = await createInstance({
        ...instance,
        instance_metadata: {
          ...instance.instance_metadata,
          report,
        },
      }).unwrap();
      onNext(responseInstance as ICustomInstance);
    } catch (e) {
      console.log("Error in next step", e);
    }
  }, [ingestFiles, instance, handleCustomQuery, createInstance, items, onNext]);

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
          disabled={loadingIngest || backDisabled}
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
              pointerEvents: loadingIngest || backDisabled ? "none" : "auto",
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
          disabled={loadingIngest || backDisabled}
        >
          Create Report
        </Button>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Stack spacing={2}>
        <Templateview
          data={items}
          // onChangeData={setItems}
          isEditMode={isEditMode}
        />
      </Stack>
    </Box>
  );
};
