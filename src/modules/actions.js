export const MOVE_PAGE = "MOVE_PAGE";

export const movePage = pageNo => {
  return {
    type: MOVE_PAGE,
    pageNo: pageNo,
  };
};
