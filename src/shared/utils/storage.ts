export type StorageItem = 'token' | 'user-info' | 'sys_graph_id' | 'tenancy'

export const saveStoreValue = (key: StorageItem, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const loadStoreValue = (key: StorageItem) => {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeStoreValue = (key: StorageItem) => {
  sessionStorage.removeItem(key);
};
