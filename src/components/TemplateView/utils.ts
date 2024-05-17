import { TreeItem, TreeItemIndex } from "react-complex-tree";
import { v4 as uuidv4 } from "uuid";

import {
  ITemplate,
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

export const convertJSON = (text: string) => {
  try {
    const obj = JSON.parse(text);
    if ("title" in obj && "data" in obj) {
      return obj as ITemplate;
    }
  } catch (err) {}
};

export const addIdtoTemplateJson = (
  elements: ITemplateItemPure[],
  option?: { excludeUnChecked?: boolean }
): ITemplateItem[] => {
  return elements
    .map((element) => {
      const { children, ...elementData } = element;
      if (option && option.excludeUnChecked && elementData.isUnChecked) {
        return;
      }
      const destinationElement: ITemplateItem = {
        index: uuidv4(),
        ...elementData,
      };
      if (children) {
        destinationElement.children = addIdtoTemplateJson(children, option);
      }
      return destinationElement;
    })
    .filter((element): element is ITemplateItem => !!element);
};

export const removeIdTemplateJson = (
  elements: ITemplateItem[]
): ITemplateItemPure[] => {
  return elements.map((element) => {
    const { children, name, isUnChecked, template } = element;
    const destinationElement: ITemplateItemPure = {
      name,
      isUnChecked,
      template,
    };
    if (children) {
      destinationElement.children = removeIdTemplateJson(children);
    }
    return destinationElement;
  });
};

export const convertItems = (
  templateList: ITemplateItem[],
  isRoot: boolean = true
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
  const visited: { [key in TreeItemIndex]: boolean } = {};

  function buildNode(index: TreeItemIndex) {
    if (visited[index]) return null;
    visited[index] = true;
    const obj = treeData[index];
    const newNode: ITemplateItem = { index: obj.index as string, ...obj.data };

    if (obj.children && obj.children.length > 0) {
      const children = obj.children
        .map((childIndex) => buildNode(childIndex))
        .filter((child): child is ITemplateItem => child !== null);
      newNode.children = children;
    }

    return newNode;
  }

  for (const key in treeData) {
    if (!visited[key]) {
      const node = buildNode(key);
      if (node) result.push(node);
    }
  }

  return result[0].children!;
};

export const selectAll = (
  elements: ITemplateItem[],
  checked: boolean
): ITemplateItem[] => {
  return elements.map((element) => {
    if (element.children) {
      element.children = selectAll(element.children, checked);
    }

    if (checked) {
      delete element["isUnChecked"];
      return element;
    } else {
      element.isUnChecked = true;
      return element;
    }
  });
};

export const updateStatus = (
  elements: ITemplateItem[],
  status: number[],
  depth: number = 0,
  offset: number = 0
) => {
  return elements.map((element, index: number) => {
    if (element.children) {
      element.children = updateStatus(
        element.children,
        status,
        depth + 1,
        status[depth] - index
      );
    } else {
      if (offset > 0) {
        element.isSuccess = true;
      } else if (offset === 0) {
        if (index < status[depth]) {
          element.isSuccess = true;
        } else if (index === status[depth]) {
          element.isLoading = true;
        } else {
          delete element["isSuccess"];
          delete element["isLoading"];
        }
      }
    }
    return element;
  });
};

export const getIndexing = (
  elements: ITemplateItem[],
  target: ITemplateItem,
  currentIndex: number[] = []
): number[] | null => {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    currentIndex.push(i);
    
    if (element.index === target.index) {
      return currentIndex;
    } else if (element.children && element.children.length > 0) {
      const result = getIndexing(element.children, target, [...currentIndex]);
      if (result) {
        return result;
      }
    }
    
    currentIndex.pop();
  }

  return null;
};

export const getElementByIndexing = (elements: ITemplateItem[], indexingArray: number[]): ITemplateItem | null => {
  let currentArray = elements;
  for (const index of indexingArray) {
      if (index >= currentArray.length || index < 0) {
          return null; // Index out of bounds
      }
      const element = currentArray[index];
      if (!element) {
          return null; // Element not found
      }
      currentArray = element.children || [];
  }
  return currentArray.length > 0 ? currentArray[0] : null;
};

export const cx = (...classNames: Array<string | undefined | false>) =>
  classNames.filter((cn) => !!cn).join(" ");
