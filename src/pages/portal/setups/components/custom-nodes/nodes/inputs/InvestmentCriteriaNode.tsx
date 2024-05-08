import { memo } from "react";
// import { useReactFlow } from "reactflow";
import { Box } from "@mui/material";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { XSmallAccordion } from "../../../../../../../components/XAccordion";

export const InvestmentCriteriaNode = memo(
  ({ nodeId }: { nodeId: string; nodeContent: ITemplateNode }) => {
    // const { setNodes } = useReactFlow();

    // const onChange = useCallback(
    //   (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNodes((prev) =>
    //       prev.map((node) => {
    //         if (node.id === nodeId) {
    //           node.data = {
    //             ...node.data,
    //             properties: {
    //               text: e.target.value,
    //             },
    //           };
    //         }

    //         return node;
    //       })
    //     );
    //   },
    //   [nodeId, setNodes]
    // );

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />
        {[1, 2, 3, 4, 5].map((index) => (
          <XSmallAccordion
            defaultExpanded={false}
            key={`criteria-${index}`}
            summary={`Criteria ${index}`}
            detail={<Box>Criteria {index} Content goes here</Box>}
          />
        ))}
      </Box>
    );
  }
);
