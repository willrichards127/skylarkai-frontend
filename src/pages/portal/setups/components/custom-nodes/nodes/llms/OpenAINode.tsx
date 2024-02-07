import { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { Box } from "@mui/material";
// import { XChip } from "@/shared/components/base-ui/XChip";
import { SimpleDropdown } from "../../../../../../../components/SimpleDropdown";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

export const modelItems = ["gpt-3.5", "gpt-4"];

export const OpenAINode = memo(
	({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
		const { setNodes } = useReactFlow();

		const onChangeFormValues = useCallback(
			(_: string, newValue: string | number) => {
				setNodes((prev) =>
					prev.map((node) => {
						if (node.id === nodeId) {
							node.data = {
								...node.data,
								properties: {
									model: newValue,
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
				<Handlers nodeId={nodeId} handlerType='both' />
				<label htmlFor='model' style={{ fontSize: 10 }}>
					Model
				</label>
				<SimpleDropdown
					id='model'
					value={nodeContent.properties?.model}
					onChange={(e) => {
						onChangeFormValues("model", e.target.value);
					}}
					size='small'
					fullWidth
					hiddenLabel
					options={modelItems}
					sxProps={{
						mb: 2,
					}}
				/>
				{/* {!!nodeContent.linkedNodes && (
					<Box sx={{ display: "flex", gap: 0.5 }}>
						{nodeContent.linkedNodes.map((node: string) => (
							<Box key={node}>
								<XChip label={node} />
							</Box>
						))}
					</Box>
				)} */}
			</Box>
		);
	}
);

OpenAINode.displayName = "OpenAINode";
