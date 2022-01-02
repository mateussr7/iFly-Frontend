import { action } from "typesafe-actions";
import { VooActions, Voo, VooSearchDTO } from "./types";

export const fetchVooList = (data?: VooSearchDTO) =>
  action(VooActions.FETCH_VOO_LIST, data);

export const fetchVooListSuccess = (data: Voo[]) =>
  action(VooActions.FETCH_VOO_LIST_SUCCESS, data);

export const addVoo = (data: Voo) => action(VooActions.ADD_VOO, data);

export const addVooSuccess = (data: Voo) =>
  action(VooActions.ADD_VOO_SUCCESS, data);

export const editVoo = (data: Voo) => action(VooActions.EDIT_VOO, data);

export const editVooSuccess = (data: Voo) =>
  action(VooActions.EDIT_VOO_SUCCESS, data);
