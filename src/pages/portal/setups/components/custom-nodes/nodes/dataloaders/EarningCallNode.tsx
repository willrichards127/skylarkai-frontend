import { memo, useState } from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Handlers } from "../../Handlers";
import { ITemplateNode } from "../../../../../../../shared/models/interfaces";

const files = {
  name: "",
  children: [
    {
      name: "CARR",
      children: [
        { name: "Earning Call Q4 2023" },
        { name: "Earning Call Q3 2023" },
        { name: "Earning Call Q2 2023" },
        { name: "Earning Call Q1 2023" },
        { name: "Earning Call Q4 2022" },
        { name: "Earning Call Q3 2022" },
        { name: "Earning Call Q2 2022" },
        { name: "Earning Call Q1 2022" },
      ],
    },
    // {
    //   name: "STAF",
    //   children: [
    //     { name: "Earning Call Q4 2023" },
    //     { name: "Earning Call Q3 2023" },
    //     { name: "Earning Call Q2 2023" },
    //     { name: "Earning Call Q1 2023" },
    //     { name: "Earning Call Q4 2022" },
    //     { name: "Earning Call Q3 2022" },
    //     { name: "Earning Call Q2 2022" },
    //   ],
    // },
  ],
};

const data = flattenTree(files);

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
      return <CheckBoxIcon {...rest} onClick={onClick} />;
    case "none":
      return <CheckBoxOutlineBlankIcon {...rest} onClick={onClick} />;
    case "some":
      return <IndeterminateCheckBoxIcon {...rest} onClick={onClick} />;
    default:
      return null;
  }
};

export const EarningCallNode = memo(
  ({ nodeId }: { nodeId: string; nodeContent: ITemplateNode }) => {
    const [selectedIds] = useState([]);

    return (
      <Box position="relative">
        <Handlers nodeId={nodeId} handlerType="source" />
        <Box fontSize={12}>Files:</Box>
        <Box
          className="nowheel"
          sx={{ height: 240, overflow: "auto", border: "1px solid grey" }}
        >
          <TreeView
            data={data}
            multiSelect
            selectedIds={selectedIds}
            defaultExpandedIds={[1]}
            propagateSelect
            propagateSelectUpwards
            togglableSelect
            onSelect={(props) => console.log("onSelect callback: ", props)}
            onNodeSelect={(props) => {
              console.log("onNodeSelect callback: ", props);
              // if(props.isBranch)
            }}
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
          />
        </Box>
      </Box>
    );
  }
);

EarningCallNode.displayName = "EarningCallNode";
