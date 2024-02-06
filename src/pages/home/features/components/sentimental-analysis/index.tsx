/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateReport } from "./CreateReport";
import { SelectDocuments } from "./SelectDocuments";
import { Report } from "./Report";
import { DocumentChip } from "../../../../../components/DocumentChip";
import { ICustomInstance } from "./interfaces";
import { leftNavWidth } from "../../../../../models/constants";
import { uniqueArr } from "../../../../../shared/utils/basic";
import { ITranscript } from "../../../../../redux/interfaces";

const SentimentalAnalysisFeature = ({ featureId }: { featureId: number }) => {
  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: { docs: [] },
  });

  const onRemoveFile = useCallback((removeFilename: string) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        docs: prev.instance_metadata!.docs.filter(
          (doc: ITranscript) => doc.file_name !== removeFilename
        ),
      },
    }));
  }, []);

  const onFirstStepCompleted = useCallback((args: Partial<ICustomInstance>) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      ...(!args.saved && {
        instance_metadata: {
          docs: [],
          report: "",
          criteria: [],
        },
      }),
      step: args.saved ? "report" : "select_documents",
    }));
  }, []);

  const onSecondStepCompleted = useCallback((args: ICustomInstance) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      step: "report",
    }));
  }, []);

  const onGotoMain = useCallback(() => {
    setInstance({
      step: "create_instance",
      feature_id: featureId,
      instance_name: "",
      company_name: "",
      ticker: "",
      instance_metadata: { criteria: [], docs: [], report: "" },
    });
  }, []);

  const onChangeDocuments = useCallback(({ docs }: { docs: ITranscript[] }) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        docs: uniqueArr(
          [...(prev.instance_metadata?.docs || []), ...docs],
          ["file_name"]
        ) as ITranscript[],
      },
    }));
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <LeftNavbar
        featureNavSection={
          <>
            <Divider />
            {instance.step !== "create_instance" && (
              <Box sx={{ pl: 3, py: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Selected Documents
                </Typography>
                <Stack
                  spacing={1}
                  sx={{ maxHeight: 320, overflowY: "auto", pr: 4 }}
                >
                  {(instance.instance_metadata?.docs || []).map((doc) => (
                    <DocumentChip
                      key={doc.file_name}
                      label={doc.file_name}
                      deletable={
                        instance.step === "select_documents" && !instance.saved
                      }
                      selected={
                        instance.step === "chat" &&
                        instance.view_doc === doc.file_name
                      }
                      // onClick={() => onViewFile(doc.file_name)}
                      onDelete={() => onRemoveFile(doc.file_name)}
                    />
                  ))}
                </Stack>
              </Box>
            )}
          </>
        }
      />
      <Box
        sx={{
          width: `calc(100% - ${leftNavWidth}px)`,
          overflowY: "auto",
          height: "100%",
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {instance.step === "create_instance" && (
            <CreateReport instance={instance} onNext={onFirstStepCompleted} />
          )}
          {instance.step === "select_documents" && (
            <SelectDocuments
              instance={instance}
              onChangeDocuments={onChangeDocuments}
              onNext={onSecondStepCompleted}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "report" && (
            <Report instance={instance} onGotoMain={onGotoMain} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SentimentalAnalysisFeature;
