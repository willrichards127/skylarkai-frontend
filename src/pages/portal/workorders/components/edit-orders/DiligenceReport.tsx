import React, { memo, useCallback, useState, useMemo } from "react";
import {
  Chip,
  Box,
  Button,
  Typography,
  Autocomplete,
  AutocompleteChangeReason,
  TextField,
  Checkbox,
  Tabs,
  Tab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { TasksModal } from "../TasksModal";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const DiligenceReport = memo(
  ({
    content,
    initialTasks,
    onChangedTasks,
  }: {
    content: Record<string, any>;
    initialTasks?: Record<string, Record<string, string[]>>;
    onChangedTasks: (
      currentTasks: Record<string, Record<string, string[]>>
    ) => void;
  }) => {

    const allMainReports = useMemo(() => Object.keys(content), [content]);

    const [selectedMainReport, setSelectedMainReport] = useState<string>("");
    const [selectedSubReport, setSelectedSubReport] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const [taskModal, showTaskModal] = useState<boolean>(false);

    const onAddMainTasks = useCallback(() => {
      showTaskModal(true);
    }, []);

    const onAddedMainReports = useCallback(
      (reports: string[]) => {
        const updatedTasks = initialTasks ? { ...initialTasks } : {};
        const existingMainReports = Object.keys(updatedTasks);
        for (const report of existingMainReports) {
          if (!reports.includes(report)) delete updatedTasks[report];
        }
        for (const report of reports) {
          if (!existingMainReports.includes(report)) {
            updatedTasks[report] = {};
          }
        }
        if (Object.keys(updatedTasks).length) {
          const firstMainReport = Object.keys(updatedTasks)[0];
          const firstSubReport = Object.keys(content[firstMainReport])[0];
          setSelectedMainReport(firstMainReport);
          setSelectedSubReport(firstSubReport);
          if (updatedTasks[firstMainReport][firstSubReport]?.length) {
            setSelectedCategories(
              updatedTasks[firstMainReport][firstSubReport]
            );
          } else {
            setSelectedCategories([]);
          }
        } else {
          setSelectedMainReport("");
        }
        onChangedTasks(updatedTasks);
      },
      [initialTasks, content, onChangedTasks]
    );

    const onChangeMainReport = useCallback(
      (_: React.SyntheticEvent, newValue: string) => {
        setSelectedMainReport(newValue);
        const firstSubReport = Object.keys(content[newValue])[0];
        setSelectedSubReport(firstSubReport);
        if (initialTasks && initialTasks[newValue][firstSubReport]?.length) {
          setSelectedCategories(initialTasks[newValue][firstSubReport]);
        } else {
          setSelectedCategories([]);
        }
      },
      [content, initialTasks]
    );

    const onChangeSubReport = useCallback(
      (
        _: React.SyntheticEvent<Element, Event>,
        newValue: string | null,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        __: AutocompleteChangeReason
      ) => {
        setSelectedSubReport(newValue || "");
        if (
          initialTasks &&
          newValue &&
          initialTasks[selectedMainReport][newValue!]?.length
        ) {
          setSelectedCategories(initialTasks[selectedMainReport][newValue!]);
        } else {
          setSelectedCategories([]);
        }
      },
      [initialTasks, selectedMainReport]
    );

    const onChangeCategories = useCallback(
      (
        _: React.SyntheticEvent<Element, Event>,
        value: any[],
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        __: AutocompleteChangeReason
      ) => {
        setSelectedCategories(value);
      },
      []
    );

    const onAddTasks = useCallback(() => {
      const updated = initialTasks ? { ...initialTasks } : {};
      if (selectedCategories.length)
        updated[selectedMainReport][selectedSubReport] = selectedCategories;
      else delete updated[selectedMainReport][selectedSubReport];
      onChangedTasks(updated);
    }, [
      initialTasks,
      selectedMainReport,
      selectedSubReport,
      selectedCategories,
      onChangedTasks,
    ]);

    const onDeleteTask = useCallback(
      (subReportName: string, category: string) => {
        const updated = initialTasks ? { ...initialTasks } : {};
        updated[selectedMainReport][subReportName] = updated[
          selectedMainReport
        ][subReportName].filter((item) => item !== category);
        if (!updated[selectedMainReport][subReportName].length)
          delete updated[selectedMainReport][subReportName];
        onChangedTasks(updated);
      },
      [initialTasks, selectedMainReport, onChangedTasks]
    );

    const addedTasksPerMainReport = useMemo(() => {
      if (!initialTasks || !Object.keys(initialTasks).length) return [];
      if (
        !initialTasks[selectedMainReport] ||
        !Object.keys(initialTasks[selectedMainReport]).length
      )
        return [];
      return initialTasks[selectedMainReport];
    }, [initialTasks, selectedMainReport]);

    return (
      <Box sx={{ flex: 1 }}>
        <Box sx={{ p: 2, borderRadius: 2, bgcolor: "secondary.main" }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              px: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Add Task
            </Typography>
            <Button startIcon={<AddIcon />} onClick={onAddMainTasks}>
              Add new task
            </Button>
          </Box>
          {!!initialTasks && Object.keys(initialTasks).length > 0 && (
            <Box>
              <Tabs
                value={selectedMainReport}
                onChange={onChangeMainReport}
                variant="scrollable"
                scrollButtons="auto"
              >
                {Object.keys(initialTasks).map((report) => (
                  <Tab key={report} value={report} label={report} />
                ))}
              </Tabs>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "100%",
            alignItems: "center",
            my: 2,
          }}
        >
          {initialTasks &&
            Object.keys(initialTasks).length > 0 &&
            !!selectedMainReport &&
            Object.keys(content[selectedMainReport]).length > 0 && (
              <Autocomplete
                options={Object.keys(content[selectedMainReport])}
                sx={{ minWidth: 420, maxWidth: "100%" }}
                value={selectedSubReport}
                onChange={onChangeSubReport}
                renderOption={(props, option) => (
                  <li {...props} key={option}>
                    {option}
                  </li>
                )}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            )}
          {initialTasks &&
            Object.keys(initialTasks).length > 0 &&
            !!selectedMainReport &&
            Object.keys(content[selectedMainReport]).length > 0 &&
            selectedSubReport && (
              <Autocomplete
                multiple
                limitTags={1}
                options={content[selectedMainReport][selectedSubReport]}
                getOptionLabel={(option) => option}
                sx={{ minWidth: 440, maxWidth: "100%" }}
                value={selectedCategories}
                onChange={onChangeCategories}
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
            disabled={!selectedCategories.length}
            sx={{ minWidth: 140, height: 40 }}
          >
            Add Tasks
          </Button>
        </Box>
        {Object.keys(addedTasksPerMainReport).length > 0 && (
          <Box>
            {Object.entries(addedTasksPerMainReport).map(
              ([subReportName, categories]) => (
                <React.Fragment key={subReportName}>
                  {categories.map((category) => (
                    <Chip
                      variant="filled"
                      label={
                        <Box>
                          <strong>{subReportName}</strong> - {category}
                        </Box>
                      }
                      key={`${subReportName} - ${category}`}
                      sx={{ m: 0.4 }}
                      onDelete={() => onDeleteTask(subReportName, category)}
                    />
                  ))}
                </React.Fragment>
              )
            )}
          </Box>
        )}
        {taskModal && (
          <TasksModal
            open={taskModal}
            onClose={() => showTaskModal(false)}
            initialTasks={initialTasks ? Object.keys(initialTasks) : []}
            tasks={allMainReports}
            onAddedTasks={onAddedMainReports}
          />
        )}
      </Box>
    );
  }
);

DiligenceReport.displayName = "DiligenceReport";
