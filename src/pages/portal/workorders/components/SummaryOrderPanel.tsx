import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { WorkOrderHeader } from "./WorkOrderHeader";
import { DiligenceReport } from "./summary-orders/DiligenceReport";
import { SentimentAnalysis } from "./summary-orders/SentimentAnalysis";
import { TASKS_DICT } from "../../../../shared/models/constants";
import {
  useGetWorkOrderQuery,
  useUpdateWorkOrderMutation,
} from "../../../../redux/services/workOrderApi";

const TaskComponentDict: Record<
  string,
  React.MemoExoticComponent<(props: any) => React.JSX.Element>
> = {
  "Diligence Reports": DiligenceReport,
  "Sentiment Analysis": SentimentAnalysis,
};

const SummaryOrderPanel = memo(
  ({
    orderId,
    companyId,
    companyName,
    workOrderName,
  }: {
    orderId: string;
    companyId: string;
    companyName: string;
    workOrderName: string;
  }) => {
    const navigate = useNavigate();

    const [selectedMainTask, setSelectedMainTask] = useState<string>("");

    const { isLoading, data } = useGetWorkOrderQuery({ workOrderId: orderId });
    const [updateWorkOrder, { isSuccess }] = useUpdateWorkOrderMutation();

    const onMainTaskItem = useCallback((task: string) => {
      setSelectedMainTask(task);
    }, []);
    /** FIXME: React Navigate */
    const onEdit = useCallback(() => {
      navigate(
        `/main/companies/${companyId}/${data.id}?&company_name=${companyName}&work_order_name=${data.work_order_name}&view_mode=edit`
      );
    }, [navigate, companyId, data, companyName]);

    const onNextStep = useCallback(() => {
      updateWorkOrder({
        workOrderId: orderId,
        tasks: data.tasks,
        status: 2,
      });
    }, [updateWorkOrder, orderId, data]);

    useEffect(() => {
      if (!isLoading && data) {
        setSelectedMainTask(Object.keys(data.tasks)[0]);
      }
    }, [isLoading, data]);

    useEffect(() => {
      if (isSuccess) {
        navigate(
          `/main/companies/${companyId}/${data.id}?&company_name=${companyName}&work_order_name=${data.work_order_name}&view_mode=wip`
        );
      }
    }, [navigate, companyId, data, companyName, isSuccess]);

    const TaskComponent = TaskComponentDict[selectedMainTask];

    return (
      <Box
        sx={{ height: "100%", bgcolor: "secondary.dark", position: "relative" }}
      >
        <WorkOrderHeader
          isLoading={isLoading}
          orderName={workOrderName!}
          companyName={companyName}
          onNextStep={onNextStep}
          viewMode="summary"
        />
        <Box sx={{ px: 8, py: 4 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                bgcolor: "secondary.main",
                p: 1,
                borderRadius: 2,
                height: "100%",
                minWidth: 300,
              }}
            >
              <List>
                {Object.keys(TASKS_DICT).map((taskLabel) => (
                  <ListItem key={taskLabel} disablePadding>
                    <ListItemButton
                      selected={selectedMainTask === taskLabel}
                      onClick={() => onMainTaskItem(taskLabel)}
                    >
                      <ListItemIcon>
                        <TextSnippetIcon />
                      </ListItemIcon>
                      <ListItemText primary={taskLabel} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            {!!data && data.tasks[selectedMainTask] && (
              <Box sx={{ height: 540, overflowY: "auto" }}>
                <TaskComponent
                  content={data.tasks[selectedMainTask]}
                  onEdit={onEdit}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
);

SummaryOrderPanel.displayName = "SummaryOrderPanel";
export default SummaryOrderPanel;
