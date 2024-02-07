import React, { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { TextField, Box } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

export const InputNode = memo(
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
									text: e.target.value,
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
				<TextField
					className='nowheel'
					size='small'
					value={nodeContent.properties?.text || ""}
					onChange={onChange}
					multiline
					fullWidth
					minRows={3}
					maxRows={10}
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

InputNode.displayName = "InputNode";
