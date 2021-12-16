import { combineReducers } from "redux"
import sidebarReducer from "./side-bar"

const rootReducer = combineReducers({
    sidebarReducer,
})

export default rootReducer