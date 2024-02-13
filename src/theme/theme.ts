// import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// const openSans = Open_Sans({
// 	weight: ["300", "400", "500", "700"],
// 	subsets: ["latin"],
// 	display: "swap",
// });

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#A9B6FF",
		},
		secondary: {
			main: "#292943",
			dark: "#202024",
			light: "#E9EBEC",
		},
		background: {
			paper: "#1C1C20",
		},
		// divider: amber[200],

		// text: {
		// 	primary: grey[900],
		// 	secondary: grey[800],
		// },
	},
	// typography: {
	// 	fontFamily: openSans.style.fontFamily,
	// },
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					"&.MuiButton-root": {
						textTransform: "none",
					},
					"&.MuiTab-root": {
						textTransform: "none",
					},
				},
			},
		},
	},
});

export default theme;
