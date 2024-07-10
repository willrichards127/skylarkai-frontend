import { memo } from "react";
import { Box, TextField, Rating } from "@mui/material";
import { IMetricContent } from "../../../../../../redux/interfaces";

export const Metric = memo(
  ({
    rating,
    onChangeRating,
    feedback,
    onChangeFeedback,
  }: {
    onChangeRating: (newValue: number | null) => void;
    onChangeFeedback: (newText: string) => void;
  } & IMetricContent) => {
    return (
      <Box>
        <Rating
          value={rating}
          onChange={(_, newValue) => onChangeRating(newValue)}
          size="small"
        />
        <TextField
          multiline
          rows={2}
          size="small"
          value={feedback}
          onChange={(e) => onChangeFeedback(e.target.value)}
          fullWidth
          sx={{ "& .MuiOutlinedInput-root": { fontSize: 12, p: 0.5 } }}
        />
      </Box>
    );
  }
);
