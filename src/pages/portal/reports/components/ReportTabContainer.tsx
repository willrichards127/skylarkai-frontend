import { memo, useCallback, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import {
  useDeleteReportMutation,
  useMarkReportMutation,
} from "../../../../redux/services/reportApi";
import { REPORTS_DICT } from "../../../../shared/models/constants";
import { getDate } from "../../../../shared/utils/parse";
import { ReportCard } from "./ReportCard";
import { useLazyGetTaskStatusQuery } from "../../../../redux/services/transcriptAPI";
import { TemplateViewModal } from "../../../../components/modals/TemplateViewModal";

export const ReportTabContainer = memo(
  ({ reports, viewMode }: { reports: any; viewMode: string }) => {
    const params = useParams();
    const [searchParams] = useSearchParams();
    const unitName = searchParams.get("unitName");
    const type = searchParams.get("type");

    const [selectedExecute, setSelectedExecute] = useState<any>(null);

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
    const [getTaskStatus] = useLazyGetTaskStatusQuery();

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
      (
        id: string,
        setupId: number,
        reportName: string,
        executing: boolean = false
      ) => {
        if (executing) {
          getTaskStatus({ task_id: id })
            .unwrap()
            .then((res) => {
              console.log("=====", res)
              const report = reports.executing.find((r: any) => r.task_id === id);
              if (report) {
                setSelectedExecute(report.data.report_data);
              }
            });
        } else {
          navigate(
            `/portal/reports/${id}?unitId=${params.unitId}&unitName=${unitName}&type=${type}&reportName=${reportName}&setupId=${setupId}&viewMode=${viewMode}`
          );
        }
      },
      [navigate, params, unitName, type, viewMode, reports]
    );

    return (
      <Box sx={{ width: "100%" }}>
        {reports.reports.length ? (
          <Grid container spacing={4}>
            {[...reports.reports]
              .sort(
                (a: any, b: any) =>
                  new Date(a.created_at).getTime() -
                  new Date(b.created_at).getTime()
              )
              .map((card: any) => (
                <Grid
                  key={`generated-${card.id}`}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
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
        ) : null}
        <Grid
          container
          spacing={4}
          sx={{ marginTop: reports.reports.length ? 4 : undefined }}
        >
          {[...reports.executing]
            .sort(
              (a: any, b: any) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
            )
            .map((card: any) => (
              <Grid
                key={`executing-${card.task_id}`}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <ReportCard
                  executing
                  id={card.task_id}
                  label={
                    REPORTS_DICT[card.data["report_data"]["title"]]?.label ||
                    card.data["report_data"]["title"]
                  }
                  updatedAt={getDate(new Date(card.created_at))}
                  onCard={() =>
                    onCard(
                      card.task_id,
                      card.data["graph_id"],
                      card.data["report_data"]["title"],
                      true
                    )
                  }
                />
              </Grid>
            ))}
        </Grid>
        {!!selectedExecute && (
          <TemplateViewModal
            open={!!selectedExecute}
            onClose={() => setSelectedExecute(null)}
            data={selectedExecute}
          />
        )}
      </Box>
    );
  }
);
