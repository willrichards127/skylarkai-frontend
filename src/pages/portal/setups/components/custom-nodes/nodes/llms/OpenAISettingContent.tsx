import { memo, useState, useCallback } from "react";
import { Box, Slider, Switch } from "@mui/material";
import { useReactFlow } from "reactflow";
import { SimpleDropdown } from "../../../../../../../components/SimpleDropdown";

interface IOpenAINode {
	model: string;
	temperature: number;
}

const modelItems = ["gpt-3.5-turbo", "gpt-4"];

export const OpenAISettingContent = memo(
	({ nodeId }: { nodeId: string; nodeContent: any }) => {
		const { setNodes } = useReactFlow();
		const [formValues, setFormValues] = useState<IOpenAINode>({
			model: modelItems[0],
			temperature: 0,
		});

		const onChangeFormValues = useCallback(
			(field: string, newValue: string | number) => {
				const updatedFormValues = { ...formValues, [field]: newValue };
				setFormValues(updatedFormValues);
				setNodes((prev) =>
					prev.map((node) => {
						if (node.id === nodeId) {
							node.data = {
								...node.data,
								formValues,
							};
						}

						return node;
					})
				);
			},
			[nodeId, formValues, setNodes]
		);
		return (
			<Box>
				<label htmlFor='model' style={{ fontSize: 12 }}>
					Model
				</label>
				<SimpleDropdown
					id='model'
					value={formValues.model}
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
				<label htmlFor='temperature' style={{ fontSize: 12 }}>
					Temperature
				</label>
				<Slider
					id='temperature'
					size='small'
					className='nodrag'
					value={formValues.temperature}
					onChange={(_: Event, value: number | number[]) => {
						onChangeFormValues("temperature", value as number);
					}}
					min={0}
					max={1}
					step={0.1}
					valueLabelDisplay='auto'
				/>
				<label htmlFor='max_length' style={{ fontSize: 12 }}>
					Max Length
				</label>
				<Slider
					id='max_length'
					size='small'
					className='nodrag'
					defaultValue={668}
					min={0}
					max={2000}
					step={1}
					valueLabelDisplay='auto'
				/>
				<label htmlFor='top_p' style={{ fontSize: 12 }}>
					Top P
				</label>
				<Slider
					id='top_p'
					size='small'
					className='nodrag'
					defaultValue={0.5}
					min={0}
					max={1}
					step={0.1}
					valueLabelDisplay='auto'
				/>
				<label htmlFor='fre_penalty' style={{ fontSize: 12 }}>
					Frequency Penalty
				</label>
				<Slider
					id='fre_penalty'
					size='small'
					className='nodrag'
					defaultValue={0.5}
					min={0}
					max={1}
					step={0.1}
					valueLabelDisplay='auto'
				/>
				<label htmlFor='pre_penalty' style={{ fontSize: 12 }}>
					Presence Penalty
				</label>
				<Slider
					id='pre_penalty'
					size='small'
					className='nodrag'
					defaultValue={0.5}
					min={0}
					max={1}
					step={0.1}
					valueLabelDisplay='auto'
				/>
				<Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
					<label style={{ fontSize: 12 }}>Stream Data</label>
					<Switch defaultChecked />
				</Box>
				<Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
					<label style={{ fontSize: 12, marginRight: 22 }}>Memory</label>
					<Switch defaultChecked />
				</Box>
			</Box>
		);
	}
);

OpenAISettingContent.displayName = "OpenAISettingContent";
