import React, { memo } from "react";
import { Box, CircularProgress, Typography, colors } from "@mui/material";

export const CircleSpinner = memo(
	({
		size = 40,
		description,
	}: {
		description?: string;
		size?: number | string;
	}) => {
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					p: 4,
				}}
			>
				<CircularProgress size={size} />
				{!!description && (
					<Typography
						variant='subtitle2'
						sx={{ color: colors.grey[400], my: 2 }}
					>
						{description}
					</Typography>
				)}
			</Box>
		);
	}
);
CircleSpinner.displayName = "CircleSpinner";
