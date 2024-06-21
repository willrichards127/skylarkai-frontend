import { memo, useCallback } from "react";
import {
  colors,
  InputAdornment,
  Chip,
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";
import { XTable } from "../../../../components/table";
import { useGetWorkOrdersPerCompanyQuery } from "../../../../redux/services/workOrderApi";
import { useNavigate } from "react-router-dom";
import { convertUtcToLocal } from "../../../../shared/utils/dateUtils";

const statusColorDict: Record<number, any> = {
  2: {
    color: "warning",
    label: "In Progress",
    icon: <HourglassTopIcon />,
  },
  3: {
    color: "success",
    label: "Completed",
    icon: <CheckCircleOutlineIcon />,
  },
  1: {
    color: "info",
    label: "Draft",
    icon: <BorderColorIcon />,
  },
};

const OrdersContainer = memo(
  ({ companyId, companyName }: { companyId: string; companyName: string }) => {
    const navigate = useNavigate();
    const { isFetching, data } = useGetWorkOrdersPerCompanyQuery({
      companyId: +companyId,
    });
    /** FIXME: React Navigate */
    const onView = useCallback(
      (row: any) => {
        if (row.status === 1) {
          // draft
          navigate(
            `/portal/companies/${companyId}/${row.id}?company_name=${companyName}&view_mode=edit&work_order_name=${row.work_order_name}`
          );
        } else if (row.status === 2) {
          // in progress
          navigate(
            `/portal/companies/${companyId}/${row.id}?company_name=${companyName}&view_mode=wip&work_order_name=${row.work_order_name}`
          );
        } else {
          // completed
          navigate(
            `/portal/companies/${companyId}/${row.id}?company_name=${companyName}&view_mode=completed&work_order_name=${row.work_order_name}`
          );
        }
      },
      [navigate, companyId, companyName]
    );

    const onAddWorkOrder = useCallback(() => {
      navigate(
        `/portal/companies/${companyId}/new?company_name=${companyName}&view_mode=edit`
      );
    }, [navigate, companyId, companyName]);

    return (
      <Box sx={{ height: "100%", overflowY: "auto", py: 2, px: 12 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Work Orders
          </Typography>
          <Box mr="auto" />
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            autoComplete="off"
            size="small"
            variant="outlined"
            sx={{ mr: 2, "& .MuiInputBase-root": { minWidth: 320 } }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onAddWorkOrder}
          >
            Add Work Order
          </Button>
        </Box>

        <Box
          sx={{
            py: 4,
          }}
        >
          <XTable
            loading={isFetching}
            columns={[
              { id: "work_order_name", label: "Work Order ID" },
              {
                id: "target_company_id",
                label: "Target Company",
                cellRenderer: ({ row }: { row: any }) => (
                  <Box
                    sx={{
                      display: "flex",
                      ml: 4,
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        bgcolor: colors.blue[500],
                      }}
                      src={row["logo"]}
                      alt={companyName}
                    >
                      {companyName!.substring(0, 1)}
                    </Avatar>
                    {companyName}
                  </Box>
                ),
              },
              {
                id: "status",
                label: "Status",
                cellRenderer: ({ row, column }: { row: any; column: any }) => (
                  <Chip
                    size="small"
                    icon={statusColorDict[row[column.id]].icon}
                    label={statusColorDict[row[column.id]].label}
                    color={statusColorDict[row[column.id]].color}
                    sx={{
                      fontSize: 12,
                      "&.MuiChip-root": { width: 120 },
                      color: "white",
                    }}
                  />
                ),
              },
              {
                id: "created_at",
                label: "Created At",
                cellRenderer: ({ row, column }: { row: any; column: any }) =>
                  convertUtcToLocal(row[column.id]),
              },
              {
                id: "actions",
                label: "Actions",
                cellRenderer: ({ row }) => (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button size="small" onClick={() => onView(row)}>
                      View
                    </Button>
                  </Box>
                ),
              },
            ]}
            rows={data}
          />
        </Box>
      </Box>
    );
  }
);

OrdersContainer.displayName = "OrdersContainer";

export default OrdersContainer;
