export const toBoolean = (value: string | null): boolean | null | undefined => {
  if (value === "" || value === null) return null;
  if (value.toUpperCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;
  return undefined;
};
