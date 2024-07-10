import { memo } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export const LoadingSpinner = memo(
	({
		size = 40,
		loadingDescription,
	}: {
		loadingDescription?: string;
		size?: number;
	}) => {
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
				}}
			>
				<CircularProgress size={size} thickness={2} />
				{!!loadingDescription && (
					<Typography variant='subtitle2' color='primary.main' mt={4}>
						{loadingDescription}
					</Typography>
				)}
			</Box>
		);
	}
);

LoadingSpinner.displayName = "LoadingSpinner";
