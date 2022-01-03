import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  cancelCompra,
  getComprasByUser,
  insertCompra,
} from "../../services/compraServices";
import { showMessage } from "../feedback/actions";
import {
  fetchCompraListSuccess,
  insertCompraSuccess,
  cancelCompraSuccess,
} from "./actions";
import { Compra, CompraActions } from "./types";

export default function* watchCompras() {
  yield takeLatest(CompraActions.FETCH_COMPRA_LIST, fetchCompraSagas);
  yield takeLatest(CompraActions.CANCEL_COMPRA, cancelCompraSagas);
  yield takeLatest(CompraActions.INSERT_COMPRA, insertCompraSagas);
}

function* fetchCompraSagas(action: AnyAction) {
  try {
    const idUser: number = action.payload;
    const param: Compra[] = yield call(getComprasByUser, idUser);
    yield put(fetchCompraListSuccess(param));
    yield put(
      showMessage({
        message: "Busca efetuada",
        show: true,
        type: "success",
      })
    );
  } catch (err) {
    yield put(
      showMessage({
        message: "Busca não efetuada",
        show: true,
        type: "failure",
      })
    );
  }
}

function* cancelCompraSagas(action: AnyAction) {
  try {
    const compra: Compra = action.payload;
    const param: Compra = yield call(cancelCompra, compra);
    yield put(cancelCompraSuccess(param));
    yield put(
      showMessage({
        message: "Compra cancelada",
        show: true,
        type: "success",
      })
    );
  } catch (err) {
    yield put(
      showMessage({
        message: "Compra não cancelada",
        show: true,
        type: "failure",
      })
    );
  }
}

function* insertCompraSagas(action: AnyAction) {
  try {
    const compra: Compra = action.payload;
    const param: Compra = yield call(insertCompra, compra);
    yield put(insertCompraSuccess(param));
    yield put(
      showMessage({
        message: "Compra efetuada",
        show: true,
        type: "success",
      })
    );
  } catch (err) {
    yield put(
      showMessage({
        message: "Compra não efetuada",
        show: true,
        type: "failure",
      })
    );
  }
}
