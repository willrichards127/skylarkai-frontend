import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '0 !important',
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#060606",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const SmallAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:before": {
    display: "none",
  },
}));

const SmallAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.7rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "#484863",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "&.MuiAccordionSummary-root": {
    minHeight: 32,
    padding: 4,
  },
  "& .MuiAccordionSummary-content": {
    margin: 0.5,
    paddingLeft: 4
  },
}));

const SmallAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export const XAccordions = ({
  options,
  defaultExpanded = false,
}: {
  defaultExpanded?: boolean;
  options: { summary: React.ReactNode; detail: React.ReactNode }[];
}) => {
  return (
    <div>
      {options.map((option, index) => (
        <Accordion defaultExpanded={defaultExpanded} key={`panel-${index}`}>
          <AccordionSummary>{option.summary}</AccordionSummary>
          <AccordionDetails>
            <Typography>{option.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export const XSmallAccordion = ({
  summary,
  detail,
  defaultExpanded = false,
}: {
  defaultExpanded?: boolean;
  summary: React.ReactNode;
  detail: React.ReactNode;
}) => {
  return (
    <SmallAccordion defaultExpanded={defaultExpanded}>
      <SmallAccordionSummary>{summary}</SmallAccordionSummary>
      <SmallAccordionDetails>
        <Typography>{detail}</Typography>
      </SmallAccordionDetails>
    </SmallAccordion>
  );
};
