import { action } from "typesafe-actions";
import { Compra, CompraActions } from "./types";

export const fetchCompraList = (data: number) =>
  action(CompraActions.FETCH_COMPRA_LIST, data);

export const fetchCompraListSuccess = (data: Compra[]) =>
  action(CompraActions.FETCH_COMPRA_LIST_SUCCESS, data);

export const cancelCompra = (data: Compra) => action(CompraActions.CANCEL_COMPRA, data);

export const cancelCompraSuccess = (data: Compra) =>
  action(CompraActions.CANCEL_COMPRA_SUCCESS, data);

export const insertCompra = (data: Compra) => action(CompraActions.INSERT_COMPRA, data);

export const insertCompraSuccess = (data: Compra) =>
  action(CompraActions.INSERT_COMPRA_SUCCESS, data);