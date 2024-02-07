import { memo } from "react";
import { Box, Typography, colors } from "@mui/material";
import { Link } from "react-router-dom";

export const ThirdStep = memo(({ setupId }: { setupId: number }) => {
	const internalLink = `${window.location.protocol}//${window.location.host}/chatbot/chatbot_${setupId}`;
	const embededUrl = `<iframe src="${window.location.host}" width=400px height=620px style="display: block; position: fixed; border: none; overflow: hidden; z-index: 99999; background-color: transparent; border-radius: 10px; width=400px; height=620px; bottom: 0; right: 0;"></iframe>`;

	return (
		<Box minHeight={320}>
			<Typography
				variant='body1'
				color='primary.main'
				fontWeight='bold'
				gutterBottom
			>
				Export
			</Typography>
			<Typography variant='subtitle2' color='text.secondary' mb={2}>
				Your interface is deployed! <br />
				You can share or embeded your interface using the following links.
			</Typography>
			<Typography
				variant='body1'
				color='primary.main'
				fontWeight='bold'
				gutterBottom
			>
				Internal usage URL
			</Typography>
			<Box sx={{ bgcolor: colors.grey[300], p: 1, borderRadius: 1, mb: 4 }}>
				<Link to={internalLink} target='_blank'>
					<code style={{ fontSize: 13 }}>{internalLink}</code>
				</Link>
			</Box>
			<Typography
				variant='body1'
				color='primary.main'
				fontWeight='bold'
				gutterBottom
			>
				Embeded for website
			</Typography>
			<Box
				sx={{
					color: "secondary.main",
					bgcolor: colors.grey[300],
					p: 1,
					borderRadius: 1,
					mb: 4,
				}}
			>
				<code style={{ fontSize: 13 }}>{embededUrl}</code>
			</Box>
		</Box>
	);
});

ThirdStep.displayName = "ThirdStep";
