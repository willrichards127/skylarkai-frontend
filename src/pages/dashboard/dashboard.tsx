import {
  colors,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Chip,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircleIcon from "@mui/icons-material/Circle";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ApexChart from "react-apexcharts";

const chartColors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#3F51B5",
  "#03A9F4",
  "#4CAF50",
  "#F9CE1D",
  "#FF9800",
];

const statusColorDict: Record<string, any> = {
  "0": {
    color: "warning",
    label: "In Progress",
    icon: <HourglassTopIcon />,
  },
  "1": {
    color: "success",
    label: "Completed",
    icon: <CheckCircleOutlineIcon />,
  },
  "2": {
    color: "info",
    label: "Draft",
    icon: <BorderColorIcon />,
  },
};

const targetCompanies = [
  {
    id: "card_1",
    name: "Baxter",
    logo: "/companies/baxter.png",
  },
  {
    id: "card_2",
    name: "J & J",
    logo: "/companies/jj.png",
  },
  {
    id: "card_3",
    name: "United Technologies",
    logo: "/companies/united_tech.png",
  },
  {
    id: "card_4",
    name: "Carrier",
    logo: "/companies/carrier.png",
  },
];

const companyData = [
  {
    status: "New Company",
    count: 4,
  },
  {
    status: "Active Company",
    count: 8,
  },
  {
    status: "Inactive Company",
    count: 2,
  },
];

const reportIssueData = [
  {
    status: "New Report",
    count: 12,
  },
  {
    status: "Resolved",
    count: 7,
  },
  {
    status: "In progress",
    count: 1,
  },
];

const supportTickets = [
  {
    id: "baxter0001",
    status: 1, // 1: created, 2: resolved, 3: in progress
    name: "Ticket Name 1",
    created_at: "23 Jun, 2023, 10:12 AM",
    created_by: "Baxter",
  },
  {
    id: "baxter0002",
    status: 2,
    name: "Ticket Name 2",
    created_at: "23 Jun, 2023, 10:12 AM",
    created_by: "Baxter",
  },
  {
    id: "baxter0003",
    status: 1,
    name: "Ticket Name 3",
    created_at: "23 Jun, 2023, 10:12 AM",
    created_by: "Baxter",
  },
  {
    id: "baxter0004",
    status: 1,
    name: "Ticket Name 4",
    created_at: "23 Jun, 2023, 10:12 AM",
    created_by: "Baxter",
  },
  {
    id: "baxter0005",
    status: 3,
    name: "Ticket Name 5",
    created_at: "23 Jun, 2023, 10:12 AM",
    created_by: "Baxter",
  },
  {
    id: "baxter0006",
    status: 2,
    name: "Ticket Name 6",
    created_at: "23 Jun, 2023, 10:12 AM",
    created_by: "Baxter",
  },
];

const records = [
  {
    work_order_id: "BAX1134",
    target_company: "Baxter",
    report_name: "Commercial Due Diligence Report",
    sub_report_name: "Market Analysis",
    logo: "/companies/baxter.png",
    status: "0", // 0: in progress, 1: completed, 2: inactive
    created_at: "Nov 11, 2023",
  },
  {
    work_order_id: "BAX11345",
    target_company: "Baxter",
    report_name: "Commercial Due Diligence Report",
    sub_report_name: "Market Analysis",
    logo: "/companies/baxter.png",
    status: "0",
    created_at: "Nov 09, 2023",
  },
  {
    work_order_id: "BAX11336",
    target_company: "Baxter",
    report_name: "Commercial Due Diligence Report",
    sub_report_name: "Market Analysis",
    logo: "/companies/baxter.png",
    status: "1",
    created_at: "Nov 08, 2023",
  },
  {
    work_order_id: "BAX11338",
    target_company: "Baxter",
    report_name: "Commercial Due Diligence Report",
    sub_report_name: "Market Analysis",
    logo: "/companies/baxter.png",
    status: "2",
    created_at: "Nov 11, 2023",
  },
  {
    work_order_id: "BAX11346",
    target_company: "Baxter",
    report_name: "Commercial Due Diligence Report",
    sub_report_name: "Market Analysis",
    logo: "/companies/baxter.png",
    status: "1",
    created_at: "Nov 08, 2023",
  },
  {
    work_order_id: "BAX11358",
    target_company: "Baxter",
    report_name: "Commercial Due Diligence Report",
    sub_report_name: "Market Analysis",
    logo: "/companies/baxter.png",
    status: "2",
    created_at: "Nov 11, 2023",
  },
];

const columns = [
  // {
  //   id: "work_order_id",
  //   label: "Work Order ID",
  // },
  {
    id: "target_company",
    label: "Target Company",
  },
  {
    id: "report_name",
    label: "Report Name",
  },
  {
    id: "sub_report_name",
    label: "Sub-report Name",
  },
  {
    id: "created_at",
    label: "Created At",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "action",
    label: "Action",
  },
];

