import { Box, Typography } from "@mui/material";
import React from "react";

export const NavItem = ({
  label,
  selected = false,
  onClick,
}: {
  label: React.ReactNode;
  selected?: boolean;
  onClick: () => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Typography
        variant="body1"
        color={selected ? "white" : "grey"}
        gutterBottom
        sx={{
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
