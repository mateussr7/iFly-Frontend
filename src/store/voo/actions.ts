import { action } from "typesafe-actions";
import { VooActions, Voo, VooSearchDTO } from "./types";

export const fetchVooList = (data?: VooSearchDTO, idUser?: number) =>
  action(VooActions.FETCH_VOO_LIST, { data, idUser });

export const fetchVooListSuccess = (data: Voo[]) =>
  action(VooActions.FETCH_VOO_LIST_SUCCESS, data);

export const fetchVooListUserSuccess = (data: Voo[]) =>
  action(VooActions.FETCH_VOO_LIST_USER_SUCCESS, data);

export const addVoo = (data: Voo) => action(VooActions.ADD_VOO, data);

export const addVooSuccess = (data: Voo) =>
  action(VooActions.ADD_VOO_SUCCESS, data);

export const editVoo = (data: Voo) => action(VooActions.EDIT_VOO, data);

export const editVooSuccess = (data: Voo) =>
  action(VooActions.EDIT_VOO_SUCCESS, data);

export const setOriginDestiny = (data: VooSearchDTO) =>
  action(VooActions.SET_ORIGIN_DESTINY, data);

export const getRotaOriginDestiny = (idOrigin: number, idDestiny: number) =>
  action(VooActions.GET_ROTA_ORIGIN_DESTINY, { idOrigin, idDestiny });

export const getRotaOriginDestinySuccess = (idRota: number) =>
  action(VooActions.GET_ROTA_ORIGIN_DESTINY_SUCCESS, idRota);

export const updateCapacities = (data: number) =>
  action(VooActions.UPDATE_CAPACITIES, data);
