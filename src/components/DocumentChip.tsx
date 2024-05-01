import {
  Box,
  SxProps,
  Theme,
  Tooltip,
  Typography,
  colors,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { FC } from "react";

export const DocumentChip = ({
  label,
  description,
  selected,
  deletable,
  onClick,
  onDelete,
  sx,
  renderIcon,
}: {
  label: string;
  description?: React.ReactNode;
  selected?: boolean;
  deletable?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  sx?: SxProps<Theme>;
  renderIcon?: () => JSX.Element;
}) => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1,
        py: 0.6,
        bgcolor: selected ? colors.grey[800] : colors.grey[900],
        cursor: onClick ? "pointer" : "normal",
        ...(sx ? sx : {}),
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
    >
      {renderIcon ? (
        renderIcon()
      ) : (
        <VisibilityIcon
          sx={{
            opacity: selected ? 1 : 0.05,
          }}
        />
      )}
      <Box
        sx={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}
      >
        <Tooltip title={label}>
          <Typography
            variant="body1"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontSize: 13,
            }}
          >
            {label}
          </Typography>
        </Tooltip>
        {description}
      </Box>
      {deletable && (
        <HighlightOffIcon
          sx={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            if (onDelete) onDelete();
          }}
        />
      )}
    </Box>
  );
};
