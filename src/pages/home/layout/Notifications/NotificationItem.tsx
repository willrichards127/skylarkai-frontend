/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors, Box, CircularProgress } from "@mui/material";
import { useGetTaskStatusQuery } from "../../../../redux/services/transcriptAPI";

const statusColorDict: Record<number, string> = {
  0: colors.red[500], // failed
  1: colors.green[500], // success
  2: colors.blue["A100"], // pending
};

const msgDict: Record<number, string> = {
  0: "Failed", // failed
  1: "Completed", // success
  2: "Pending", // pending
};

export const NotificationItem = ({
  notification,
}: {
  notification: {
    fetch_status: number;
    is_visited?: boolean;
    analysis_type: number;
    ticker: string;
    created_at: string;
    task_id?: string;
  };
}) => {
  const { data: detail, isLoading } = useGetTaskStatusQuery(
    { task_id: notification.task_id! },
    {
      skip: !notification.task_id || notification.fetch_status !== 1,
    }
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontSize: 12,
          color: statusColorDict[notification.fetch_status],
        }}
      >
        {msgDict[notification.fetch_status]} downloading{" "}
        {notification.analysis_type === 1 ? "transcript" : "edgar"} files of{" "}
        {notification.ticker}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Box sx={{ fontSize: 10, color: "grey", textAlign: "right" }}>
          {new Date(notification.created_at).toLocaleString()}
        </Box>
        {notification.fetch_status === 1 && (
          <Box sx={{ fontSize: 10, color: "white", textAlign: "right" }}>
            {isLoading ? (
              <CircularProgress size={14} />
            ) : (
              `${(detail as any).result.length} files`
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};
