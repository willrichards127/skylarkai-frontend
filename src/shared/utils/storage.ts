export const saveStoreValue = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const loadStoreValue = (key: string) => {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeStoreValue = (key: string) => {
  sessionStorage.removeItem(key);
};
