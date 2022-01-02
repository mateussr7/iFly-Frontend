import { combineReducers } from "redux";
import sidebarReducer from "./side-bar";
import userReducer from "./user";
import vooReducer from "./voo";
import aeroportoReducer from "./airports";
import airlineReducer from "./airlines";

const rootReducer = combineReducers({
  sidebarReducer,
  userReducer,
  vooReducer,
  aeroportoReducer,
  airlineReducer
});

export default rootReducer;
