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
