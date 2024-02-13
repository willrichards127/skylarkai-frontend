import { SxProps } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export type TXButtonProps = {
	sxProps?: SxProps;
} & Omit<ButtonProps, "sx">;

export const XButton = (props: TXButtonProps) => {
	const { sxProps, children, ...rest } = props;
	return (
		<Button
			variant={rest.variant}
			sx={{
				...(sxProps && { ...sxProps }),
				color: "secondary.light",
			}}
			{...rest}
		>
			{children}
		</Button>
	);
};
