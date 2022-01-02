import { all } from "redux-saga/effects";
import watchAeroportos from "./airports/sagas";
import { watchUser } from "./user/sagas";
import watchVoos from "./voo/sagas";

export default function* rootSaga() {
  yield all([watchUser(), watchVoos(), watchAeroportos()]);
}
