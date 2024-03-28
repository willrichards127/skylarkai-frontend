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
  DraggingPosition,
} from "react-complex-tree";
import update from "immutability-helper";

import { ITemplateItem, TTreeData } from "../../shared/models/interfaces";

import "react-complex-tree/lib/style-modern.css";
import "./custom.css";
import Checkbox from "@mui/material/Checkbox";

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

  useEffect(() => {
    const updatedItems = convertItems(data);
    if (JSON.stringify(updatedItems) !== JSON.stringify(items)) {
      setItems(updatedItems);
    }
  }, [data]);

  useEffect(() => {
    if (onChangeData) {
      onChangeData(revertItems(items));
    }
  }, [items]);

  const getParentItem = (itemId: TreeItemIndex) => {
    const entry = Object.entries(items).find(([_, value]) =>
      value.children?.includes(itemId)
    );
    if (entry) {
      return entry[1];
    }
  };

  const getAllChildren = (item: TreeItem<TTreeData>) => {
    let children: TreeItemIndex[] = [];

    if (item.children) {
      children = [...item.children];
      for (let i = 0; i < children.length; i++) {
        if (items[children[i]].children?.length) {
          children = [...children, ...getAllChildren(items[item.children[i]])];
        }
      }
    }
    return children;
  };

  const getAllParents = (item: TreeItem<TTreeData>) => {
    let parents: TreeItemIndex[] = [];

    const parentItem = getParentItem(item.index);
    if (parentItem && parentItem.index !== "root") {
      parents.push(parentItem.index);
      parents = [...parents, ...getAllParents(parentItem)];
    }
    return parents;
  };

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

  const statusItem = (item: TreeItem<TTreeData>, status: boolean) => {
    let indexList: TreeItemIndex[] = [item.index];
    const parents = getAllParents(item);

    if (status) {
      indexList = [...parents, ...indexList];
    } else {
      let destItem: TreeItem<TTreeData> = item;
      for (let i = 0; i < parents.length; i++) {
        const parentItem = items[parents[i]];
        const unCheckedCount = parentItem
          .children!.filter((child) => child !== destItem.index)
          .reduce<number>(
            (prev, cur) => (items[cur].data.isUnChecked ? prev + 1 : prev),
            0
          );
        if (unCheckedCount === parentItem.children!.length - 1) {
          indexList = [...indexList, parentItem.index];
        } else {
          break;
        }
        destItem = parentItem;
      }
    }

    if (item.children) {
      indexList = [...getAllChildren(item), ...indexList];
    }

    const updateObj = indexList.reduce(
      (prev, cur) => ({
        ...prev,
        [cur]: {
          data: status
            ? {
                $apply: function (obj: TTreeData) {
                  const { isUnChecked, ...data } = obj;
                  return data;
                },
              }
            : {
                isUnChecked: { $set: true },
              },
        },
      }),
      {}
    );
    setItems(update(items, { ...updateObj }));
  };

  const moveItem = (
    movedItems: TreeItem<TTreeData>[],
    target: DraggingPosition
  ) => {
    const item = movedItems[0];
    const parentItem = getParentItem(item.index);
    if (parentItem) {
      if (target.targetType === "between-items") {
        const hasSubFolder = items[target.parentItem].children?.some(
          (child) => items[child].isFolder
        );
        if (!item.isFolder && hasSubFolder) {
          console.warn("Can't move item because target item is category.");
          return;
        }

        if (item.isFolder && !hasSubFolder) {
          console.warn("Can't move item because target item is leaf.");
          return;
        }

        const currentItemOrder = parentItem.children?.findIndex(
          (child) => child === item.index
        );
        setItems(
          update(
            update(items, {
              [parentItem.index as string]: {
                children: { $splice: [[currentItemOrder!, 1]] },
              },
            }),
            {
              [target.parentItem as string]: {
                children: { $splice: [[target.childIndex, 0, item.index]] },
              },
            }
          )
        );
      }
    }
  };

  const getTotalCount = (item: TreeItem<TTreeData>) => {
    if (item.children) {
      let totalCount = 0;
      let successCount = 0;
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
      return { totalCount, successCount };
    }
    return {
      totalCount: 0,
      successCount: 0,
    };
  };

  const isIndeterminate = (item: TreeItem<TTreeData>) => {
    if (item.children && !item.data.isUnChecked) {
      for (let i = 0; i < item.children.length; i++) {
        if (items[item.children[i]].data.isUnChecked) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <ControlledTreeEnvironment<TTreeData>
      items={items}
      getItemTitle={(item) => item.data.name}
      canDragAndDrop
      canDropOnFolder
      canReorderItems
      defaultInteractionMode={InteractionMode.ClickArrowToExpand}
      renderItemTitle={({ title, item }) => {
        const checked = !item.data.isUnChecked;
        return (
          <Box display={"flex"} alignItems={"center"}>
            {isEditMode ? (
              <Checkbox
                checked={checked}
                indeterminate={isIndeterminate(item)}
                onChange={(e) => {
                  statusItem(item, e.target.checked);
                }}
                sx={{ marginRight: 1 }}
              />
            ) : null}
            <Typography variant={item.isFolder ? "body1" : "body2"}>
              {title}
            </Typography>
          </Box>
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
                    {/* <IconButton
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
                    </IconButton> */}
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
      onDrop={moveItem}
      viewState={{ "tree-1": { focusedItem, expandedItems } }}
    >
      <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
    </ControlledTreeEnvironment>
  );
};

export default Templateview;
