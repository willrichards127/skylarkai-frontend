import { useCallback, useState, useMemo } from "react";
import { Box, CircularProgress, Button } from "@mui/material";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import TabContainer from "../../../components/TabContainer";
import { XCard } from "../../../components/XCard";
import {
  useGetSetupsQuery,
  useDeleteSetupMutation,
  useMarkSetupMutation,
} from "../../../redux/services/setupApi";

export default function SetupsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const unitName = searchParams.get("unitName");

  const [viewMode, setViewMode] = useState<string>("active");

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
        : [
            {
              id: "archive",
              content: "Archive",
              clickable: true,
            },
          ]),
    ],
    [viewMode]
  );

  const {
    data: setups,
    isLoading,
    refetch,
  } = useGetSetupsQuery({ unitId: +params.unitId!, viewMode });
  const [deleteSetup] = useDeleteSetupMutation();
  const [markdSetup] = useMarkSetupMutation();

  const onSwitchViewMode = useCallback(
    (viewMode: string) => () => {
      setViewMode(viewMode);
    },
    []
  );

  const onMoreItem = useCallback(
    async (setupId: string, menuItemId: string) => {
      if (menuItemId === "archive") {
        await deleteSetup({
          setupId,
        });
      } else if (menuItemId === "mark_as_active") {
        await markdSetup({ setupId: +setupId });
      }
      await refetch();
    },
    [refetch, markdSetup, deleteSetup]
  );

  const onCard = useCallback(
    (setupId: string) => {
      navigate(
        `/portal/setups/${setupId}?unitId=${params.unitId}&unitName=${unitName}&type=${type}`
      );
    },
    [navigate, params, unitName, type]
  );

  return (
    <Box>
      {isLoading ? (
        <Box textAlign="center" p={4}>
          <CircularProgress />
        </Box>
      ) : (
        <TabContainer
          viewMode={viewMode}
          onSwitchViewMode={onSwitchViewMode}
          suffixActionRenderer={
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() =>
                navigate(
                  `/portal/setups/new?unitId=${params.unitId}&unitName=${unitName}&type=${type}`
                )
              }
              sx={{ ml: "auto" }}
            >
              New SLM
            </Button>
          }
        >
          {(setups || []).map((setup) => (
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
        </TabContainer>
      )}
    </Box>
  );
}
