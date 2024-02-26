import { useSelector } from "react-redux";
import {
  Box,
  Typography,
} from "@mui/material";
import { currentUser } from "../../redux/features/authSlice";

const AdminPage = () => {
  useSelector(currentUser);
  return (
    <Box
    >
      <Typography variant="body1" gutterBottom>Users</Typography>
      {/* <XTable
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
              new Date(row[column.id]).toLocaleString(),
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
      /> */}
    </Box>
  );
};

export default AdminPage;
