import { getParamKey } from "./getUrlParam";

export const getParamValue = (url) => {
  const paramValue = getParamKey(url);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get(paramValue);
};
