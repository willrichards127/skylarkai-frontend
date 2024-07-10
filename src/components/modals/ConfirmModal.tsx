import React, { memo } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { XModal } from "../XModal";

export const ConfirmModal = memo(
  ({
    loading = false,
    open,
    title,
    desc,
    icon,
    onClose,
  }: {
    loading?: boolean;
    open: boolean;
    title: string;
    desc: string;
    icon: React.ReactNode;
    onClose: () => void;
  }) => {
    return (
      <XModal open={open} onClose={onClose} size="xs">
        <Box textAlign="center">
          {loading ? (
            <CircularProgress size={36} color="primary" />
          ) : (
            <>
              {icon}
              <Typography variant="h6" pt={3}>
                {title}
              </Typography>
              <Typography variant="body2" textAlign="center" color="grey">
                {desc}
              </Typography>
              <Divider sx={{ borderColor: "primary.main", my: 2 }} />
              <Button variant="contained" color="primary" onClick={onClose}>
                Close
              </Button>
            </>
          )}
        </Box>
      </XModal>
    );
  }
);
