import { Box, Typography } from "@mui/material";
import React from "react";

export const NavItem = ({
  label,
  selected = false,
  disabled,
  onClick,
}: {
  label: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        cursor: "pointer",
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={onClick}
    >
      <Typography
        variant="body1"
        color={selected ? "white" : "grey"}
        gutterBottom
        sx={{
          pointerEvents: disabled ? "none" : "auto",
          "&:hover": {
            color: "white",
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
