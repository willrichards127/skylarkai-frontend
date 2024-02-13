import React, { memo, useCallback, useState } from "react";
import { TextField, Box } from "@mui/material";
import { XIconButton } from "../buttons/XIconButton";
import { SendIcon } from "../Svgs";

export const InputBox = memo(
	({
		onSubmitAction,
		disabled,
	}: {
		disabled?: boolean;
		onSubmitAction: (inputedText: string) => void;
	}) => {
		const [text, setText] = useState<string>("");
		const onSubmit = useCallback(
			(e: React.FormEvent<HTMLFormElement> | undefined) => {
				if (!e) return;
				e?.preventDefault();
				onSubmitAction(text);
				setText("");
			},
			[onSubmitAction, text]
		);
		return (
			<Box
				component='form'
				onSubmit={onSubmit}
				sx={{
					width: "100%",
					display: "flex",
					gap: 1,
					py: 1,
				}}
			>
				<TextField
					variant='outlined'
					onChange={(e) => setText(e.target.value)}
					value={text}
					fullWidth
					size='small'
					disabled={disabled}
					autoComplete="new-password"
				/>
				<XIconButton
					type='submit'
					size='small'
					variant='contained'
					disabled={disabled}
				>
					<SendIcon width={16} height={16} />
				</XIconButton>
			</Box>
		);
	}
);

InputBox.displayName = "InputBox";
