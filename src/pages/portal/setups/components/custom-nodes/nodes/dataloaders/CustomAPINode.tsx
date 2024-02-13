import React, { memo, useCallback, useState } from "react";
import { useReactFlow } from "reactflow";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

const methods = ["GET", "POST"];

export const CustomAPINode = memo(
	({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
		const { setNodes } = useReactFlow();
		const [isLoading, setIsLoading] = useState<boolean>(false);

		const onChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				setNodes((prev) =>
					prev.map((node) => {
						if (node.id === nodeId) {
							node.data = {
								...node.data,
								properties: {
									...node.data.properties,
									[e.target.name]: e.target.value,
								},
							};
						}

						return node;
					})
				);
			},
			[nodeId, setNodes]
		);

		const onRunCustomAPI = useCallback(async () => {
			setIsLoading(true);
			try {
				const response = await fetch(nodeContent.properties?.URL);
				const result = await response.json();
				setNodes((prev) =>
					prev.map((node) => {
						if (node.id === nodeId) {
							node.data = {
								...node.data,
								properties: {
									...node.data.properties,
									response: JSON.stringify(result),
								},
							};
						}

						return node;
					})
				);
			} catch (e) {
				console.log(e, "Error in calling custom API");
			} finally {
				setIsLoading(false);
			}
		}, [nodeContent, nodeId, setNodes]);

		return (
			<Box position='relative'>
				<Handlers nodeId={nodeId} handlerType='source' />
				<Box fontSize={12}>URL:</Box>
				<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
					<TextField
						className='nowheel'
						size='small'
						name='URL'
						value={nodeContent.properties?.URL || ""}
						onChange={onChange}
						fullWidth
						sx={{
							"& .MuiInputBase-input": {
								fontSize: 12,
							},
						}}
					/>
					{!isLoading ? (
						<IconButton
							size='small'
							onClick={onRunCustomAPI}
							disabled={!nodeContent.properties?.URL}
						>
							<PlayArrowIcon sx={{ fontSize: 14 }} />
						</IconButton>
					) : (
						<CircularProgress size={14} />
					)}
				</Box>
				<Box fontSize={12} mt={1}>
					Method:
				</Box>
				<TextField
					className='nowheel'
					size='small'
					name='method'
					value={nodeContent.properties?.method || "GET"}
					onChange={onChange}
					fullWidth
					select
					SelectProps={{
						native: true,
					}}
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				>
					{methods.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</TextField>
				<Box fontSize={12} mt={1}>
					Response:
				</Box>
				<TextField
					className='nowheel'
					size='small'
					name='header'
					value={nodeContent.properties?.response || ""}
					onChange={onChange}
					fullWidth
					multiline
					rows={3}
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/>
				{/* <Box fontSize={12} mt={1}>
					Header:
				</Box>
				<TextField
					className='nowheel'
					size='small'
					name='header'
					value={nodeContent.properties?.header || ""}
					onChange={onChange}
					fullWidth
					multiline
					rows={3}
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/>
				<Box fontSize={12} mt={1}>
					Body:
				</Box>
				<TextField
					className='nowheel'
					size='small'
					name='body'
					value={nodeContent.properties?.body || ""}
					onChange={onChange}
					fullWidth
					multiline
					rows={3}
					maxRows={5}
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/> */}
			</Box>
		);
	}
);

CustomAPINode.displayName = "CustomAPINode";
