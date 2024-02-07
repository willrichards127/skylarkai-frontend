import React, { memo } from "react";
import { Chip } from "@mui/material";

export const XChip = memo(
	({ label, color }: { label: React.ReactNode; color?: string }) => {
		return (
			<Chip
				label={label}
				size='small'
				sx={{
					"&.MuiChip-root": {
						bgcolor: color || "auto",
						borderRadius: 1,
						height: "20px",
					},
				}}
			/>
		);
	}
);

XChip.displayName = "XChip";
