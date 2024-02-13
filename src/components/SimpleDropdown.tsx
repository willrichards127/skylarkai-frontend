import { memo, useMemo } from "react";
import { SxProps } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export type TSimpleDropdownProps = {
	options: { value?: string; label: string }[] | string[];
	sxProps?: SxProps;
} & Omit<TextFieldProps, "sx">;

export const SimpleDropdown = memo((props: TSimpleDropdownProps) => {
	const { sxProps, options, ...rest } = props;
	const enhancedOptions = useMemo(() => {
		if (typeof options[0] === "string") {
			return options.map((option) => ({ value: option, label: option }));
		}
		return options;
	}, [options]);
	return (
		<TextField
			select
			sx={{
				...(sxProps && { ...sxProps }),
				"& .MuiInputBase-input": {
					fontSize: rest.size === "small" ? 12 : "auto",
				},
				"& .MuiNativeSelect-select": {
					height: rest.size === "small" ? 24 : "auto",
					padding: rest.size === "small" ? "4px 14px" : "6px 14px",
				},
			}}
			{...rest}
			SelectProps={{
				native: true,
			}}
		>
			{(enhancedOptions as { value: string; label: string }[]).map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</TextField>
	);
});

SimpleDropdown.displayName = "SimpleDropdown";
