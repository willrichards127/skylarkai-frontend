import React, { memo } from "react";
import { SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export type TXPanelProps = {
	header?: React.ReactNode;
	children: React.ReactNode;
	footer?: React.ReactNode;
	sxProps?: SxProps;
	sxHeaderProps?: SxProps;
	sxBodyProps?: SxProps;
};

export const XPanel = memo((props: TXPanelProps) => {
	const { header, footer, sxProps, sxHeaderProps, sxBodyProps, children } =
		props;
	return (
		<Box
			sx={{
				borderRadius: 2,
				width: "100%",
				display: "flex",
				flexDirection: "column",
				bgcolor: "secondary.main",
				...(!!sxProps && { ...sxProps }),
			}}
		>
			{!!header && (
				<Box
					sx={{ px: 1, py: 0.5, ...(!!sxHeaderProps && { ...sxHeaderProps }) }}
				>
					{header}
				</Box>
			)}
			{!!header && <Divider />}
			<Box
				sx={{
					px: 1,
					pt: 1,
					flex: 1,
					...(!!sxBodyProps && { ...sxBodyProps }),
				}}
			>
				{children}
			</Box>
			{!!footer && (
				<Box px={1} pb={1}>
					{footer}
				</Box>
			)}
		</Box>
	);
});

XPanel.displayName = "XPanel";
