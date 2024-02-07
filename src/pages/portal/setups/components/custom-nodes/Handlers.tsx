import { memo } from "react";
import { Handle, Position } from "reactflow";
import * as colors from "@mui/material/colors";

export const Handlers = memo(
	({
		nodeId,
		handlerType,
	}: {
		nodeId: string;
		handlerType: "source" | "target" | "both";
	}) => {
		return (
			<>
				{(handlerType === "source" || handlerType === "both") && (
					<Handle
						type='source'
						position={Position.Right}
						id={`${nodeId}_source_handler`}
						style={{
							width: 10,
							height: 10,
							borderRadius: "50%",
							marginRight: -8,
							backgroundColor: colors.blue[700],
						}}
					/>
				)}
				{(handlerType === "target" || handlerType === "both") && (
					<Handle
						type='target'
						position={Position.Left}
						id={`${nodeId}_target_handler`}
						style={{
							width: 10,
							height: 10,
							borderRadius: "50%",
							marginLeft: -8,
							backgroundColor: colors.grey[700],
						}}
					/>
				)}
			</>
		);
	}
);

Handlers.displayName = "Handlers";
