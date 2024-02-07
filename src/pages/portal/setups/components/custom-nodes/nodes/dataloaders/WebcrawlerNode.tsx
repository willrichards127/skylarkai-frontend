import React, { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { TextField, Box } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

// const scrapTypes = [
// 	{
// 		label: "Plain Text",
// 		value: "text",
// 	},
// 	{
// 		label: "HTML",
// 		value: "html",
// 	},
// ];

export const WebcrawlerNode = memo(
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
									[e.target.name]:
										e.target.name === "scrapSubPages"
											? e.target.checked
											: e.target.value,
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
				<Box fontSize={12}>URL:</Box>
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
				{/* <Box sx={{ display: "flex", gap: 2 }}>
					<TextField
						className='nowheel'
						size='small'
						select
						name='scrapType'
						value={nodeContent.properties?.scrapType || scrapTypes[0].value}
						onChange={onChange}
						sx={{
							mt: 1,
							"& .MuiNativeSelect-select": {
								padding: "2px",
							},
						}}
						SelectProps={{
							native: true,
						}}
					>
						{scrapTypes.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</TextField>
					<FormControlLabel
						control={
							<Checkbox
								size='small'
								name='scrapSubPages'
								checked={Boolean(nodeContent.properties?.scrapSubPages)}
								onChange={onChange}
							/>
						}
						label='Scrap subpages'
					/>
				</Box> */}
			</Box>
		);
	}
);

WebcrawlerNode.displayName = "WebcrawlerNode";
