import { memo, useCallback } from "react";
import { Box, IconButton, Typography, CircularProgress } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NoAvailable } from "../../../../components/NoAvailable";
import { IFeatureInstance } from "../../../../redux/interfaces";
import { useDeleteFeatureInstanceMutation } from "../../../../redux/services/transcriptAPI";

export const SavedInstancesContainer = memo(
  ({
    loading = false,
    instances,
    instanceType,
    onSavedInstance,
  }: {
    instanceType: "chat" | "report";
    loading?: boolean;
    instances: IFeatureInstance[];
    onSavedInstance: (instance: IFeatureInstance) => void;
  }) => {
    const [deleteInstance, { isLoading: isLoadingDelete }] =
      useDeleteFeatureInstanceMutation();

    const onDelete = useCallback(
      (instanceId: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        deleteInstance({
          id: instanceId,
        });
      },
      [deleteInstance]
    );

    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Saved {instanceType === "chat" ? "Chats" : "Reports"}
        </Typography>

        {loading || isLoadingDelete ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 2,
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : !instances?.length ? (
          <NoAvailable desc={`No ${instanceType} available`} />
        ) : (
          <Box sx={{ py: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
            {([...instances] || [])
              .sort(
                (a, b) =>
                  new Date(b.created_at!).getTime() -
                  new Date(a.created_at!).getTime()
              )
              .map((instance) => (
                <Box
                  key={instance.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    width: 320,
                    borderRadius: 1,
                    py: 2,
                    pl: 2,
                    pr: 1,
                    bgcolor: "secondary.dark",
                    height: "fit-content",
                    "&:hover": {
                      cursor: "pointer",
                      bgcolor: "secondary.main",
                    },
                  }}
                  onClick={() => onSavedInstance(instance)}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: 244,
                      }}
                    >
                      {instance.instance_name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {new Date(instance.created_at!).toLocaleString()}
                    </Typography>
                  </Box>
                  <IconButton size="small" onClick={onDelete(instance.id!)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </Box>
              ))}
          </Box>
        )}
      </Box>
    );
  }
);
