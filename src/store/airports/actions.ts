import { action } from "typesafe-actions";
import { AeroportoActions, Aeroporto } from "./types";

export const fetchAeroportoList = () =>
  action(AeroportoActions.FETCH_AEROPORTOS_LIST);

export const fetchAeroportoListSuccess = (data: Aeroporto[]) =>
  action(AeroportoActions.FETCH_AEROPORTOS_LIST_SUCCESS, data);
