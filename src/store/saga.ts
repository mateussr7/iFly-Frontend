import { all } from "redux-saga/effects";
import { watchAirlines } from "./airlines/sagas";
import watchAeroportos from "./airports/sagas";
import watchCompras from "./compra/sagas";
import { watchUser } from "./user/sagas";
import watchVoos from "./voo/sagas";
import { watchPassenger } from "./passenger/sagas";

export default function* rootSaga() {
  yield all([
    watchUser(), 
    watchVoos(), 
    watchAeroportos(), 
    watchCompras(), 
    watchAirlines(), 
    watchPassenger()
  ]);
}
