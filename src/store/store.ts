import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
import rootReducer from "./rootReducer";
import { SideBarState } from "./side-bar/types";
import { UserState } from "./user/types";
import { VooState } from "./voo/types";
import { AeroportoState } from "./airports/types";

export interface ApplicationState {
  sidebarReducer: SideBarState;
  userReducer: UserState;
  vooReducer: VooState;
  aeroportoReducer: AeroportoState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
