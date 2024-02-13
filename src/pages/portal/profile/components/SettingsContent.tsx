import { memo } from "react";
import { Box, Typography, Switch } from "@mui/material";

export const SettingsContent = memo(() => {
	return (
		<Box minHeight={400}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					color: "white",
					width: "100%",
					bgcolor: "background.paper",
					borderRadius: 2,
					px: 3,
					py: 1,
				}}
			>
				<Typography variant='body2' fontWeight='bold'>
					Notifications
				</Typography>
				<Switch defaultChecked />
			</Box>
		</Box>
	);
});

SettingsContent.displayName = "SettingsContent";
