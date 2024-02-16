import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Backdrop, CircularProgress } from "@mui/material";
import { XCard } from "../../../../components/XCard";
import {
  useDeleteSetupMutation,
  useGetSetupsQuery,
} from "../../../../redux/services/setupApi";

const moreItems = [
  {
    id: "delete",
    content: "Delete",
    clickable: true,
  },
];

const SetupsContainer = memo(({ hasNewCard }: { hasNewCard?: boolean }) => {
  const navigate = useNavigate();
  const { data: setups, isFetching } = useGetSetupsQuery();
  const [deleteSetup, { isLoading }] = useDeleteSetupMutation();

  const onMoreItem = useCallback(
    (setupId: string, menuItemId: string) => {
      if (menuItemId === "delete") {
        deleteSetup({
          setupId,
        });
      }
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
        open={isFetching || isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {hasNewCard && (
        <XCard
          isNew
          id="card_new"
          label="New SLM"
          hasThumbnail
          onCard={() => onCard()}
        />
      )}
      <Box
        sx={{
          py: 4,
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        {!isFetching &&
          (setups || []).map((setup) => (
            <XCard
              key={setup.id}
              id={setup.id!.toString()}
              label={setup.name!}
              thumbnail="/tool1.png"
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
