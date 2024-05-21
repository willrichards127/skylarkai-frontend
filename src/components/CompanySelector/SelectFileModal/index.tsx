/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { XModal } from "../../../components/XModal";
import { UnitStepPanel } from "./UnitStepPanel";
import { FilesStepPanel } from "./FilesStepPanel";

const steps = ["Select Company/Sector", "Select Report(s)/VDR File(s)"];

export const SelectFileModal = ({
  open,
  onClose,
  onActionPerformed,
}: {
  open: boolean;
  onClose: () => void;
  onActionPerformed: (records: any[]) => void;
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [unit, setUnit] = useState<any>();

  const onSelectedUnit = useCallback((selectedUnit: any) => {
    setUnit(selectedUnit);
    setActiveStep(1);
  }, []);

  const onApplied = useCallback(
    (selectedRecords: any[]) => {
      onActionPerformed(selectedRecords);
      onClose();
    },
    [onActionPerformed, onClose]
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
      {activeStep === 0 && (
        <UnitStepPanel onSelectedUnit={onSelectedUnit} onClose={onClose} />
      )}
      {activeStep === 1 && !!unit && (
        <FilesStepPanel
          companyId={unit.id}
          onStepBack={onStepBack}
          onClose={onClose}
          onApplied={onApplied}
        />
      )}
    </XModal>
  );
};
