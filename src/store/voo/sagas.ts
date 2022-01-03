import { AnyAction } from "redux";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getVoos,
  getVoosByUserId,
  insertVoo,
  updateVoo,
} from "../../services/vooServices";
import { getIdRota } from "../../services/rotaServices";
import {
  addVooSuccess,
  editVooSuccess,
  fetchVooListSuccess,
  getRotaOriginDestinySuccess,
  setOriginDestiny,
} from "./actions";
import { Voo, VooActions, VooSearchDTO } from "./types";
import { showMessage } from "../feedback/actions";

export default function* watchVoos() {
  yield takeLatest(VooActions.FETCH_VOO_LIST, fetchVoosSagas);
  yield takeLatest(VooActions.ADD_VOO, addVoosagas);
  yield takeLatest(VooActions.EDIT_VOO, editVooSagas);
  yield takeLatest(VooActions.GET_ROTA_ORIGIN_DESTINY, getRotaId);
}

function* fetchVoosSagas(action: AnyAction) {
  try {
    const voo: VooSearchDTO = action.payload.data;
    var param: Voo[];
    if (voo) {
      param = yield call(getVoos, voo);
      yield put(setOriginDestiny(voo));
    } else param = yield call(getVoosByUserId, action.payload.idUser);
    yield put(fetchVooListSuccess(param));
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

function* addVoosagas(action: AnyAction) {
  const dto: Voo = action.payload;
  try {
    const param: Voo = yield call(insertVoo, dto);
    yield put(addVooSuccess(param));
    yield put(
      showMessage({
        message: "Adicionado com sucesso",
        show: true,
        type: "success",
      })
    );
  } catch (err) {
    yield put(
      showMessage({
        message: "Não foi possível adicionar",
        show: true,
        type: "failure",
      })
    );
  }
}

function* editVooSagas(data: AnyAction) {
  const voo: Voo = data.payload;
  try {
    const param: Voo = yield call(updateVoo, voo);
    yield put(editVooSuccess(param));
    yield put(
      showMessage({
        message: "Editado com sucesso",
        show: true,
        type: "success",
      })
    );
  } catch (err) {
    yield put(
      showMessage({
        message: "Não foi possivel adicionar",
        show: true,
        type: "failure",
      })
    );
  }
}

function* getRotaId(data: AnyAction) {
  const idOrigin: number = data.payload.idOrigin;
  const idDestiny: number = data.payload.idDestiny;
  try {
    const param: number = yield call(getIdRota, idOrigin, idDestiny);
    yield put(getRotaOriginDestinySuccess(param));
  } catch (err) {}
}
