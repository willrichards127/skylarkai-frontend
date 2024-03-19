import { memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import { XCard } from "../../../../components/XCard";
import {
  useDeleteReportMutation,
  useMarkReportMutation,
} from "../../../../redux/services/reportApi";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import { getDate } from "../../../../shared/utils/parse";

export const ReportTabContainer = memo(
  ({
    companyName,
    reports,
    viewMode,
  }: {
    companyName: string;
    reports: any;
    viewMode: string;
  }) => {
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
      []
    );
    const navigate = useNavigate();

    const [deleteReport] = useDeleteReportMutation();
    const [markReport] = useMarkReportMutation();

    const onMoreItem = useCallback(
      (cardId: string, menuItemId: string) => {
        if (menuItemId === "delete") {
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
          `/portal/reports/${cardId}?reportType=${reportName}&setupId=${setupId}&viewMode=${viewMode}`
        );
      },
      [navigate, viewMode]
    );

    return (
      <Box sx={{ width: "100%" }}>
        <Divider />
        <Typography variant="h5" my={2}>
          {companyName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {[...reports]
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((card: any) => (
              <XCard
                key={card.id}
                id={card.id}
                label={REPORTS_DICT[card.report_metadata.reportname]?.label || card.report_metadata.reportname}
                updatedAt={getDate(
                  new Date(card.created_at || card.executed_at)
                )}
                moreItems={moreItems}
                onMoreItem={(menuItemId) => onMoreItem(card.id, menuItemId)}
                onCard={() => onCard(card.id, card.graph_id, card.report_metadata.reportname)}
                width={400}
                height={100}
              />
            ))}
        </Box>
      </Box>
    );
  }
);

ReportTabContainer.displayName = "ReportTabContainer";
