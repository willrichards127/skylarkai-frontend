import React, { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { TextField, Box, Button } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

export const HubspotNode = memo(
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
				<Button variant="contained" sx={{mt: 1, mb:2,  width: '100%'}}>Connect to Hubspot</Button>
				
				<Box fontSize={12}>Access Token*</Box>
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

HubspotNode.displayName = "HubspotNode";
