import { memo, useCallback, useState } from "react";
import { Box, Link, Popper, Typography, Button } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { XSmallAccordion } from "../../../../../../components/XAccordion";
import { Metric } from "./Metric";
import {
  metrics,
  TMetric,
  IMetricContent,
  IChat,
} from "../../../../../../redux/interfaces";
import { useUpdateFeedbackMutation } from "../../../../../../redux/services/transcriptAPI";

const initialFeedbackStatus = {
  Accuracy: {
    rating: 5,
    feedback: "",
  },
  Relevance: {
    rating: 5,
    feedback: "",
  },
  Specificity: {
    rating: 5,
    feedback: "",
  },
  Currentness: {
    rating: 5,
    feedback: "",
  },
  Verbosity: {
    rating: 5,
    feedback: "",
  },
};

export const FeedbackFloat = memo(
  ({
    graph_id,
    question,
    chat,
  }: {
    graph_id: number;
    question: string;
    chat: IChat;
  }) => {
    const [updateFeedback, { isLoading }] = useUpdateFeedbackMutation();
    const [ratingPanel, showRatingPanel] = useState<boolean>(false);
    const [overallFeedback, setOverallFeedback] = useState<IMetricContent>({
      rating: 5,
      feedback: "",
    });
    const [feedbackStatus, setFeedbackStatus] = useState<
      Record<TMetric, IMetricContent>
    >(initialFeedbackStatus);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const onChangeMetric = useCallback(
      (metric: TMetric, contentType: string) =>
        (newValue: string | number | null) => {
          setFeedbackStatus((prev) => ({
            ...prev,
            [metric]: { ...prev[metric], [contentType]: newValue },
          }));
        },
      []
    );

    const onSubmit = useCallback(() => {
      updateFeedback({
        graph_id,
        question_text: question,
        user_feedback: {
          ...overallFeedback,
          metrics: feedbackStatus,
        },
        system_feedback: chat.rating_response,
      });
      setOverallFeedback({ rating: 5, feedback: "" });
      setFeedbackStatus(initialFeedbackStatus);
      showRatingPanel(false);
    }, [
      updateFeedback,
      graph_id,
      question,
      overallFeedback,
      feedbackStatus,
      chat,
    ]);

    const onShowRating = useCallback(() => {
      showRatingPanel((prev) => !prev);
    }, []);

    return (
      <Box className="no-print">
        <Box sx={{ textAlign: "right", pb: 1 }}>
          <Button
            size="small"
            endIcon={<KeyboardDoubleArrowDownIcon />}
            onClick={onShowRating}
            sx={{ fontSize: 13 }}
          >
            Rating
          </Button>
        </Box>
        {ratingPanel && (
          <Box
            className="no-print"
            sx={{
              padding: "4px",
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
                justifyContent: "flex-end",
                pb: 1,
              }}
            >
              <Link
                sx={{ fontSize: 11, cursor: "pointer" }}
                onClick={(e: React.MouseEvent<HTMLElement>) =>
                  setAnchorEl(anchorEl ? null : e.currentTarget)
                }
              >
                System Ratings
              </Link>
              <Popper
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                placement="bottom-end"
              >
                <Box
                  sx={{
                    border: 1,
                    borderRadius: 1,
                    p: 0.5,
                    background: "black",
                    fontSize: 11,
                    maxWidth: 600,
                    maxHeight: 600,
                    overflow: "auto",
                  }}
                >
                  <pre>{JSON.stringify(chat.rating_response, null, 2)}</pre>
                </Box>
              </Popper>
            </Box>
            {metrics.map((metric) => (
              <XSmallAccordion
                defaultExpanded={false}
                key={metric}
                summary={metric}
                detail={
                  <Metric
                    rating={feedbackStatus[metric].rating}
                    feedback={feedbackStatus[metric].feedback}
                    onChangeRating={onChangeMetric(metric, "rating")}
                    onChangeFeedback={onChangeMetric(metric, "feedback")}
                  />
                }
              />
            ))}
            <Typography variant="body2" fontWeight="bold" fontSize={12}>
              Overall
            </Typography>
            <Metric
              rating={overallFeedback.rating}
              feedback={overallFeedback.feedback}
              onChangeRating={(newValue) =>
                setOverallFeedback((prev) => ({ ...prev, rating: newValue }))
              }
              onChangeFeedback={(newValue) =>
                setOverallFeedback((prev) => ({ ...prev, feedback: newValue }))
              }
            />
            <Box sx={{ textAlign: "right", pt: 1 }}>
              <Button
                size="small"
                variant="outlined"
                disabled={isLoading}
                onClick={onSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    );
  }
);
