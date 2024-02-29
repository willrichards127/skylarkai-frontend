/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateChat } from "./CreateChat";
import { SelectDocuments } from "./SelectDocuments";
import { Chat } from "./Chat";
import { FAQReport } from "./FAQReport";
// import { FAQIcon } from "../../../../../components/Svgs";
import { leftNavWidth } from "../../../../shared/models/constants";
import { myRandomInts, uniqueArr } from "../../../../shared/utils/basic";
import { DocumentChip } from "../../../../components/DocumentChip";
import { ICustomInstance } from "./interface";
import { IEdgarFile, ITopic } from "../../../../redux/interfaces";
import { suggestionDict } from "../../../../shared/models/constants";

const AskSecFilingsFeature = ({ featureId }: { featureId: number }) => {
  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: { docs: [], suggestions: [] },
  });

  const getSuggestions = (formTypes: string[]) => {
    if (formTypes.length < 2) {
      if (suggestionDict[formTypes[0]]) {
        return myRandomInts(
          suggestionDict[formTypes[0]].length < 3
            ? suggestionDict[formTypes[0]].length
            : 3,
          suggestionDict[formTypes[0]].length
        ).map((index) => suggestionDict[formTypes[0]][index]);
      }
    } else {
      return formTypes
        .reduce<ITopic[]>((prev: ITopic[], formType: string) => {
          if (suggestionDict[formType]) {
            const random = myRandomInts(1, suggestionDict[formType].length);
            return [...prev, suggestionDict[formType][random[0]]];
          } else {
            return prev;
          }
        }, [])
        .filter(
          (value: ITopic, index: number, self: ITopic[]) =>
            index === self.findIndex((v) => value.topic === v.topic)
        );
    }
    return [];
  };

  const onChangeDocuments = ({ docs }: { docs: IEdgarFile[] }) => {
    const currentDocs = uniqueArr(
      [...(instance.instance_metadata?.docs || []), ...docs],
      ["file_name"]
    ) as IEdgarFile[];
    const formTypes = currentDocs.map((doc) => doc.form_type);
    const suggestions = getSuggestions(formTypes);
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        docs: currentDocs,
        suggestions,
      },
    }));
  };

  const onRemoveFile = (removeFilename: string) => {
    const currentDocs = instance.instance_metadata!.docs.filter(
      (doc: IEdgarFile) => doc.file_name !== removeFilename
    );
    const formTypes = currentDocs.map((doc) => doc.form_type);
    const suggestions = getSuggestions(formTypes);
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        docs: currentDocs,
        suggestions,
      },
    }));
  };

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
          suggestions: [],
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

  const onChangeViewFile = useCallback((filename: string) => {
    setInstance((prev) => ({ ...prev, view_doc: filename }));
  }, []);

  const onGotoMain = useCallback(() => {
    setInstance({
      step: "create_instance",
      feature_id: featureId,
      instance_name: "",
      company_name: "",
      ticker: "",
      instance_metadata: { docs: [], suggestions: [] },
    });
  }, [featureId]);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <LeftNavbar
        featureNavSection={
          <>
            {/* <Divider />
            <Button
              startIcon={<FAQIcon />}
              sx={{ my: 2, ml: 8 }}
              onClick={onFAQ}
            >
              FAQ's Report
            </Button> */}
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
                      label={`${doc.form_type} ${doc.file_name}`}
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
              onChangeViewFile={onChangeViewFile}
              onGotoMain={onGotoMain}
            />
          )}
          {instance.step === "faq" && <FAQReport onGotoMain={onGotoMain} />}
        </Box>
      </Box>
    </Box>
  );
};

export default AskSecFilingsFeature;
