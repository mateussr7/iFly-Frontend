export interface Compra {
  idPassageiro: number;
  idVoo: number;
  data: string;
  assento: number;
}

export interface CompraState {
  userCompras: Compra[];
}

export enum CompraActions {
  FETCH_COMPRA_LIST = "@compra/FETCH_COMPRA_LIST",
  FETCH_COMPRA_LIST_SUCCESS = "@compra/FETCH_COMPRA_LIST_SUCCESS",
  CANCEL_COMPRA = "@compra/CANCEL_COMPRA",
  CANCEL_COMPRA_SUCCESS = "@compra/CANCEL_COMPRA_SUCCESS",
  INSERT_COMPRA = "@compra/INSERT_COMPRA",
  INSERT_COMPRA_SUCCESS = "@compra/INSERT_COMPRA_SUCCESS",
  INSERT_VOO_SUCCESS = "INSERT_VOO_SUCCESS",
}
