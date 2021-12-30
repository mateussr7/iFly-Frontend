import { combineReducers } from "redux"
import sidebarReducer from "./side-bar"
import userReducer from "./user"

const rootReducer = combineReducers({
    sidebarReducer,
    userReducer
})

export default rootReducer