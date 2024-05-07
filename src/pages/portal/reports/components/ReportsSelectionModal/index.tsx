/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { XModal } from "../../../../../components/XModal";
import { UnitStepPanel } from "./UnitStepPanel";
import { ReportStepPanel } from "./ReportStepPanel";

const steps = ["Select Company/Sector", "Select Report"];

export const ReportsSelectionModal = ({
  open,
  onClose,
  onActionPerformed,
}: {
  open: boolean;
  onClose: () => void;
  onActionPerformed: (unit: any, report: any) => void;
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [unit, setUnit] = useState<any>();

  const onSelectedUnit = useCallback((selectedUnit: any) => {
    setUnit(selectedUnit);
    setActiveStep(1);
  }, []);

  const onSelectedReport = useCallback(
    (selectedReport: any) => {
      onActionPerformed(unit!, selectedReport);
      onClose();
    },
    [unit, onActionPerformed, onClose]
  );

  const onStepBack = useCallback(() => {
    setActiveStep(0);
  }, []);

  return (
    <XModal
      open={open}
      onClose={onClose}
      header={
        <Box textAlign="center">
          Select {activeStep === 0 ? "Company/Sector" : "Report"}
        </Box>
      }
      footer={
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          {activeStep === 1 && <Button onClick={onStepBack}>Back</Button>}
          <Button onClick={onClose}>Close</Button>
        </Box>
      }
      size="lg"
    >
      <Box pb={4} px={8}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {activeStep === 0 && <UnitStepPanel onSelectedUnit={onSelectedUnit} />}
      {activeStep === 1 && !!unit && (
        <ReportStepPanel
          companyId={unit.id}
          onSelectedReport={onSelectedReport}
        />
      )}
    </XModal>
  );
};
