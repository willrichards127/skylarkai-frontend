import { Container, Grid, Typography } from "@mui/material";
import LogoCard from "./components/LogoCard";
import SettingCard from "./components/SettingCard";

export default function ProfilePage() {
	return (
		<Container sx={{ py: 8 }}>
			<Typography variant='h5' mb={2}>
				Profile
			</Typography>
			<Grid container spacing={3}>
				<Grid item sm={4}>
					<LogoCard />
				</Grid>
				<Grid item sm={8}>
					<SettingCard />
				</Grid>
			</Grid>
		</Container>
	);
}