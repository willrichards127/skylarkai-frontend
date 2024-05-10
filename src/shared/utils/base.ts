export const groupBy = (key: string) => (array: any) =>
  array.reduce((objectsByKeyValue: any, obj: any) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const sortObjectByKeys = (
  obj: Record<string, any>,
  keyOrder: string[]
) => {
  const result: Record<string, any> = {};

  // Iterate over the provided key order
  keyOrder.forEach((key) => {
    // Check if the key exists in the input object
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      // Add the key-value pair to the result object
      result[key] = obj[key];
    }
  });

  return result;
};

export const gen5digits = () => {
  const minm = 10000;
  const maxm = 99999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
};

export const genWorkOrderName = (companyName: string, count = 3) => {
  return companyName.substring(0, count).toUpperCase() + gen5digits();
};

export const changeOrder = (
  arr: any[],
  specificId: string,
  movingId: string
) => {
  const specificElementIndex = arr.findIndex((item) => item.id === specificId);
  const elementToSwitchIndex = arr.findIndex((item) => item.id === movingId);

  const updated = [...arr];

  if (
    specificElementIndex !== -1 &&
    elementToSwitchIndex !== -1 &&
    specificElementIndex !== elementToSwitchIndex
  ) {
    const elementToSwitch = updated[elementToSwitchIndex];
    updated.splice(elementToSwitchIndex, 1); // Remove the element to switch
    updated.splice(specificElementIndex, 0, elementToSwitch); // Insert the element to switch before the specific element
  }
  return updated;
};

export const addElementsRightAfter = (
  arr: any[],
  specificId: string,
  newElements: any[]
) => {
  const updated = [...arr];
  const specificElementIndex = arr.findIndex((item) => item.id === specificId);
  const insertIndex = specificElementIndex + 1;
  // Insert the new element at the calculated index
  updated.splice(insertIndex, 0, ...newElements);
  return updated;
};