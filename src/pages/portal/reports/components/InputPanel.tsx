"use client";
import React, { memo, useCallback, useEffect, useState } from "react";
import { TextField, Box, Button, InputAdornment } from "@mui/material";
import { XIconButton } from "../../../../components/buttons/XIconButton";
import { SendIcon } from "../../../../components/Svgs";

export const InputPanel = memo(
	({
		question,
		onSubmitAction,
		disabled,
	}: {
		question?: string;
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

		useEffect(() => {
			if (!question) return;
			setText(question);
		}, [question]);
		return (
			<Box
				sx={{
					mt: 1,
					width: "100%",
					borderRadius: 2,
					bgcolor: "rgba(0, 0, 0, 0.1)",
				}}
			>
				<Box
					component='form'
					onSubmit={onSubmit}
					sx={{
						width: "100%",
						display: "flex",
						gap: 1,
						px: 1,
						pt: 1,
					}}
				>
					<TextField
						variant='outlined'
						onChange={(e) => setText(e.target.value)}
						value={text}
						fullWidth
						disabled={disabled}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									{question ? "Pre-defined prompt:" : ""}
								</InputAdornment>
							),
						}}
						autoComplete='new-password'
					/>
					<XIconButton
						type='submit'
						variant='contained'
						disabled={disabled}
						sxProps={{
							"&.MuiButton-root": {
								minWidth: 54,
							},
						}}
					>
						<SendIcon />
					</XIconButton>
				</Box>
				<Box textAlign='center' p={1}>
					<Button variant='outlined' disabled={disabled}>
						Upload File
					</Button>
				</Box>
			</Box>
		);
	}
);

InputPanel.displayName = "InputPanel";
