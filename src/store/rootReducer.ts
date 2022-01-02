import { combineReducers } from "redux";
import sidebarReducer from "./side-bar";
import userReducer from "./user";
import vooReducer from "./voo";
import aeroportoReducer from "./airports";

const rootReducer = combineReducers({
  sidebarReducer,
  userReducer,
  vooReducer,
  aeroportoReducer,
});

export default rootReducer;
