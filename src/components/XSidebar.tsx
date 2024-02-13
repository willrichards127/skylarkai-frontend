import React, { memo } from "react";
import { Box } from "@mui/material";

export const XSidebar = memo(
	({ width, children }: { width: number; children: React.ReactNode }) => {
		return (
			<Box
				sx={{
					width,
					height: "100%",
					bgcolor: "secondary.main",
					borderTop: "2px solid",
					borderColor: "background.paper",
					p: 1,
					overflowY: "auto",
				}}
			>
				{children}
			</Box>
		);
	}
);

XSidebar.displayName = "XSidebar";
