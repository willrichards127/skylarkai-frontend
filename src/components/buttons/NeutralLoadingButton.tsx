import { LoadingButton, LoadingButtonProps } from "@mui/lab";

export const NeutralLoadingButton = (props: LoadingButtonProps) => {
	const { children, ...rest } = props;
	return (
		<LoadingButton
			sx={{
				...(!!rest.sx && { ...rest.sx }),
				"&.MuiButton-contained": {
					bgcolor: "secondary.light",
				},
				"&.MuiLoadingButton-loadingIndicator": {},
				minHeight: rest.size === "small" ? "auto" : 50,
				"&.Mui-disabled": {
					color: "secondary.dark",
					opacity: 0.2,
				},
			}}
			{...rest}
		>
			{children}
		</LoadingButton>
	);
};
