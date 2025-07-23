const localStorageKey = "formData";

const getFormValue = (): any[] => {
  const value = localStorage.getItem(localStorageKey);
  try {
    return value ? JSON.parse(value) : [];
  } catch (error) {
    console.error("Failed to parse localStorage formData:", error);
    return [];
  }
};

const setFormValue = (values: Record<string, any>): void => {
  if (!values || typeof values !== "object" || Object.keys(values).length === 0) return;

  const existingValues = getFormValue();
  const updatedValues = [values, ...existingValues];
  localStorage.setItem(localStorageKey, JSON.stringify(updatedValues));
};

export { setFormValue, getFormValue };
