import { memo } from "react";
import { Box } from "@mui/material";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Handlers } from "../../Handlers";

export const OutputNode = memo(
	({ nodeId }: { nodeId: string; }) => {
		return (
			<Box position='relative'>
				<Handlers nodeId={nodeId} handlerType='target' />
			</Box>
		);
	}
);

OutputNode.displayName = "OutputNode";
