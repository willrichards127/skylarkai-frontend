import { memo } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import BorderColorIcon from "@mui/icons-material/BorderColor";

export const SentimentAnalysis = memo(
  ({ content, onEdit }: { content: string[]; onEdit: () => void }) => {
    return (
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            maxWidth: 400,
            minWidth: 320,
            borderRadius: 2,
            pl: 4,
            pr: 6,
            py: 4,
            bgcolor: "secondary.main",
            position: "relative",
            mb: 2,
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={onEdit}
          >
            <BorderColorIcon sx={{ fontSize: 18 }} />
          </IconButton>
          <Typography variant="body1" fontWeight="bold" gutterBottom>
            Investment Criteria Analysis
          </Typography>
          <ul style={{ paddingLeft: 16 }}>
            {content.map((category: string) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </Box>
      </Box>
    );
  }
);

SentimentAnalysis.displayName = "SentimentAnalysis";
