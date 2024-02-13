import { Box } from "@mui/material";
import ReportsContainer from "./components/ReportsContainer";

export default function ReportsPage() {
	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", height: "100%" }}
		>
			<ReportsContainer />
		</Box>
	);
}