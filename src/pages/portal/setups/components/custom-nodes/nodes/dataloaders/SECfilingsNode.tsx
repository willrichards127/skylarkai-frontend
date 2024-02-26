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
        {
          name: "Financials",
          children: [
            { name: "10-Q 3 2023" },
            { name: "10-Q 2 2023" },
            { name: "10-Q 1 2023" },
            { name: "10-K FY 2022" },
          ],
        },
        {
          name: "News",
          children: [
            { name: "8-K 2024-01-02" },
            { name: "8-K 2023-12-13" },
            { name: "8-K 2023-11-30" },
            { name: "8-K 2023-11-16" },
            { name: "8-K 2023-11-13" },
            { name: "8-K 2023-10-26" },
            { name: "8-K 2023-07-27" },
          ],
        },
        {
          name: "Prospectuses and Registrations",
          children: [{ name: "S-3ASR 2023-07-28" }],
        },
        {
          name: "Proxies",
          children: [
            { name: "DEF 14A 2023-03-07" },
            { name: "DEFA 14A 2023-03-07" },
          ],
        },
        {
          name: "Ownerships",
          children: [
            { name: "SC 13G/A 2024-01-26" },
            { name: "3 2024-01-04" },
            { name: "4 2024-01-04" },
            { name: "144 2023-12-15" },
            { name: "4 2023-12-15" },
            { name: "SC 13G/A 2023-12-11" },
          ],
        },
        { name: "Other", children: [{ name: "IRANNOTICE 2023-05-05" }] },
      ],
    },
    // {
    //   name: "STAF",
    //   children: [
    //     {
    //       name: "Financials",
    //       children: [
    //         { name: "10-Q 3 2023" },
    //         { name: "10-Q 2 2023" },
    //         { name: "10-Q 1 2023" },
    //         { name: "10-K FY 2023" },
    //         { name: "10-Q 3 2022" },
    //         { name: "10-Q 2 2022" },
    //         { name: "10-Q 1 2022" },
    //         { name: "10-K FY 2022" },
    //       ],
    //     },
    //     {
    //       name: "News",
    //       children: [
    //         { name: "8-K 2024-01-17" },
    //         { name: "8-K 2024-01-12" },
    //         { name: "8-K 2024-01-10" },
    //         { name: "8-K 2023-12-28" },
    //         { name: "8-K 2023-11-20" },
    //         { name: "8-K 2023-11-14" },
    //         { name: "8-K 2023-10-25" },
    //         { name: "8-K 2023-10-24" },
    //         { name: "8-K 2023-10-20" },
    //         { name: "8-K 2023-10-02" },
    //         { name: "8-K 2023-09-05" },
    //         { name: "8-K 2023-09-01" },
    //         { name: "8-K 2023-08-29" },
    //       ],
    //     },
    //     {
    //       name: "Prospectuses and Registrations",
    //       children: [{ name: "8-A12B 2023-10-02" }],
    //     },
    //     {
    //       name: "Proxies",
    //       children: [
    //         {
    //           name: "DEFA14A 2023-12-26",
    //         },
    //         {
    //           name: "PRE 14A 2023-11-19",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Ownerships",
    //       children: [
    //         { name: "4 2024-01-26" },
    //         { name: "4 2024-01-04" },
    //         { name: "4 2024-01-04" },
    //         { name: "144 2023-12-15" },
    //         { name: "4 2023-12-15" },
    //         { name: "4 2023-12-11" },
    //         { name: "4 2023-10-13" },
    //         { name: "4 2023-09-03" },
    //       ],
    //     },
    //     {
    //       name: "Other",
    //       children: [
    //         { name: "CORRESP 2023-02-06" },
    //         { name: "CORRESP 2023-02-03" },
    //         { name: "UPLOAD 2023-01-24" },
    //       ],
    //     },
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

export const SECfilingsNode = memo(
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

SECfilingsNode.displayName = "SECfilingsNode";
