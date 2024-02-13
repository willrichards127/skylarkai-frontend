import React, { memo, useState, useCallback } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeButton = ({
	label,
	icon,
	activated,
	onClick,
}: {
	label: string;
	icon: React.ReactNode;
	activated: boolean;
	onClick: () => void;
}) => {
	const theme = useTheme();
	return (
		<Box
			onClick={onClick}
			sx={{
				cursor: "pointer",
				textAlign: "center",
				color: "white",
				width: 260,
				height: 190,
				bgcolor: "secondary.main",
				borderRadius: 1,
				opacity: activated ? 1 : 0.2,
				border: activated ? `2px solid ${theme.palette.primary.main}` : "none",
				p: 4,
			}}
		>
			{icon}
			<Typography
				variant='body2'
				fontWeight='bold'
				sx={{ textTransform: "capitalize", mt: 3 }}
			>
				{label}
			</Typography>
		</Box>
	);
};

export const ThemeContent = memo(() => {
	const [theme, setTheme] = useState<"dark" | "light">("dark");
	const onChangeTheme = useCallback((mode: string) => {
		setTheme(mode as "dark" | "light");
	}, []);
	return (
		<Box
			minHeight={400}
			sx={{ p: 4, display: "flex", gap: 4, justifyContent: "center" }}
		>
			{[
				{
					label: "light",
					icon: <LightModeIcon sx={{ fontSize: 72 }} />,
					activated: theme === "light",
				},
				{
					label: "dark",
					icon: <DarkModeIcon sx={{ fontSize: 72 }} />,
					activated: theme === "dark",
				},
			].map((mode) => (
				<ThemeButton
					key={mode.label}
					{...mode}
					onClick={() => onChangeTheme(mode.label)}
				/>
			))}
		</Box>
	);
});

ThemeContent.displayName = "ThemeContent";
