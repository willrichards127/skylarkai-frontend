import { useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Chip, Button, CircularProgress } from "@mui/material";
import AGTable from "../../components/agTable/AGTable";
import { currentUser } from "../../redux/features/authSlice";
import {
  useGetPersonasQuery,
  useGetTenantsQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../redux/services/userAPI";
import { ColDef } from "ag-grid-community";
import { toast } from "react-toastify";

const AdminPage = () => {
  const { user } = useSelector(currentUser);
  const { isLoading: loadingPersonas, data: personas } = useGetPersonasQuery();
  const { isLoading: loadingTenants, data: tenants } = useGetTenantsQuery();
  const { isLoading: loadingUsers, data: users } = useGetUsersQuery(undefined, {
    skip: loadingPersonas || loadingTenants,
  });

  const [updateUserStatus, { isSuccess }] = useUpdateUserMutation();

  const onAction = useCallback(
    (row: Record<string, any>, actionType: string) => {
      if (actionType === "Approve") {
        updateUserStatus({ user_id: row.id, user_status: 1 });
      } else {
        // Decline
        updateUserStatus({ user_id: row.id, user_status: 2 });
      }
    },
    [updateUserStatus]
  );

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: "id", headerName: "User ID", maxWidth: 90 },
      {
        field: "username",
        headerName: "Username",
        align: "left",
        filter: "agTextColumnFilter",
      },
      {
        field: "email",
        headerName: "Email",
        align: "left",
        filter: "agTextColumnFilter",
      },
      {
        field: "phone",
        headerName: "Phone",
        align: "left",
        filter: "agTextColumnFilter",
      },
      {
        field: "tenant",
        headerName: "Tenant",
        filter: "agTextColumnFilter",
      },
      {
        field: "persona",
        headerName: "Persona",
        filter: "agTextColumnFilter",
      },
      {
        field: "status",
        headerName: "Status",
        filter: "agTextColumnFilter",
        cellRenderer: (params: any) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "42px",
            }}
          >
            <Chip
              size="small"
              label={
                params.data.status === 1
                  ? "Approved"
                  : params.data.status === 3
                  ? "Requested"
                  : "Rejected"
              }
              color={
                params.data.status === 1
                  ? "success"
                  : params.data.status === 3
                  ? "info"
                  : "warning"
              }
              sx={{
                fontSize: 12,
                "&.MuiChip-root": { width: 120 },
                color: "white",
              }}
            />
          </Box>
        ),
      },
      {
        field: "created_at",
        headerName: "Created At",
        filter: "agDateColumnFilter",
        valueFormatter: (params: any) =>
          new Date(params.value).toLocaleString(),
      },
      {
        field: "actions",
        headerName: "Actions",
        cellRenderer: (params: any) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "42px",
              }}
            >
              <Button
                size="small"
                variant="contained"
                color={params.data.status === 1 ? "warning" : "info"}
                disabled={user!.user_id === params.data.id}
                onClick={() =>
                  onAction(
                    params.data as Record<string, any>,
                    params.data.status === 1 ? "Decline" : "Approve"
                  )
                }
              >
                {params.data.status === 1 ? "Decline" : "Approve"}
              </Button>
            </Box>
          );
        },
      },
    ],
    [user, onAction]
  );

  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated the selected user's status successfully!");
    }
  }, [isSuccess]);

  return (
    <Box p={4}>
      <Typography variant="body1" fontWeight="bold" gutterBottom>
        User Management
      </Typography>
      {loadingUsers || loadingPersonas || loadingTenants ? (
        <Box p={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box height={800}>
          <AGTable
            columnDefs={columnDefs}
            rowData={(users || []).map((user) => ({
              ...user,
              persona: (personas || []).find(
                (persona) => persona.id === user.user_role
              )?.name,
              tenant: (tenants || []).find(
                (tenant) => tenant.id === user.tenant_id
              )?.name,
            }))}
          />
        </Box>
      )}
    </Box>
  );
};

export default AdminPage;
