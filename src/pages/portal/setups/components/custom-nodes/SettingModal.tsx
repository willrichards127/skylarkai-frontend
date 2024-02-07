import { memo } from "react";
import { Box } from "@mui/material";
import { XModal } from "../../../../../components/XModal";
import { XChip } from "../../../../../components/XChip";
import { OpenAISettingContent as OpenAILLMSetting } from "./nodes/llms/OpenAISettingContent";
import { ITemplateNode } from "../../../../../shared/models/interfaces";

const ComponentDict: Record<
	string,
	React.MemoExoticComponent<
		({ nodeId }: { nodeId: string; nodeContent: any }) => React.JSX.Element
	>
> = {
	// input: InputNode,
	// result: ResultNode,
	OpenAI: OpenAILLMSetting,
	// document: DocUploadNode,
	// "compare-input": CompareInputNode,
	// pinecone: PineconeNode,
};

export const SettingModal = memo(
	({
		open,
		nodeId,
		nodeContent,
		onClose,
	}: {
		open: boolean;
		nodeId: string;
		nodeContent: ITemplateNode;
		onClose: () => void;
	}) => {
		const XSetting = ComponentDict[nodeContent.name];

		return (
			<XModal
				floatAlign='flex-end'
				open={open}
				onClose={onClose}
				header={
					<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
						Settings
						<XChip label={nodeId} />
					</Box>
				}
				size='xs'
			>
				{!!XSetting && <XSetting nodeId={nodeId} nodeContent={nodeContent} />}
			</XModal>
		);
	}
);

SettingModal.displayName = "SettingModal";
