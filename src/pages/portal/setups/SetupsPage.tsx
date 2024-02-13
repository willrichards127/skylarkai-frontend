import { Box, Typography } from "@mui/material";
import SetupsContainer from "./components/SetupsContainer";

export default function SetupsPage() {
	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", height: "100%", pl: 6 }}
		>
			{/* <Typography variant='h6' fontWeight='bold' mx={4} mt={4}>
				My Setup1
			</Typography>
			<SetupsContainer /> */}
			<Typography variant='h6' fontWeight='bold' m={4}>
				New Setup
			</Typography>
			<SetupsContainer hasNewCard />
		</Box>
	);
}
