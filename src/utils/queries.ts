export const getQueriesParameters = (): {[key: string]: string} => {
  return window.location.search
    .substring(1)
    .split("&")
    .reduce((a, s) => ({...a, [s.split("=")[0]]: s.split("=")[1]}), {});
}

export const getQueryparameter = (param: string): string | undefined => {
  return getQueriesParameters()[param];
}
