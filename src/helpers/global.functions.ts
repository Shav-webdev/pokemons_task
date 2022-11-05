export const getPageCount = (total: number, itemsPerPage: number) => {
  return Math.floor((total + itemsPerPage - 1) / itemsPerPage);
};
