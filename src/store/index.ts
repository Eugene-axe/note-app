const KEY = "notes_app";

export const saveToStorage = (data: any[]) => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(KEY, dataJSON);
};

export const getFromStorage = () => {
  const data = localStorage.getItem(KEY);
  if (data) return JSON.parse(data);
  return [];
};
