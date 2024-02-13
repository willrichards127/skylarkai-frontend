import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "&.MuiToggleButtonGroup-root": {
    backgroundColor: "#011732",
    borderRadius: theme.shape.borderRadius * 3,
  },
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    textTransform: "none",
    padding: "4px 16px",
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius * 3,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius * 3,
    },
    "&.Mui-selected": {
      color: "black",
      backgroundColor: "white",
    },
  },
}));

export const XToggleGroupButton = ({
  options,
  value,
  onChangeValue,
}: {
  options: { label: React.ReactNode; value: string }[];
  value: string;
  onChangeValue: (val: string) => void;
}) => {
  return (
    <StyledToggleButtonGroup
      size="small"
      value={value}
      exclusive
      onChange={(_: React.MouseEvent<HTMLElement>, newValue: string) =>
        onChangeValue(newValue)
      }
    >
      {options.map((option) => (
        <ToggleButton key={option.value} value={option.value}>
          {option.label}
        </ToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};
