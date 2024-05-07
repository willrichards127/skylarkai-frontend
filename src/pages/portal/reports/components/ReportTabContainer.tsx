import { memo, useCallback, useMemo } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import {
  useDeleteReportMutation,
  useMarkReportMutation,
} from "../../../../redux/services/reportApi";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import { getDate } from "../../../../shared/utils/parse";
import { ReportCard } from "./ReportCard";

export const ReportTabContainer = memo(
  ({ reports, viewMode }: { reports: any; viewMode: string }) => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const unitName = searchParams.get("unitName");
    const type = searchParams.get("type");

    const moreItems = useMemo(
      () => [
        ...(viewMode === "archived"
          ? [
              {
                id: "mark_as_active",
                content: "Mark as active",
                clickable: true,
              },
              {
                id: "delete",
                content: "Delete",
                clickable: true,
              },
            ]
          : []),
        {
          id: "archive",
          content: "Archive",
          clickable: true,
        },
      ],
      [viewMode]
    );
    const navigate = useNavigate();

    const [deleteReport] = useDeleteReportMutation();
    const [markReport] = useMarkReportMutation();

    const onMoreItem = useCallback(
      (cardId: string, menuItemId: string) => {
        if (menuItemId === "delete" || menuItemId === "archive") {
          deleteReport({ reportId: +cardId, viewMode });
        } else if (menuItemId === "mark_as_active") {
          markReport({ reportId: +cardId });
        }
      },
      [viewMode, deleteReport, markReport]
    );

    /** FIXME: React Navigate */
    const onCard = useCallback(
      (cardId: number, setupId: number, reportName: string) => {
        navigate(
          `/portal/reports/${cardId}?unitId=${params.unitId}&unitName=${unitName}&type=${type}&reportName=${reportName}&setupId=${setupId}&viewMode=${viewMode}`
        );
      },
      [navigate, params, unitName, type, viewMode]
    );

    return (
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={4}>
          {[...reports]
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((card: any) => (
              <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
                <ReportCard
                  id={card.id}
                  label={
                    REPORTS_DICT[card.report_metadata.reportname]?.label ||
                    card.report_metadata.reportname
                  }
                  updatedAt={getDate(
                    new Date(card.created_at || card.executed_at)
                  )}
                  moreItems={moreItems}
                  onMoreItem={(menuItemId) => onMoreItem(card.id, menuItemId)}
                  onCard={() =>
                    onCard(
                      card.id,
                      card.graph_id,
                      card.report_metadata.reportname
                    )
                  }
                />
              </Grid>
            ))}
        </Grid>
      </Box>
    );
  }
);
