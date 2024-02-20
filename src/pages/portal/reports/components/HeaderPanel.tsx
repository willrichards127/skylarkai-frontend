import { memo, useMemo } from "react";
import { Box, IconButton, Breadcrumbs, Typography, Avatar, colors, Button } from "@mui/material";
import { DeleteIcon, CalendarIcon } from "../../../../components/Svgs";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useGetSetupsQuery } from "../../../../redux/services/setupApi";
import { Link } from "react-router-dom";
import { REPORTS_DICT } from "../../../../shared/models/constants";

export const HeaderPanel = memo(
  ({
    setupId,
    reportType,
    onSave,
    onDelete,
    onPrint,
  }: {
    setupId: number;
    reportType: string;
    onPrint: () => void;
    onDelete: () => void;
    onSave: () => void;
  }) => {
    const { isLoading, data } = useGetSetupsQuery();
    const companyName = useMemo(() => {
      if (!data) return null;
      return data.find((company) => company.id === setupId)!.name;
    }, [data, setupId]);

    return (
      <Box
        sx={{
          py: 2,
          px: 4,
          bgcolor: "black",
          height: 130,
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton href="/portal/reports">
            <ArrowBackIcon />
          </IconButton>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Link color="inherit" to="/portal/reports">
              Reports
            </Link>
            <Typography color="text.primary">
              {REPORTS_DICT[reportType].label} Report
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", px: 2 }}>
          {!isLoading && (
            <Box sx={{ display: "flex", gap: 2, mr: "auto" }}>
              <Avatar
                sx={{ width: 48, height: 48, bgcolor: colors.blue[500] }}
                alt={companyName!}
              >
                {companyName!.substring(0, 1)}
              </Avatar>
              <Box>
                <Typography variant="body2">{companyName}</Typography>
                <Typography variant="h6">
                  {REPORTS_DICT[reportType].label} Report
                </Typography>
              </Box>
              <Box pt={3} pl={4}>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                <CalendarIcon /> 2022-2024 Monthly
                </Box>
              </Box>
            </Box>
          )}
          <Button
            size="small"
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={onPrint}
          >
            Print
          </Button>
          <Button
            size="small"
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={onSave}
          >
            Save
          </Button>
          <Button
            size="small"
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={onDelete}
          >
            Delete
          </Button>
        </Box>
      </Box>
    );
  }
);

HeaderPanel.displayName = "HeaderPanel";
