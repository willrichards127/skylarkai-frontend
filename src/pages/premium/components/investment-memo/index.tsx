/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import { LeftNavbar } from "../sub-components/LeftNavbar";
import { CreateReport } from "./CreateReport";
import { ICustomInstance } from "./interfaces";
import { leftNavWidth } from "../../../../shared/models/constants";
import { Report } from "./Report";
import { UploadTemplate } from "./UploadTemplate";
import { DocumentChip } from "../../../../components/DocumentChip";

const InvestmentMemoFeature = ({ featureId }: { featureId: number }) => {
  const [instance, setInstance] = useState<ICustomInstance>({
    step: "create_instance",
    feature_id: featureId,
    instance_name: "",
    company_name: "",
    ticker: "",
    instance_metadata: { template: "" },
  });

  const onRemoveFile = useCallback(() => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        ...prev.instance_metadata,
        template: "",
      },
    }));
  }, []);

  const onFirstStepCompleted = useCallback((args: Partial<ICustomInstance>) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      ...(!args.saved && {
        instance_metadata: {
          template: "",
          report: "",
        },
      }),
      step: args.saved ? "report" : "upload_template",
    }));
  }, []);

  const onSecondStepCompleted = useCallback((args: ICustomInstance) => {
    setInstance((prev) => ({
      ...prev,
      ...args,
      step: "report",
    }));
  }, []);

  const onUploadedTemplate = useCallback((doc?: string) => {
    setInstance((prev) => ({
      ...prev,
      instance_metadata: {
        ...prev.instance_metadata,
        template: doc || "",
      },
    }));
  }, []);

  const onGotoMain = useCallback(() => {
    setInstance({
      step: "create_instance",
      feature_id: featureId,
      instance_name: "",
      company_name: "",
      ticker: "",
      instance_metadata: { template: "", report: "" },
    });
  }, [featureId]);

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <LeftNavbar
        featureNavSection={
          <>
            <Divider />
            {!!instance.instance_metadata?.template &&
              instance.instance_metadata.template !== "default" && (
                <Box sx={{ pl: 3, py: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    Selected Template
                  </Typography>
                  <Stack
                    spacing={1}
                    sx={{ maxHeight: 320, overflowY: "auto", pr: 4 }}
                  >
                    <DocumentChip
                      label={instance.instance_metadata.template}
                      deletable={instance.step === "upload_template"}
                      selected={false}
                      onClick={() => {}}
                      onDelete={onRemoveFile}
                    />
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
          {instance.step === "upload_template" && (
            <UploadTemplate
              instance={instance}
              onUploadedTemplate={onUploadedTemplate}
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

export default InvestmentMemoFeature;
