import { memo, useMemo } from "react";
import TreeView, {
  ITreeViewOnNodeSelectProps,
  flattenTree,
} from "react-accessible-treeview";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";
import { useReactFlow } from "reactflow";

const CustomCheckBoxIcon = ({
  variant,
  onClick,
  ...rest
}: {
  onClick: (e: any) => void;
  variant: "all" | "none" | "some";
}) => {
  switch (variant) {
    case "all":
      return <CheckBoxIcon {...rest} onClick={onClick} fontSize="small" />;
    case "none":
      return (
        <CheckBoxOutlineBlankIcon
          {...rest}
          onClick={onClick}
          fontSize="small"
        />
      );
    case "some":
      return (
        <IndeterminateCheckBoxIcon
          {...rest}
          onClick={onClick}
          fontSize="small"
        />
      );
    default:
      return null;
  }
};

export const CrunchbaseNode = memo(
  ({ nodeId, nodeContent }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const { setNodes } = useReactFlow();

    const data = useMemo(() => {
      const json = nodeContent.properties.json;
      return flattenTree({
        name: "",
        children: json.map((element: any) => ({ name: element.name, id: element.key })),
      });
    }, [nodeContent.properties]);

    const onNodeSelect = (props: ITreeViewOnNodeSelectProps) => {
      const selectedIds = props.treeState?.selectedIds;
      if (selectedIds) {
        setNodes((prev) =>
          prev.map((node) => {
            if (node.id === nodeId) {
              node.data = {
                ...node.data,
                properties: {
                  ...node.data.properties,
                  json: node.data.properties.json.map((f: any) => ({
                    ...f,
                    checked: selectedIds.has(f.key),
                  })),
                },
              };
            }
            return node;
          })
        );
      }
    };

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />
        <Box fontSize={12}>Categories:</Box>
        <Box
          className="nowheel checkbox"
          sx={{ height: 240, overflow: "auto", border: "1px solid grey" }}
        >
          <TreeView
            data={data}
            multiSelect
            nodeAction="check"
            defaultExpandedIds={[1]}
            propagateSelect
            propagateSelectUpwards
            togglableSelect
            // onSelect={(props) => console.log("onSelect callback: ", props)}
            onNodeSelect={onNodeSelect}
            nodeRenderer={({
              element,
              isBranch,
              isExpanded,
              isSelected,
              isHalfSelected,
              isDisabled,
              getNodeProps,
              level,
              handleSelect,
              handleExpand,
            }) => {
              return (
                <div
                  {...getNodeProps({ onClick: handleExpand })}
                  style={{
                    marginLeft: 40 * (level - 1),
                    opacity: isDisabled ? 0.5 : 1,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  {isBranch &&
                    (isExpanded ? <ExpandMoreIcon /> : <ChevronRightIcon />)}
                  <CustomCheckBoxIcon
                    onClick={(e: any) => {
                      handleSelect(e);
                      e.stopPropagation();
                    }}
                    variant={
                      isHalfSelected ? "some" : isSelected ? "all" : "none"
                    }
                  />
                  <span className="name">{element.name}</span>
                </div>
              );
            }}
            selectedIds={nodeContent.properties.json
              .filter((f: any) => f.checked)
              .map((f: any) => f.key)}
          />
        </Box>
      </Box>
    );
  }
);

CrunchbaseNode.displayName = "CrunchbaseNode";
