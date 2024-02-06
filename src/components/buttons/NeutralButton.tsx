import { Button } from "@mui/material";
import { TXButtonProps } from "./XButton";

export const NeutralButton = (props: TXButtonProps) => {
	const { sxProps, children, ...rest } = props;
	return (
		<Button
			sx={{
				...(sxProps && { ...sxProps }),
				"&.MuiButton-contained": {
					bgcolor: "secondary.light",
				},
				minHeight: rest.size === "small" ? "auto" : 50,
				"&.Mui-disabled": {
					color: "secondary.dark",
					opacity: 0.2,
				},
			}}
			{...rest}
		>
			{children}
		</Button>
	);
};