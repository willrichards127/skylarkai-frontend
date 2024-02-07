import { memo, useCallback, useState } from "react";
import { useReactFlow } from "reactflow";
import FloatPanel from "./FloatPanel";
import { SettingModal } from "./SettingModal";
import { ITemplateNode } from "../../../../../shared/models/interfaces";

const CustomNode = ({ id, data }: { id: string; data: ITemplateNode }) => {
	const { setNodes, setEdges } = useReactFlow();

	const [settingModal, showSettingModal] = useState<boolean>(false);

	const onMenuItem = useCallback(() => {
		showSettingModal(true);
	}, []);

	const onClose = useCallback(() => {
		setEdges((prev) =>
			prev.filter(
				(edge: any) =>
					edge.target !== data.graph_node_id &&
					edge.source !== data.graph_node_id
			)
		);
		setNodes((prev) => prev.filter((node) => node.id !== id));
	}, [id, data, setNodes, setEdges]);

	return (
		<>
			<FloatPanel
				nodeId={id}
				nodeContent={data}
				onItem={onMenuItem}
				onClose={onClose}
			/>
			{settingModal && (
				<SettingModal
					open={settingModal}
					nodeId={id}
					nodeContent={data}
					onClose={() => showSettingModal(false)}
				/>
			)}
		</>
	);
};
export default memo(CustomNode);
