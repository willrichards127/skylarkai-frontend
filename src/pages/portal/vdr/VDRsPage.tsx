import { Box, Button, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { VDRCard } from "./components/VDRCard";
import { IVDR } from "./interfaces";

const tempVDRs: IVDR[] = [
  {
    id: 1,
    name: "VDR 1",
    filenames: ["file1.pdf", "file2.pdf", "file3.pdf", "file4.pdf"],
    rating: 5,
		status: 2,
    created: "2024-04-12 02:33 PM",
    updated: "2024-04-12 03:50 PM",
  },
  {
    id: 2,
    name: "VDR 2",
    filenames: ["file1.pdf", "file2.pdf", "file3.pdf"],
    rating: 2,
		status: 1,
    created: "2024-04-12 02:33 PM",
    updated: "2024-04-12 03:50 PM",
  },
  {
    id: 3,
    name: "VDR 3",
    filenames: ["file1.pdf", "file2.pdf"],
    rating: 3,
		status: 0,
    created: "2024-04-12 02:33 PM",
    updated: "2024-04-12 03:50 PM",
  },
  {
    id: 4,
    name: "VDR 4",
    filenames: ["file1.pdf", "file2.pdf"],
    rating: 4,
		status: 2,
    created: "2024-04-12 02:33 PM",
    updated: "2024-04-12 03:50 PM",
  },
  {
    id: 5,
    name: "VDR 5",
    filenames: ["file1.pdf", "file2.pdf"],
    rating: 1,
		status: 2,
    created: "2024-04-12 02:33 PM",
    updated: "2024-04-12 03:50 PM",
  },
];

export default function VDRsPage() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", height: "100%", p: 8 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Virtual Data Rooms
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Add VDR
        </Button>
      </Box>
      <Box
        sx={{
          height: "calc(100% - 64px)",
        }}
      >
        <Grid container spacing={4}>
          {tempVDRs.map((vdr) => (
            <Grid key={vdr.id} item xs={12} sm={6} md={4} lg={3}>
              <VDRCard key={vdr.id} {...vdr} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
