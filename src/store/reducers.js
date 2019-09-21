import {combineReducers} from "redux";
import appReducer from "../modules/app";
import loadingReducer from "../modules/loading";
import moveReducer from "./moveReducer";

export const makeRootReducer = asyncReducers => {
  const reducers = {
    app: appReducer,
    loading: loadingReducer,
    move: moveReducer,
    ...asyncReducers,
  };
  return combineReducers(reducers);
};

export default makeRootReducer;
