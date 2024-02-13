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
import { TASKS_DICT } from "../../../../shared/models/constants";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { WorkOrderHeader } from "./WorkOrderHeader";
import { DiligenceReport } from "./edit-orders/DiligenceReport";
import { SentimentAnalysis } from "./edit-orders/SentimentAnalysis";
import { genWorkOrderName } from "../../../../shared/utils/base";
import {
  useGetWorkOrderQuery,
  useAddWorkOrderMutation,
  useUpdateWorkOrderMutation,
} from "../../../../redux/services/workOrderApi";

const TaskComponentDict: Record<
  string,
  React.MemoExoticComponent<(props: any) => React.JSX.Element>
> = {
  "Diligence Reports": DiligenceReport,
  "Sentiment Analysis": SentimentAnalysis,
};

const EditOrderPanel = memo(
  ({
    companyId,
    orderId,
    companyName,
    workOrderName,
  }: {
    companyId: string;
    companyName: string;
    workOrderName: string | null;
    orderId: string;
  }) => {
    const navigate = useNavigate();
    const isNew = orderId === "new";
    const currentWorkOrderName =
      isNew && !workOrderName ? genWorkOrderName(companyName) : workOrderName;

    const [currentTasks, setCurrentTasks] = useState<Record<string, any>>({});
    const [selectedMainTask, setSelectedMainTask] = useState<[string, any]>(
      Object.entries(TASKS_DICT)[0]
    );

    const { isLoading, data } = useGetWorkOrderQuery(
      { workOrderId: orderId },
      { skip: isNew }
    );
    const [addWorkOrder, { isLoading: isLoadingAdd, data: addedData }] =
      useAddWorkOrderMutation();
    const [updateWorkOrder, { isSuccess }] = useUpdateWorkOrderMutation();

    const onMainTaskItem = useCallback((task: [string, any]) => {
      setSelectedMainTask(task);
    }, []);

    const onNextStep = useCallback(() => {
      if (isNew) {
        addWorkOrder({
          companyId,
          workOrderName: currentWorkOrderName!,
          tasks: currentTasks,
        });
      } else {
        updateWorkOrder({
          workOrderId: orderId,
          tasks: currentTasks,
          status: 1, // draft
        });
      }
    }, [
      isNew,
      orderId,
      companyId,
      currentWorkOrderName,
      currentTasks,
      addWorkOrder,
      updateWorkOrder,
    ]);

    const onChangedTasks = useCallback(
      (currentTasks: Record<string, Record<string, string[]>> | string[]) => {
        setCurrentTasks((prev) => ({
          ...prev,
          [selectedMainTask[0]]: currentTasks,
        }));
      },
      [selectedMainTask]
    );

    useEffect(() => {
      if (!isLoading && data) {
        setCurrentTasks(data.tasks);
      }
    }, [isLoading, data]);
    /** FIXME: React Navigate */
    useEffect(() => {
      if (isSuccess) {
        navigate(
          `/main/companies/${companyId}/${data.id}?&company_name=${companyName}&work_order_name=${data.work_order_name}&view_mode=summary`
        );
      }
    }, [navigate, companyId, data, companyName, isSuccess]);

    useEffect(() => {
      if (!isLoadingAdd && addedData) {
        navigate(
          `/main/companies/${companyId}/${addedData.id}?&company_name=${companyName}&work_order_name=${addedData.work_order_name}&view_mode=summary`
        );
      }
    }, [navigate, companyId, companyName, isLoadingAdd, addedData]);

    const TaskComponent = TaskComponentDict[selectedMainTask[0]];

    return (
      <Box sx={{ height: "100%", bgcolor: "secondary.dark" }}>
        <WorkOrderHeader
          isLoading={isLoadingAdd}
          orderName={currentWorkOrderName!}
          companyName={companyName}
          onNextStep={onNextStep}
          viewMode="edit"
        />
        <Box sx={{ px: 8, py: 4 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ bgcolor: "secondary.main", p: 1, borderRadius: 2 }}>
              <List>
                {Object.entries(TASKS_DICT).map(([taskLabel, child]) => (
                  <ListItem key={taskLabel} disablePadding>
                    <ListItemButton
                      selected={selectedMainTask[0] === taskLabel}
                      onClick={() => onMainTaskItem([taskLabel, child])}
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
            <Box sx={{ flex: 1 }}>
              <TaskComponent
                content={selectedMainTask[1]}
                initialTasks={currentTasks[selectedMainTask[0]]}
                onChangedTasks={onChangedTasks}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
);

EditOrderPanel.displayName = "EditOrderPanel";
export default EditOrderPanel;
