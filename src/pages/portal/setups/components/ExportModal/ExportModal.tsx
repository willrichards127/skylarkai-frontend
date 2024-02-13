import { memo, useState } from "react";
import { Box, Stepper, Step, StepButton, Button } from "@mui/material";
import { XModal } from "../../../../../components/XModal";
import { FirstStep } from "./FirstStep";
// import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";

const steps = ["General Information", "Export"];

export const ExportModal = memo(
  ({
    setupId,
    setupName, // = companyName
    open,
    onClose,
  }: {
    setupId: number;
    setupName: string;
    open: boolean;
    onClose: () => void;
  }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed] = useState<{
      [k: number]: boolean;
    }>({});

    const totalSteps = () => {
      return steps.length;
    };

    const completedSteps = () => {
      return Object.keys(completed).length;
    };

    const isLastStep = () => {
      return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };

    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
      setActiveStep(step);
    };

    // const handleComplete = () => {
    // 	const newCompleted = completed;
    // 	newCompleted[activeStep] = true;
    // 	setCompleted(newCompleted);
    // 	handleNext();
    // };
    // const handleComplete = () => {
    // 	const newCompleted = completed;
    // 	newCompleted[activeStep] = true;
    // 	setCompleted(newCompleted);
    // 	handleNext();
    // };

    // const handleReset = () => {
    // 	setActiveStep(0);
    // 	setCompleted({});
    // };
    // const handleReset = () => {
    // 	setActiveStep(0);
    // 	setCompleted({});
    // };
    return (
      <XModal
        open={open}
        onClose={onClose}
        size="md"
        header={
          <Box>
            <Box mb={2}>Setup to Report</Box>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Box>
        }
        footer={
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => (activeStep === 0 ? onClose() : handleBack())}
            >
              <Box mx={1}>{activeStep === 0 ? "Cancel" : "Back"}</Box>
            </Button>
            {activeStep !== 1 && (
              <Button variant="contained" onClick={handleNext}>
                Continue
              </Button>
            )}
          </Box>
        }
      >
        {activeStep === 0 && <FirstStep companyName={setupName} />}
        {activeStep === 1 && <ThirdStep setupId={setupId} />}
        {/* {activeStep === 1 && <SecondStep nodes={nodes} />} */}
      </XModal>
    );
  }
);

ExportModal.displayName = "ExportModal";
