import { memo } from "react";
import { Box, Avatar, IconButton, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { RectEditIcon } from "../../../../components/Svgs";

const LogoCard = memo(() => {
	return (
		<Box
			sx={{
				borderRadius: 2,
				width: "100%",
				p: 4,
				bgcolor: "secondary.dark",
				position: "relative",
				textAlign: "-webkit-center",
			}}
		>
			<Avatar
				alt='Baxter Logo'
				src='/baxter_lg.png'
				sx={{ width: 212, height: 212 }}
			/>
			<IconButton
				sx={{
					marginTop: -4,
					bgcolor: "secondary.light",
					border: "1px solid",
					"&.MuiIconButton-root:hover": {
						bgcolor: "secondary.light",
					},
				}}
			>
				<RectEditIcon width={22} height={22} />
			</IconButton>
			<Typography variant='h5' fontWeight='bold' mt={2}>
				Baxter
			</Typography>
			<Box
				sx={{
					my: 1,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<PlaceIcon />
				<Typography variant='body1' ml={1}>
					USA
				</Typography>
			</Box>
		</Box>
	);
});

LogoCard.displayName = "LogoCard";

export default LogoCard;
