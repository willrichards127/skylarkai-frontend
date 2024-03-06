/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { Box, Button, Typography, Stack, Divider } from "@mui/material";
import { toast } from "react-toastify";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateChat } from "./CreateChat";
import { SelectDocuments } from "./SelectDocuments";
import { Chat } from "./Chat";
import { Report } from "./Report";
import { DocumetIcon } from "../../../../components/Svgs";
import { DocumentChip } from "../../../../components/DocumentChip";
import { ICustomInstance } from "./interfaces";
import { ITranscript } from "../../../../redux/interfaces";
import { leftNavWidth } from "../../../../shared/models/constants";
import { uniqueArr } from "../../../../shared/utils/basic";

const AnalyzeEarningCallsFeature = ({ featureId }: { featureId: number }) => {
  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: { docs: [] },
  });

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

  const onViewFile = useCallback((filename: string) => {
    setInstance((prev) => ({
      ...prev,
      view_doc: filename,
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
        },
      }),
      step: args.saved ? "chat" : "select_documents",
    }));
  }, []);

  const onSecondStepCompleted = useCallback((args: ICustomInstance) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      view_doc: prev.instance_metadata!.docs[0].file_name,
      step: "chat",
    }));
  }, []);

  const onCompareDocs = useCallback(() => {
    if (instance.instance_metadata?.docs?.length === 2) {
      setInstance((prev) => ({ ...prev, step: "compare_doc" }));
    } else {
      toast.warn("You must select only 2 files to use this feature.");
    }
  }, [instance]);

  const onGotoMain = useCallback(() => {
    setInstance({
      step: "create_instance",
      feature_id: featureId,
      instance_name: "",
      company_name: "",
      ticker: "",
      instance_metadata: { docs: [], report: "" },
    });
  }, [featureId]);

  const onChangeViewFile = useCallback((filename: string) => {
    setInstance((prev) => ({ ...prev, view_doc: filename }));
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <LeftNavbar
        featureNavSection={
          <>
            {instance.step === "chat" && (
              <>
                <Divider />
                <Button
                  startIcon={<DocumetIcon />}
                  sx={{ my: 2, ml: 8 }}
                  onClick={onCompareDocs}
                >
                  Compare Earnings Call
                </Button>
              </>
            )}
            <Divider />
            {instance.step !== "create_instance" && (
              <Box sx={{ pl: 3, py: 2 }}>
                <Typography variant="body1" gutterBottom>
                  Selected Documents
                </Typography>
                <Stack
                  spacing={1}
                  sx={{ maxHeight: 240, overflowY: "auto", pr: 4 }}
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
                      onClick={() => onViewFile(doc.file_name)}
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
            <CreateChat instance={instance} onNext={onFirstStepCompleted} />
          )}
          {instance.step === "select_documents" && (
            <SelectDocuments
              instance={instance}
              onChangeDocuments={onChangeDocuments}
              onNext={onSecondStepCompleted}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "chat" && (
            <Chat
              instance={instance}
              onGotoMain={onGotoMain}
              onChangeViewFile={onChangeViewFile}
            />
          )}
          {instance.step === "compare_doc" && (
            <Report instance={instance} onGotoMain={onGotoMain} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyzeEarningCallsFeature;
