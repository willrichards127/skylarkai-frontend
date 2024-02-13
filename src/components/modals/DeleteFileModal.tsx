import { memo } from "react";
import { Box, Button, Typography } from "@mui/material";
import { XModal } from "../XModal";

export const DeleteFileModal = memo(
	({ open, onClose }: { open: boolean; onClose: () => void }) => {
		return (
			<XModal
				open={open}
				onClose={onClose}
				header={<Box textAlign='center'>Delete File</Box>}
				footer={
					<Box sx={{ display: "flex", width: "100%", gap: 2 }}>
						<Button variant='outlined' fullWidth>
							No
						</Button>
						<Button variant='contained' fullWidth>
							Yes
						</Button>
					</Box>
				}
				size='xs'
			>
				<Typography variant='body2' textAlign='center'>
					Are you sure you want to delete the uploaded file?
				</Typography>
			</XModal>
		);
	}
);

DeleteFileModal.displayName = "DeleteFileModal";
