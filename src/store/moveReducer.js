import {MOVE_PAGE} from "../modules/actions";

const initialState = {
  pageNo: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOVE_PAGE:
      return {
        ...state,
        pageNo: action.pageNo,
      };
    default:
      return state;
  }
}
