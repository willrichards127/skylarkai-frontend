import { colors, Box, Avatar, Chip, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const personaDict: Record<number, any> = {
  1: {
    name: "Analyst",
    color: colors.green[500],
  },
  2: {
    name: "Partner",
    color: colors.pink[500],
  },
  3: {
    name: "Target",
    color: colors.brown[500],
  },
  5: {
    name: "Admin",
    color: colors.blue[500],
  },
};

export const EmailItem = ({
  checked,
  email,
  name,
  persona_id,
  company,
  onClick,
}: {
  checked?: boolean;
  email: string;
  name: string;
  persona_id: number;
  company?: string;
  onClick: () => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        cursor: "pointer",
        px: 1,
        py: 0.5,
        borderRadius: 1,
        bgcolor: "secondary.main",
        "&:hover": {
          filter: "brightness(1.2)",
        },
      }}
      onClick={onClick}
    >
      <Avatar
        sx={{ width: 32, height: 32, bgcolor: colors.blue[500], fontSize: 16 }}
      >
        {name!.substring(0, 1)}
      </Avatar>
      <Box>
        <Typography variant="body1" fontWeight="bold">
          {email}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            gap: 2,
            mb: 0.5,
          }}
        >
          <Chip
            size="small"
            label={personaDict[persona_id].name}
            sx={{
              bgcolor: personaDict[persona_id].color,
              "&.MuiChip-root": {
                borderRadius: 1,
                height: 20,
              },
            }}
          />{" "}
          {name}
        </Box>
        <Typography variant="body2" fontSize={12}>
          <b>Company</b>: {company}
        </Typography>
      </Box>
      <Box mr="auto" />
      {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </Box>
  );
};
