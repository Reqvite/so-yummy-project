export const getParamKey = (url) => {
  const searchParams = new URLSearchParams(url.search);
  for (const key of searchParams.keys()) {
    return key;
  }
};
