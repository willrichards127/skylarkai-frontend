import React, { memo, useCallback, useEffect, useState } from "react";
import {
  Chip,
  Box,
  Button,
  Autocomplete,
  AutocompleteChangeReason,
  TextField,
  Checkbox,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const SentimentAnalysis = memo(
  ({
    content,
    onChangedTasks,
  }: {
    content: string[];
    onChangedTasks: (currentTasks: string[]) => void;
  }) => {
    const [selectedTasks, setSelectedTasks] = useState<string[]>([]);
    const [tasks, setTasks] = useState<string[]>([]);

    const onChangeTasks = useCallback(
      (
        _: React.SyntheticEvent<Element, Event>,
        value: any[],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        __: AutocompleteChangeReason
      ) => {
        setSelectedTasks(value);
      },
      []
    );

    const onAddTasks = useCallback(() => {
      setTasks(selectedTasks);
    }, [selectedTasks]);

    const onDeleteTask = useCallback((task: string) => {
      setTasks((prev) => prev.filter((item) => item !== task));
    }, []);

    useEffect(() => {
      onChangedTasks(tasks);
    }, [tasks, onChangedTasks]);

    return (
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            alignItems: "center",
            my: 2,
          }}
        >
          {content.length > 0 && (
            <Autocomplete
              multiple
              limitTags={1}
              options={content}
              getOptionLabel={(option) => option}
              sx={{ minWidth: 640, maxWidth: "100%" }}
              value={selectedTasks}
              onChange={onChangeTasks}
              renderOption={(props, option, { selected }) => (
                <li {...props} key={option}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    key={option}
                  />
                  {option}
                </li>
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    size="small"
                    {...getTagProps({ index })}
                    key={option}
                  />
                ))
              }
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          )}
          <Box mr="auto" />
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={onAddTasks}
            disabled={!selectedTasks.length}
            sx={{ minWidth: 140, height: 40 }}
          >
            Add Tasks
          </Button>
        </Box>
        {tasks.length > 0 && (
          <Box>
            {tasks.map((task) => (
              <Chip
                variant="filled"
                label={<strong>{task}</strong>}
                key={task}
                sx={{ m: 0.4 }}
                onDelete={() => onDeleteTask(task)}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  }
);

SentimentAnalysis.displayName = "SentimentAnalysis";
