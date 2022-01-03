import { combineReducers } from "redux";
import sidebarReducer from "./side-bar";
import userReducer from "./user";
import vooReducer from "./voo";
import aeroportoReducer from "./airports";
import compraReducer from "./compra";
import airlineReducer from "./airlines";
import passengerReducer from "./passenger";
import feedbackReducer from "./feedback";

const rootReducer = combineReducers({
  sidebarReducer,
  userReducer,
  vooReducer,
  aeroportoReducer,
  compraReducer,
  airlineReducer,
  passengerReducer,
  feedbackReducer,
});

export default rootReducer;
