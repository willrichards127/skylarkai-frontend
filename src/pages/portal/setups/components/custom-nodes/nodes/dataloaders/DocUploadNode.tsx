import { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { FileUploader } from "../../../../../../../components/FileUploaderOld";
import { Box } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

export const DocUploadNode = memo(
	({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
		const { setNodes } = useReactFlow();
		const onUpload = useCallback(
			(_: any, pureFiles: any) => {

				setNodes((prev) =>
					prev.map((node) => {
						if (node.id === nodeId) {
							node.data = {
								...node.data,
								properties: { files: pureFiles },
							};
						}
						return node;
					})
				);
			},
			[nodeId, nodeContent, setNodes]
		);
		return (
			<Box position='relative'>
				<Handlers nodeId={nodeId} handlerType='both' />

				<FileUploader
					initialFiles={nodeContent.properties?.files as any}
					onUploadCompleted={onUpload}
				/>
			</Box>
		);
	}
);

DocUploadNode.displayName = "DocUploadNode";
