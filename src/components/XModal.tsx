import React, { memo } from "react";
import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type TXModalProps = {
  open: boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: DialogProps["maxWidth"];
  floatAlign?: "flex-start" | "center" | "flex-end";
  disableBackdropClose?: boolean;
  onClose: () => void;
};

export const XModal = memo((props: TXModalProps) => {
  const {
    header,
    open,
    children,
    footer,
    onClose,
    floatAlign = "center",
    size = "md",
    disableBackdropClose,
  } = props;

  return (
    <Dialog
      open={open}
      onClose={disableBackdropClose ? undefined : onClose}
      scroll="paper"
      maxWidth={size}
      fullWidth
      sx={{
        "& .MuiDialog-container": {
          justifyContent: floatAlign,
        },
        "&.MuiDialog-root": {
          // backdropFilter: "blur(2px)",
        },
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          transition: "none !important",
        },
        "& .MuiPaper-root": {
          backgroundImage: "none !important",
          borderRadius: 4,
        },
      }}
    >
      <DialogTitle>
        {header}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box py={1}>{children}</Box>
      </DialogContent>
      {!!footer && <DialogActions sx={{ p: 2 }}>{footer}</DialogActions>}
    </Dialog>
  );
});
