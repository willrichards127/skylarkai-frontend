import React, { memo, useCallback, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { XModal } from "../../../../components/XModal";

export const SaveSetupModal = memo(
	({
		open,
		existingSetupName,
		onClose,
		onSaveName,
	}: {
		existingSetupName?: string;
		open: boolean;
		onClose: () => void;
		onSaveName: (newSetupName: string) => void;
	}) => {
		const [setupName, setSetupName] = useState<string>("");

		const onSave = useCallback(() => {
			onSaveName(setupName);
			onClose();
		}, [onSaveName, onClose, setupName]);

		const onChangeSetupName = useCallback(
			(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setSetupName(e.target.value);
			},
			[]
		);
		useEffect(() => {
			if (!existingSetupName) return;
			setSetupName(existingSetupName);
		}, [existingSetupName]);
		return (
			<XModal
				open={open}
				onClose={onClose}
				size='xs'
				header='Save Setup'
				footer={
					<Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
						<Button variant='outlined'>
							<Box mx={1} onClick={onClose}>
								Cancel
							</Box>
						</Button>
						<Button
							variant='contained'
							disabled={!setupName}
							onClick={onSave}
							sx={{ minWidth: 92 }}
						>
							Save
						</Button>
					</Box>
				}
			>
				<TextField
					label='Setup name'
					value={setupName}
					onChange={onChangeSetupName}
					size='small'
					fullWidth
				/>
			</XModal>
		);
	}
);

SaveSetupModal.displayName = "SaveSetupModal";
