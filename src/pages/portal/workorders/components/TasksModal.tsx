import { memo, useCallback, useEffect, useState } from "react";
import {
  colors,
  Box,
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { XModal } from "../../../../components/XModal";

export const TasksModal = memo(
  ({
    initialTasks = [],
    tasks = [],
    open,
    onAddedTasks,
    onClose,
  }: {
    initialTasks: string[];
    tasks: string[];
    open: boolean;
    onClose: () => void;
    onAddedTasks: (taskIds: string[]) => void;
  }) => {
    const [checked, setChecked] = useState<string[]>([]);

    const onToggle = useCallback(
      (taskId: string) => () => {
        setChecked((prev) =>
          prev.includes(taskId)
            ? prev.filter((id) => id !== taskId)
            : [...prev, taskId]
        );
      },
      []
    );

    const onAddTasks = useCallback(() => {
      onClose();
      onAddedTasks(checked);
    }, [onClose, onAddedTasks, checked]);

    useEffect(() => {
      setChecked(initialTasks);
    }, [initialTasks]);

    return (
      <XModal
        open={open}
        onClose={onClose}
        size="sm"
        header="Select Tasks"
        footer={
          <Box
            sx={{
              width: "100%",
              display: "flex",
              p: 1,
              gap: 1,
              borderRadius: 2,
              bgcolor: "secondary.main",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button variant="outlined" sx={{ minWidth: 120 }} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ minWidth: 120 }}
              onClick={onAddTasks}
            >
              Add
            </Button>
          </Box>
        }
      >
        <Box
          sx={{
            maxHeight: 400,
            overflowY: "auto",
            border: "1px solid",
            borderColor: colors.grey[500],
            px: 1,
          }}
        >
          <List
            sx={{
              width: "100%",
            }}
          >
            {tasks.map((task) => {
              const labelId = `task-list-label-${task}`;

              return (
                <ListItem key={task} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={onToggle(task)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.includes(task)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={task} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </XModal>
    );
  }
);

TasksModal.displayName = "TasksModal";
