import { memo } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import {
	RectEditIcon,
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
} from "../../../../components/Svgs";

export const DetailsContent = memo(() => {
	return (
		<Box minHeight={400}>
			<Box textAlign='right'>
				<Button variant='contained' startIcon={<RectEditIcon />} sx={{ mb: 3 }}>
					Edit
				</Button>
			</Box>
			<Box sx={{ display: "flex", mb: 6, gap: 2 }}>
				<Box flex={1}>
					<TextField label='Company Name' fullWidth sx={{ mb: 4 }} />
					<TextField label='Company Email' type='email' fullWidth />
				</Box>
				<Box flex={1}>
					<TextField label='Company Address' fullWidth />
				</Box>
			</Box>
			<Typography variant='body1' fontWeight='bold' mb={3}>
				Social Account
			</Typography>
			<Box sx={{ display: "flex", gap: 2 }}>
				<IconButton>
					<FacebookIcon />
				</IconButton>
				<IconButton>
					<TwitterIcon />
				</IconButton>
				<IconButton>
					<LinkedinIcon />
				</IconButton>
			</Box>
		</Box>
	);
});

DetailsContent.displayName = "DetailsContent";
