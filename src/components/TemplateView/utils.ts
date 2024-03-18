import { TreeItem, TreeItemIndex } from "react-complex-tree";
import { v4 as uuidv4 } from "uuid";

import { ITemplateItem, TTreeData } from "../../shared/models/interfaces";

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

export const convertItems = (
  templateList: ITemplateItem[],
  newGeneratedId?: TreeItemIndex[]
): Record<TreeItemIndex, TreeItem<TTreeData>> => {
  let result: Record<TreeItemIndex, TreeItem<TTreeData>> = {};

  if (!newGeneratedId) {
    result["root"] = {
      index: "root",
      data: { name: "root" },
      isFolder: true,
      children: [],
    };
  }

  for (let i = 0; i < templateList.length; i++) {
    const templateItem = templateList[i];

    const newTreeItem: TreeItem<TTreeData> = {
      index: newGeneratedId ? newGeneratedId[i] : uuidv4(),
      data: { name: templateItem.name },
      canMove: true,
      canRename: true,
    };

    if (templateItem.children) {
      newTreeItem.isFolder = true;
      newTreeItem.children = templateItem.children.map((_) => uuidv4());
      result = {
        ...result,
        ...convertItems(templateItem.children, newTreeItem.children),
      };
    }

    result[newTreeItem.index] = newTreeItem;

    if (!newGeneratedId) {
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
      const { data, children } = treeData[key];
      const newItem: ITemplateItem = { ...data };

      if (children && children.length > 0) {
        newItem.children = children.map((childId) => ({
          ...treeData[childId].data,
        }));
      }

      result.push(newItem);
    }
  }

  return result.find((ret) => ret.name === "root")!.children!;
};

export const cx = (...classNames: Array<string | undefined | false>) =>
  classNames.filter((cn) => !!cn).join(" ");
