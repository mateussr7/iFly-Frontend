import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import rootSaga from "./saga"
import rootReducer from "./rootReducer"
import { SideBarState } from "./side-bar/types"

export interface ApplicationState {
    sidebarReducer: SideBarState
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store