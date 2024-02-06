import { Box, colors } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const DocumentChip = ({
  label,
  selected = false,
  deletable = false,
  onClick,
  onDelete,
}: {
  label: string;
  selected?: boolean;
  deletable?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}) => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: 1,
        px: 1,
        py: 0.6,
        bgcolor: selected ? colors.grey[800] : colors.grey[900],
        cursor: onClick ? "pointer" : "normal",
      }}
      onClick={onClick}
    >
      <VisibilityIcon
        sx={{
          opacity: selected ? 1 : 0.05,
        }}
      />
      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontSize: 13,
        }}
      >
        {label}
      </Box>
      <Box mr="auto" />
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