const DashboardPage2 = () => {
  return (
    <Box sx={{ height: "100%", bgcolor: "secondary.dark", py: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Typography variant="h5">Dashboard Page</Typography>
        <Box mr="auto" />
        <TextField
          select
          size="small"
          name="company"
          label="Target Company"
          // value={form.company}
          // onChange={onChange}
          SelectProps={{
            native: true,
          }}
        >
          {targetCompanies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </TextField>
        <TextField
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarMonthIcon />
              </InputAdornment>
            ),
          }}
          defaultValue="Last week"
          variant="outlined"
          sx={{ ml: 2 }}
        />
      </Box>
      <Box sx={{ p: 2, height: 'calc(100% - 40px)', overflowY: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={8} sx={{ height: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "black",
                  }}
                >
                  <Box fontWeight="bold">Target Company</Box>
                  <ApexChart
                    options={{
                      colors: chartColors,
                      theme: {
                        mode: "dark",
                      },
                      chart: {
                        animations: {
                          enabled: false,
                        },
                        background: "transparent",
                      },
                      plotOptions: {
                        pie: {
                          donut: {
                            labels: {
                              show: true,
                              name: {
                                show: true,
                                fontSize: "12",
                              },
                            },
                          },
                        },
                      },
                      labels: companyData.map((company) => company.status),
                    }}
                    series={companyData.map((company) => company.count)}
                    type="donut"
                    height="240px"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ p: 2, borderRadius: 2, bgcolor: "black" }}>
                  <Box fontWeight="bold">Report Issue</Box>
                  <ApexChart
                    options={{
                      colors: chartColors,
                      theme: {
                        mode: "dark",
                      },
                      chart: {
                        animations: {
                          enabled: false,
                        },
                        background: "transparent",
                      },
                      plotOptions: {
                        pie: {
                          donut: {
                            labels: {
                              show: true,
                              name: {
                                show: true,
                                fontSize: "12",
                              },
                            },
                          },
                        },
                      },
                      labels: reportIssueData.map((company) => company.status),
                    }}
                    series={reportIssueData.map((company) => company.count)}
                    height="240px"
                    type="donut"
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ p: 2, borderRadius: 2, bgcolor: "black", height: 260 }}
                >
                  <Box fontWeight="bold">Time Metrics</Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "space-around",
                      pt: 8,
                    }}
                  >
                    <Box>
                      <Box sx={{ fontSize: 16, fontWeight: "bold" }}>
                        12 hrs
                      </Box>
                      <Box sx={{ color: "grey" }}>System Uptime</Box>
                    </Box>
                    <Box>
                      <Box sx={{ fontSize: 16, fontWeight: "bold" }}>
                        30 mins
                      </Box>
                      <Box sx={{ color: "grey" }}>System Downtime</Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{ p: 2, borderRadius: 2, bgcolor: "black", height: 260 }}
                >
                  <Box fontWeight="bold" mb={2}>
                    Target Company List
                  </Box>
                  <Box sx={{ height: 240, overflowY: "auto" }}>
                    {targetCompanies.map((company) => (
                      <Box
                        key={company.id}
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignItems: "center",
                          py: 1,
                        }}
                      >
                        <img
                          src={company.logo}
                          width={24}
                          height={24}
                          alt={company.name}
                        />
                        {company.name}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} sx={{ height: "100%" }}>
            <Box sx={{ p: 2, borderRadius: 2, bgcolor: "black", height: 570 }}>
              <Box fontWeight="bold">Support Tickets</Box>
              <Box sx={{ height: 480, overflowY: "auto", p: 2 }}>
                {supportTickets.map((ticket) => (
                  <Box
                    key={ticket.id}
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      py: 1,
                      fontSize: 13,
                    }}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: 16,
                        color:
                          ticket.status === 1
                            ? "red"
                            : ticket.status === 2
                            ? "green"
                            : "blue",
                      }}
                    />
                    <Box>{ticket.name}</Box>
                    <Box>{ticket.created_at}</Box>
                    <Box px={2}>{ticket.created_by}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Box fontWeight="bold" mb={2}>
            Generated Reports:
          </Box>
          <Box
            component="table"
            sx={{
              backgroundColor: "secondary.dark",
              borderCollapse: "collapse",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                {columns.map((th) => (
                  <Box
                    key={th.id}
                    component="th"
                    sx={{
                      fontSize: 14,
                      color: "secondary.contrastText",
                      bgcolor: "secondary.main",
                      borderBottom: `1px solid ${colors.grey[800]}`,
                      whiteSpace: "break-spaces",
                      p: 2,
                      textAlign: th.id === "target_company" ? "left" : "center",
                    }}
                  >
                    {th.label}
                  </Box>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((row, rowIndex) => (
                <Box
                  component="tr"
                  key={`tr-${rowIndex}`}
                  sx={{
                    bgcolor: "black",
                    "&:hover": {
                      // bgcolor: colors.grey[600],
                      cursor: "pointer",
                    },
                  }}
                >
                  {columns.map((col) => (
                    <Box
                      component="td"
                      key={`td-${col.id}`}
                      style={{
                        fontSize: 14,
                        padding: "12px 16px",
                        textAlign: "center",
                        whiteSpace: "break-spaces",
                      }}
                    >
                      {col.id === "target_company" ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <img
                            src={(row as any)["logo"]}
                            width={28}
                            height={28}
                            alt={(row as any)["logo"]}
                          />
                          {(row as any)[col.id]}
                        </Box>
                      ) : col.id === "status" ? (
                        <Chip
                          size="small"
                          icon={statusColorDict[row[col.id]].icon}
                          label={statusColorDict[row[col.id]].label}
                          color={statusColorDict[row[col.id]].color}
                          sx={{
                            "&.MuiChip-root": { width: 120 },
                            color: "white",
                          }}
                        />
                      ) : col.id === "action" ? (
                        <Box>
                          <Button size="small">View</Button>
                        </Box>
                      ) : (
                        (row as any)[col.id]
                      )}
                    </Box>
                  ))}
                </Box>
              ))}
            </tbody>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage2;
