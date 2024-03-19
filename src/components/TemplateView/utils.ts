import { TreeItem, TreeItemIndex } from "react-complex-tree";
import { v4 as uuidv4 } from "uuid";

import {
  ITemplateItem,
  ITemplateItemPure,
  TTreeData,
} from "../../shared/models/interfaces";

export const createNewItem = (
  data: TTreeData,
  isFolder?: boolean
): TreeItem<TTreeData> => ({
  index: uuidv4(),
  data,
  canMove: true,
  canRename: true,
  isFolder,
});

export const addIdtoTemplateJson = (
  elements: ITemplateItemPure[]
): ITemplateItem[] => {
  return elements.map((element) => {
    const { children, ...elementData } = element;
    const destinationElement: ITemplateItem = {
      index: uuidv4(),
      ...elementData,
    };
    if (children) {
      destinationElement.children = addIdtoTemplateJson(children);
    }
    return destinationElement;
  });
};

export const convertItems = (
  templateList: ITemplateItem[],
  isRoot: boolean = true,
): Record<TreeItemIndex, TreeItem<TTreeData>> => {
  let result: Record<TreeItemIndex, TreeItem<TTreeData>> = {};

  if (isRoot) {
    result["root"] = {
      index: "root",
      data: { name: "root" },
      isFolder: true,
      children: [],
    };
  }

  for (let i = 0; i < templateList.length; i++) {
    const { children, ...itemData } = templateList[i];
    const newTreeItem: TreeItem<TTreeData> = {
      index: itemData.index,
      data: { ...itemData },
      canMove: true,
      canRename: true,
    };
    if (children) {
      newTreeItem.isFolder = true;
      newTreeItem.children = children.map((child) => child.index);
      result = {
        ...result,
        ...convertItems(children, false),
      };
    }

    result[newTreeItem.index] = newTreeItem;

    if (isRoot) {
      result["root"]["children"] = [
        ...result["root"]["children"]!,
        newTreeItem.index,
      ];
    }
  }

  return result;
};

export const revertItems = (
  treeData: Record<TreeItemIndex, TreeItem<TTreeData>>
): ITemplateItem[] => {
  const result = [];

  for (const key in treeData) {
    if (Object.prototype.hasOwnProperty.call(treeData, key)) {
      const { data, children, index } = treeData[key];
      const newItem: ITemplateItem = { index: index as string, ...data };

      if (children && children.length > 0) {
        newItem.children = children.map((childId) => ({index: childId as string, ...treeData[childId].data}));
      }

      result.push(newItem);
    }
  }

  return result.find((ret) => ret.name === "root")!.children!;
};

export const cx = (...classNames: Array<string | undefined | false>) =>
  classNames.filter((cn) => !!cn).join(" ");
