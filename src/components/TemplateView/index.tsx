import { useEffect, useState } from "react";
import { convertItems, revertItems, createNewItem, cx } from "./utils";

import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  Tree,
  TreeItem,
  TreeItemIndex,
  InteractionMode,
  ControlledTreeEnvironment,
} from "react-complex-tree";
import update from "immutability-helper";

import { ITemplateItem, TTreeData } from "../../shared/models/interfaces";

import "react-complex-tree/lib/style-modern.css";
import "./custom.css";

const Templateview = ({
  data,
  onChangeData,
  isEditMode,
}: {
  data: ITemplateItem[];
  onChangeData?: (data: ITemplateItem[]) => void;
  isEditMode?: boolean;
}) => {
  const [items, setItems] = useState<
    Record<TreeItemIndex, TreeItem<TTreeData>>
  >(convertItems(data));
  const [focusedItem, setFocusedItem] = useState<TreeItemIndex>();
  const [expandedItems, setExpandedItems] = useState<TreeItemIndex[]>([]);
  const getParentItem = (itemId: TreeItemIndex) => {
    const entry = Object.entries(items).find(([_, value]) =>
      value.children?.includes(itemId)
    );
    if (entry) {
      return entry[1];
    }
  };

  useEffect(() => {
    setItems(convertItems(data));
  }, [data]);

  useEffect(() => {
    if (onChangeData) {
      onChangeData(revertItems(items));
    }
    // console.log("=======================", revertItems(items));
  }, [items]);

  const addItem = (item: TreeItem<TTreeData>) => {
    const parentItem = getParentItem(item.index);
    if (items[item.index] && parentItem) {
      const newItem = createNewItem({ name: "Untitled" }, item.isFolder);

      const currentItemOrder = items[parentItem.index].children!.findIndex(
        (child) => child === item.index
      );

      setItems(
        update(items, {
          [newItem.index]: { $set: newItem },
          [parentItem.index as string]: {
            children: {
              $splice: [[currentItemOrder + 1, 0, newItem.index]],
            },
          },
        })
      );
    }
  };

  const removeItem = (item: TreeItem<TTreeData>) => {
    const parentItem = getParentItem(item.index);
    if (items[item.index] && parentItem) {
      const currentItemOrder = items[parentItem.index].children!.findIndex(
        (child) => child === item.index
      );

      setItems(
        update(items, {
          $unset: [item.index as string],
          [parentItem.index as string]: {
            children: { $splice: [[currentItemOrder, 1]] },
          },
        })
      );
    }
  };

  const renameItem = (item: TreeItem<TTreeData>, newName: string) => {
    setItems(
      update(items, { [item.index]: { data: { name: { $set: newName } } } })
    );
  };

  const getTotalCount = (item: TreeItem<TTreeData>) => {
    if (item.children) {
      let totalCount = 0;
      let successCount = 0 ;
      let isIncludeCategory = false;
      for (let i = 0; i < item.children.length; i++) {
        if (items[item.children[i]].children) {
          isIncludeCategory = true;
          const temp = getTotalCount(items[item.children[i]]);
          totalCount += temp.totalCount;
          successCount += items[item.children[i]].children!.reduce<number>(
            (prev, cur) => (items[cur].data.isSuccess ? prev + 1 : prev),
            0
          );
        }
      }
      if (!isIncludeCategory) {
        totalCount = item.children.length;
        successCount = item.children?.reduce<number>(
          (prev, cur) => (items[cur].data.isSuccess ? prev + 1 : prev),
          0
        );
      }
      return {totalCount, successCount};
    }
    return {
      totalCount: 0,
      successCount: 0,
    };
  };

  return (
    <ControlledTreeEnvironment<TTreeData>
      items={items}
      getItemTitle={(item) => item.data.name}
      canDragAndDrop
      canDropOnFolder
      canReorderItems
      defaultInteractionMode={InteractionMode.ClickItemToExpand}
      renderItemTitle={({ title, item }) => {
        return (
          <Typography variant={item.isFolder ? "body1" : "body2"}>
            {title}
          </Typography>
        );
      }}
      renderItem={({ item, title, arrow, context, children, depth }) => {
        const type = context.isRenaming ? undefined : "button";
        const counts = getTotalCount(item);
        return (
          <li
            {...(context.itemContainerWithChildrenProps as any)}
            className={cx(
              "rct-tree-item-li",
              "rct-tree-item-li-custom",
              item.isFolder && "rct-tree-item-li-isFolder",
              context.isSelected && "rct-tree-item-li-selected",
              context.isExpanded && "rct-tree-item-li-expanded",
              context.isFocused && "rct-tree-item-li-focused",
              context.isDraggingOver && "rct-tree-item-li-dragging-over",
              context.isSearchMatching && "rct-tree-item-li-search-match"
            )}
          >
            <div
              {...(context.itemContainerWithoutChildrenProps as any)}
              style={{ paddingLeft: `${(depth + 1) * 10}px` }}
              className={cx(
                "rct-tree-item-title-container",
                item.isFolder && "rct-tree-item-title-container-isFolder",
                context.isSelected && "rct-tree-item-title-container-selected",
                context.isExpanded && "rct-tree-item-title-container-expanded",
                context.isFocused && "rct-tree-item-title-container-focused",
                context.isDraggingOver &&
                  "rct-tree-item-title-container-dragging-over",
                context.isSearchMatching &&
                  "rct-tree-item-title-container-search-match"
              )}
            >
              {arrow}
              <div
                type={type}
                {...(context.interactiveElementProps as any)}
                className={cx(
                  "rct-tree-item-button",
                  item.isFolder && "rct-tree-item-button-isFolder",
                  context.isSelected && "rct-tree-item-button-selected",
                  context.isExpanded && "rct-tree-item-button-expanded",
                  context.isFocused && "rct-tree-item-button-focused",
                  context.isDraggingOver &&
                    "rct-tree-item-button-dragging-over",
                  context.isSearchMatching &&
                    "rct-tree-item-button-search-match"
                )}
              >
                {title}
                {isEditMode ? (
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(item);
                      }}
                      title="Add category below"
                    >
                      <PostAddIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        addItem(item);
                      }}
                      title="Add query below"
                    >
                      <AddIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={context.startRenamingItem}
                      title="Edit"
                    >
                      <EditIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeItem(item);
                      }}
                      title="Remove"
                    >
                      <DeleteIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Box>
                ) : item.isFolder ? (
                  <Typography>
                    {counts.successCount}/{counts.totalCount}
                  </Typography>
                ) : item.data.isLoading ? (
                  <CircularProgress size={14} />
                ) : item.data.isSuccess ? (
                  <CheckCircleIcon
                    sx={{ color: "success.main", fontSize: 18 }}
                  />
                ) : null}
              </div>
            </div>
            {children}
          </li>
        );
      }}
      onFocusItem={(item) => setFocusedItem(item.index)}
      onExpandItem={(item) => setExpandedItems([...expandedItems, item.index])}
      onCollapseItem={(item) =>
        setExpandedItems(
          expandedItems.filter(
            (expandedItemIndex) => expandedItemIndex !== item.index
          )
        )
      }
      onRenameItem={renameItem}
      viewState={{ "tree-1": { focusedItem, expandedItems } }}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </ControlledTreeEnvironment>
  );
};

export default Templateview;
