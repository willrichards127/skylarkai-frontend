import { useCallback, useState } from "react";
import { useReactFlow } from "reactflow";
import FloatPanel from "./FloatPanel";
import { SettingModal } from "./SettingModal";
import { CriteriaModal } from "./CriteriaModal";
import { ITemplateNode } from "../../../../../shared/models/interfaces";

const CustomNode = ({ id, data }: { id: string; data: ITemplateNode }) => {
  const { setNodes, setEdges } = useReactFlow();

  const [settingModal, showSettingModal] = useState<boolean>(false);
  const [criteriaModal, showCriteriaModal] = useState<boolean>(false);

  const onMenuItem = useCallback((itemId: string) => {
    if (itemId === "criteria") {
      showCriteriaModal(true);
    }
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
      {criteriaModal && (
        <CriteriaModal
          open={criteriaModal}
          nodeId={id}
          nodeContent={data}
          onClose={() => showCriteriaModal(false)}
        />
      )}
    </>
  );
};
export default CustomNode;
