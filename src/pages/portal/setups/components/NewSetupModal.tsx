import React, { memo, useCallback, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { XModal } from "../../../../components/XModal";

export const NewSetupModal = memo(
	({
		open,
		onClose,
		onCreateSetup,
	}: {
		open: boolean;
		onCreateSetup: (setupName: string) => void;
		onClose: () => void;
	}) => {
		const [setupName, setSetupName] = useState<string>("");

		const onChangeSetupName = useCallback(
			(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setSetupName(e.target.value);
			},
			[]
		);

		const onCreate = useCallback(() => {
			onCreateSetup(setupName);
		}, [onCreateSetup, setupName]);

		return (
			<XModal
				open={open}
				onClose={onClose}
				size='sm'
				header='New SLM Setup'
				footer={
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							px: 2,
							pb: 4,
							gap: 2,
						}}
					>
						<Button variant='outlined' onClick={onClose}>
							Cancel
						</Button>
						<Button variant='contained' onClick={onCreate}>
							Create
						</Button>
					</Box>
				}
			>
				<Box py={6}>
					<TextField
						label='SLM Name'
						value={setupName}
						onChange={onChangeSetupName}
						fullWidth
					/>
				</Box>
			</XModal>
		);
	}
);

NewSetupModal.displayName = "NewSetupModal";
