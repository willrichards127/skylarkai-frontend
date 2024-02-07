import { memo } from "react";
import { Box, Stack, TextField, Typography, Switch } from "@mui/material";

export const FirstStep = memo(({ companyName }: { companyName: string }) => {
	return (
		<Box minHeight={320}>
			<Typography
				variant='body1'
				color='primary.main'
				fontWeight='bold'
				gutterBottom
			>
				General Information
			</Typography>
			<Typography variant='subtitle2' color='text.secondary' mb={4}>
				Select your report setup, add a name, and add a password to protect it.
			</Typography>
			<Stack spacing={4}>
				<TextField
					label='Company Name'
					size='small'
					defaultValue={companyName}
					autoComplete='new-password'
				/>
				<TextField
					label='Description (Optional)'
					multiline
					rows={3}
					autoComplete='new-password'
				/>
				<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
					<TextField
						label='Password for sharing (Optional)'
						placeholder=''
						type='password'
						size='small'
						autoComplete='new-password'
					/>
					<Switch />
				</Box>
			</Stack>
		</Box>
	);
});

FirstStep.displayName = "FirstStep";
