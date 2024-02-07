import { memo, useCallback } from "react";
import { useReactFlow } from "reactflow";
import { FileUploader } from "../../../../../../../components/FileUploaderOld";
import { Box, CircularProgress } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { useUploadFilesMutation } from "../../../../../../../redux/services/setupApi";

export const DocUploadNode = memo(
	({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
		const [uploadFiles, { isLoading }] = useUploadFilesMutation();
		const { setNodes } = useReactFlow();
		const onUpload = useCallback(
			(files: any, pureFiles: any) => {
				const formData = new FormData();
				for (const pureFile of pureFiles) {
					formData.append("files", pureFile);
				}
				uploadFiles({
					setupId: nodeContent.setupId!,
					files: formData,
				});
				setNodes((prev) =>
					prev.map((node) => {
						if (node.id === nodeId) {
							node.data = {
								...node.data,
								properties: { files },
							};
						}
						return node;
					})
				);
			},
			[nodeId, nodeContent, setNodes, uploadFiles]
		);
		return (
			<Box position='relative'>
				<Handlers nodeId={nodeId} handlerType='both' />
				{isLoading ? (
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							p: 2,
						}}
					>
						<CircularProgress />
					</Box>
				) : (
					<FileUploader
						initialFiles={nodeContent.properties?.files as any}
						onUploadCompleted={onUpload}
					/>
				)}
			</Box>
		);
	}
);

DocUploadNode.displayName = "DocUploadNode";
