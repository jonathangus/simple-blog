// @flow
export default (str: string, count: number = 25): string => {
  return str.length > 5 ? `${str.substring(0, count)}...` : str;
};
