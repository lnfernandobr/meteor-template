export const getLanguage = () => {
  return "pt-BR" || navigator.languages?.[0] || navigator.language || "en";
};
