import React, { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { TextField, Box } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

export const PostgresNode = memo(
	({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
		const { setNodes } = useReactFlow();

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

		return (
			<Box position='relative'>
				<Handlers nodeId={nodeId} handlerType='source' />
				<Box fontSize={12}>Database*</Box>
				<TextField
					className='nowheel'
					size='small'
					name='companyname'
					multiline
					rows={3}
					value={nodeContent.properties?.companyname || ""}
					onChange={onChange}
					fullWidth
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/>
				<Box fontSize={12}>Username*</Box>
				<TextField
					className='nowheel'
					size='small'
					name='companyname'
					value={nodeContent.properties?.companyname || ""}
					onChange={onChange}
					fullWidth
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/>
				<Box fontSize={12}>Password*</Box>
				<TextField
					className='nowheel'
					size='small'
					name='companyname'
					value={nodeContent.properties?.companyname || ""}
					onChange={onChange}
					fullWidth
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/>
				<Box fontSize={12}>Host*</Box>
				<TextField
					className='nowheel'
					size='small'
					name='companyname'
					value={nodeContent.properties?.companyname || ""}
					onChange={onChange}
					fullWidth
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/>
				<Box fontSize={12}>Port*</Box>
				<TextField
					className='nowheel'
					size='small'
					name='companyname'
					value={nodeContent.properties?.companyname || ""}
					onChange={onChange}
					fullWidth
					sx={{
						"& .MuiInputBase-input": {
							fontSize: 12,
						},
					}}
				/>
			</Box>
		);
	}
);

PostgresNode.displayName = "PostgresNode";
