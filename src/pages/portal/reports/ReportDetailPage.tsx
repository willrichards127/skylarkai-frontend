import { Box } from "@mui/material";
import ReportPanel from "./components/ReportPanel";
import { useParams } from "react-router-dom";

export default function ReportDetailPage() {
  const reportId = useParams<{reportId: string}>().reportId!;

	return (
		<Box sx={{ bgcolor: "secondary.dark", height: "100%" }}>
			<ReportPanel reportId={reportId} />
		</Box>
	);
}