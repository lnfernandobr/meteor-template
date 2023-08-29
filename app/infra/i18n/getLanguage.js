export const getLanguage = () => {
  return navigator.languages?.[0] || navigator.language || "en";
};
