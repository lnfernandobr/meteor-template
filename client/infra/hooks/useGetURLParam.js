import { useLocation } from "react-router-dom";

export const useGetURLParam = (query) =>
  new URLSearchParams(useLocation().search).get(query);
