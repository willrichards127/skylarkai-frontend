import { memo, useCallback, useState } from "react";
import { Box, IconButton, Typography, Checkbox, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  TerribleFace,
  BadFace,
  NeedIprvFace,
  GoodFace,
  GreatFace,
} from "../../../../../components/Svgs";

const emojis = [
  {
    icon: <TerribleFace />,
    name: "Terrible Answer",
  },
  {
    icon: <BadFace />,
    name: "Bad Answer",
  },
  {
    icon: <NeedIprvFace />,
    name: "Need Improvement",
  },
  {
    icon: <GoodFace />,
    name: "Good Answer",
  },
  {
    icon: <GreatFace />,
    name: "Great Answer",
  },
];

const answers = [
  "Too verbose",
  "Inaccurate data",
  "Does not answer the question",
  "Lacks specificity",
  "Asks for data when data is there",
];

const EmojiIcon = ({
  selected = false,
  icon,
  name,
  onClick,
}: {
  selected?: boolean;
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          cursor: "pointer",
          p: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: selected
            ? "rgba(255, 255, 255, 0.4)"
            : "transparent",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          },
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body2"
        fontSize={12}
        pt={1}
        textAlign="center"
        sx={{ whiteSpace: "break-spaces" }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export const FeedbackFloat = memo(({ onClose }: { onClose: () => void }) => {
  const [feedback, setFeedback] = useState<string | undefined>();
  const [needs, setNeeds] = useState<string[]>([]);

  const onFeedback = useCallback((name: string) => {
    setFeedback(name);
  }, []);

  const onChangeNeeds = useCallback((answer: string) => {
    setNeeds((prev) =>
      prev.includes(answer)
        ? prev.filter((need) => need !== answer)
        : [...prev, answer]
    );
  }, []);

  return (
    <Box
      className="no-print"
      sx={{
        position: "absolute",
        bottom: 0,
        padding: "4px 8px 8px 8px",
        background: "#484863",
        borderLeft: "2px solid white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 1,
        }}
      >
        <Typography variant="body2">Rate</Typography>
        <IconButton aria-label="close" size="small" onClick={onClose}>
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        {emojis.map((emoji) => (
          <EmojiIcon
            key={emoji.name}
            selected={emoji.name === feedback}
            name={emoji.name}
            icon={emoji.icon}
            onClick={() => onFeedback(emoji.name)}
          />
        ))}
      </Box>
      {feedback === "Need Improvement" && (
        <Box>
          <Typography variant="body2" fontSize={12} fontWeight="bold" py={1}>
            Why answer needs to improve
          </Typography>
          {answers.map((answer) => (
            <Box
              key={answer}
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => onChangeNeeds(answer)}
            >
              <Checkbox
                checked={needs.includes(answer)}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
              />
              <Typography
                variant="body2"
                fontSize={12}
                sx={{ cursor: "pointer" }}
              >
                {answer}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
      <Box sx={{ textAlign: "right", pt: 1 }}>
        <Button size="small" variant="outlined">
          Submit
        </Button>
      </Box>
    </Box>
  );
});
