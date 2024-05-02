import { memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Backdrop, CircularProgress } from "@mui/material";
import { XCard } from "../../../../components/XCard";
import {
  useDeleteSetupMutation,
  useGetSetupsQuery,
  useMarkSetupMutation,
} from "../../../../redux/services/setupApi";

const SetupsContainer = memo(({ viewMode }: { viewMode: string }) => {
  const navigate = useNavigate();

  const moreItems = useMemo(
    () => [
      ...(viewMode === "archived"
        ? [
            {
              id: "mark_as_active",
              content: "Mark as active",
              clickable: true,
            },
          ]
        : []),
      {
        id: "delete",
        content: "Delete",
        clickable: true,
      },
    ],
    [viewMode]
  );

  const { data: setups, isLoading, refetch } = useGetSetupsQuery({ viewMode });
  const [deleteSetup, { isLoading: isDeleting }] = useDeleteSetupMutation();
  const [markdSetup, { isLoading: isActivating }] = useMarkSetupMutation();

  const onMoreItem = useCallback(
    async (setupId: string, menuItemId: string) => {
      if (menuItemId === "delete") {
        await deleteSetup({
          setupId,
        });
      } else if (menuItemId === "mark_as_active") {
        await markdSetup({ setupId: +setupId });
      }
      await refetch();
    },
    [navigate, deleteSetup]
  );

  /** FIXME: React Navigate */
  const onCard = useCallback(
    (setupId?: string) => {
      if (setupId) {
        navigate(`/portal/setups/${setupId}`);
      } else {
        navigate("/portal/setups/new");
      }
    },
    [navigate]
  );

  return (
    <Box sx={{ height: "100%", overflowY: "auto", px: 4, py: 2 }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading || isDeleting || isActivating}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {!isLoading &&
          (setups || []).map((setup) => (
            <XCard
              key={setup.id}
              id={setup.id!.toString()}
              label={setup.name!}
              thumbnail="/tool1.png"
              height={140}
              thumbnailHeight={80}
              hasThumbnail
              moreItems={moreItems}
              onMoreItem={(menuItemId) =>
                onMoreItem(setup.id!.toString(), menuItemId)
              }
              onCard={() => onCard(setup.id!.toString())}
            />
          ))}
      </Box>
    </Box>
  );
});

SetupsContainer.displayName = "SetupsContainer";

export default SetupsContainer;
