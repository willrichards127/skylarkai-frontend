/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Box, Chip, Typography, Button } from "@mui/material";
import Layout from "../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import { XTable } from "../../../components/table";
import { NewTicketModal } from "./components/NewTicketModal";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const statusColorDict: Record<string, any> = {
  error: {
    color: "warning",
    label: "Error",
    icon: <HourglassTopIcon />,
  },
  resolved: {
    color: "success",
    label: "Completed",
    icon: <CheckCircleOutlineIcon />,
  },
  waiting: {
    color: "info",
    label: "Waiting",
    icon: <BorderColorIcon />,
  },
};

// const rows = [
//   {
//     ticket_no: "SKYSUPPORT-001",
//     support_type: "Ask SEC filings",
//     summary: "Please add tutorials to use this feature.",
//     status: "waiting",
//     created_at: "12/03/23",
//     updated_at: "12/18/23",
//   },
//   {
//     ticket_no: "SKYSUPPORT-002",
//     support_type: "Create Investment Memo",
//     summary: "Please add a feature to use docx file as a template",
//     status: "error",
//     created_at: "12/03/23",
//     updated_at: "12/18/23",
//   },
//   {
//     ticket_no: "SKYSUPPORT-003",
//     support_type: "Compare documents",
//     summary:
//       "Please make this feature available to compare multiple documents.",
//     status: "resolved",
//     created_at: "12/03/23",
//     updated_at: "12/18/23",
//   },
//   {
//     ticket_no: "SKYSUPPORT-004",
//     support_type: "Ask SEC filings",
//     summary: "Please add tutorials to use this feature.",
//     status: "waiting",
//     created_at: "12/03/23",
//     updated_at: "12/18/23",
//   },
//   {
//     ticket_no: "SKYSUPPORT-005",
//     support_type: "Ask SEC filings",
//     summary: "Please add guide to use this feature.",
//     status: "resolved",
//     created_at: "12/03/23",
//     updated_at: "12/18/23",
//   },
//   {
//     ticket_no: "SKYSUPPORT-006",
//     support_type: "Ask SEC filings",
//     summary: "Please add support page.",
//     status: "resolved",
//     created_at: "12/03/23",
//     updated_at: "12/18/23",
//   },
//   {
//     ticket_no: "SKYSUPPORT-007",
//     support_type: "Ask SEC filings",
//     summary: "Please add tutorials to use this feature.",
//     status: "waiting",
//     created_at: "12/03/23",
//     updated_at: "12/18/23",
//   },
// ];

export default function SupportPage() {
  const [ticketModal, showTicketModal] = useState<boolean>(false);
  return (
    <Layout>
      <Box sx={{ height: "100%", p: 8 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h5">Support</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => showTicketModal(true)}
          >
            Create New Support
          </Button>
        </Box>
        <XTable
          columns={[
            {
              id: "ticket_no",
              label: "Support Ticket No",
            },
            {
              id: "support_type",
              label: "Support Type",
              align: "left",
            },
            {
              id: "summary",
              label: "Summary",
              align: "left",
            },
            {
              id: "created_at",
              label: "Created At",
            },
            {
              id: "updated_at",
              label: "Updated At",
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
          ]}
          rows={[]}
        />
      </Box>
      {ticketModal && (
        <NewTicketModal
          open={ticketModal}
          onClose={() => showTicketModal(false)}
        />
      )}
    </Layout>
  );
}
