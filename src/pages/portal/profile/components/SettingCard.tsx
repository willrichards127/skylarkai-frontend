import { memo } from "react";
import { Box } from "@mui/material";
import { XTabControl } from "../../../../components/XTabControl";
import { DetailsContent } from "./DetailsContent";
import { SettingsContent } from "./SettingsContent";
import { ThemeContent } from "./ThemeContent";

const SettingCard = memo(() => {
	return (
		<Box
			sx={{
				borderRadius: 2,
				width: "100%",
				height: "100%",
				p: 3,
				bgcolor: "secondary.dark",
				position: "relative",
			}}
		>
			<XTabControl
				tabs={[
					{
						label: "Details",
						content: <DetailsContent />,
					},
					{
						label: "Settings",
						content: <SettingsContent />,
					},
					{
						label: "Theme",
						content: <ThemeContent />,
					},
				]}
			/>
		</Box>
	);
});

SettingCard.displayName = "SettingCard";

export default SettingCard;
