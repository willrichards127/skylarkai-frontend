import { memo } from "react";
import { Box } from "@mui/material";
import { Handlers } from "../../Handlers";

export const PineconeNode = memo(
	({ nodeId }: { nodeId: string }) => {
		return (
			<Box position='relative' sx={{ height: 36 }}>
				<Handlers nodeId={nodeId} handlerType='both' />
			</Box>
		);
	}
);

PineconeNode.displayName = "PineconeNode";
