import { memo, useMemo } from "react";
import {
	Box,
	Checkbox,
	FormControlLabel,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { INode } from "../../../../../shared/models/interfaces";

export const SecondStep = memo(({ nodes }: { nodes: INode[] }) => {
	const inputNodes = useMemo(
		() => nodes.filter((node) => node.data.name === "Input"),
		[nodes]
	);
	const outputNodes = useMemo(
		() => nodes.filter((node) => node.data.name === "Output"),
		[nodes]
	);
	return (
		<Box minHeight={320}>
			<Typography
				variant='body1'
				color='primary.main'
				fontWeight='bold'
				gutterBottom
			>
				Inputs/Outputs
			</Typography>
			<Typography variant='subtitle2' color='text.secondary' mb={4}>
				Select the inputs and outputs to expose in your chatbot.
			</Typography>
			<Stack spacing={4} direction='row' width='100%'>
				<Box flex={1}>
					<Typography
						variant='body1'
						color='primary.main'
						fontWeight='bold'
						gutterBottom
					>
						Inputs *
					</Typography>
					{inputNodes.map((node) => (
						<Box key={node.id} sx={{ display: "flex", gap: 1, mb: 1 }}>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label={node.graph_node_id}
							/>
							<TextField
								label='label'
								size='small'
								fullWidth
								defaultValue={node.graph_node_id}
							/>
						</Box>
					))}
				</Box>
				<Box flex={1}>
					<Typography
						variant='body1'
						color='primary.main'
						fontWeight='bold'
						gutterBottom
					>
						Outputs *
					</Typography>
					{outputNodes.map((node) => (
						<Box key={node.id} sx={{ display: "flex", gap: 1 }}>
							<FormControlLabel
								control={<Checkbox defaultChecked />}
								label={node.graph_node_id}
							/>
							<TextField
								label='label'
								size='small'
								fullWidth
								defaultValue={node.graph_node_id}
							/>
						</Box>
					))}
				</Box>
			</Stack>
		</Box>
	);
});

SecondStep.displayName = "SecondStep";
