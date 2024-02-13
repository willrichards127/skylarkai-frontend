import React, { memo, useCallback } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Handlers } from "../../Handlers";
import { useReactFlow } from "reactflow";
import { useDropzone } from "react-dropzone";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

const templates = [
	{
		value: "text",
		label: "Plain Text",
	},
	{
		value: "URL",
		label: "URL",
	},
];

export const DocTemplateNode = memo(
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

		const onDrop = useCallback(
			(acceptedFiles: any) => {
				const reader = new FileReader();

				reader.onabort = () => console.log("file reading was aborted");
				reader.onerror = () => console.log("file reading has failed");
				reader.onload = async () => {
					setNodes((prev) =>
						prev.map((node) => {
							if (node.id === nodeId) {
								node.data = {
									...node.data,
									properties: {
										...node.data.properties,
										text: reader.result,
										file: acceptedFiles[0].name,
									},
								};
							}

							return node;
						})
					);
				};
				reader.readAsText(acceptedFiles[0]);
			},
			[setNodes, nodeId]
		);

		const { getRootProps, getInputProps } = useDropzone({
			onDrop,
			maxFiles: 1,
		});

		return (
			<Box position='relative'>
				<Handlers nodeId={nodeId} handlerType='source' />
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					{nodeContent.properties?.template_type === "text" ? (
						<>
							<Box
								mb={0.5}
								sx={{ display: "flex", gap: 1, alignItems: "center" }}
							>
								<div {...getRootProps()}>
									<input {...getInputProps()} />
									<Button size='small' variant='outlined'>
										Upload File
									</Button>
								</div>
								<Box fontSize={12}>
									{nodeContent.properties?.file
										? nodeContent.properties?.file
										: ""}
								</Box>
							</Box>
							<TextField
								className='nowheel'
								name='text'
								size='small'
								fullWidth
								multiline
								minRows={5}
								maxRows={10}
								value={nodeContent.properties?.text}
								onChange={onChange}
							/>
						</>
					) : (
						<>
							<Box fontSize={12} mb={0.5}>
								URL:
							</Box>
							<TextField
								className='nowheel'
								name='URL'
								size='small'
								fullWidth
								value={nodeContent.properties?.URL}
								onChange={onChange}
							/>
						</>
					)}
					<Box>
						<TextField
							className='nowheel'
							size='small'
							select
							name='template_type'
							value={
								nodeContent.properties?.template_type || templates[0].value
							}
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
							{templates.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</TextField>
					</Box>
				</Box>
			</Box>
		);
	}
);

DocTemplateNode.displayName = "DocTemplateNode";
