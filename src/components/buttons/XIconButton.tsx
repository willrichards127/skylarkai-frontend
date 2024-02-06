import { Button } from "@mui/material";
import { TXButtonProps } from "./XButton";

export const XIconButton = (props: TXButtonProps & { isNeutral?: boolean }) => {
	const { sxProps, children, isNeutral = false, ...rest } = props;
	return (
		<Button
			sx={{
				...(sxProps && { ...sxProps }),
				"&.MuiButton-contained": {
					bgcolor: isNeutral ? "secondary.light" : "auto",
				},
				"& .MuiButton-startIcon": {
					marginRight: 0,
					marginLeft: 0,
				},
				"&.Mui-disabled": {
					opacity: 0.2,
				},
				padding: 0,
				minHeight: 36,
				minWidth: 40,
			}}
			{...rest}
		>
			{children}
		</Button>
	);
};
