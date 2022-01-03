export interface Voo {
  id: number;
  capacidade: number;
  horario: string;
  valor: number;
  idEmpresaAerea: number;
  idRota: number;
  ticketsDisponiveis: number;
}

export interface VooSearchDTO {
  origin: number;
  destiny: number;
  airline: number;
  date: string;
}

export interface VooState {
  listVoo: Voo[];
  listVooUser: Voo[];
  voo: Voo | undefined;
  originId: number;
  destinyId: number;
  idRota: number;
}

export interface OrigDestRota {
  aeroportoOrig: string;
  aeroportoDest: string;
}

export enum VooActions {
  FETCH_VOO_LIST = "@voo/FETCH_VOO_LIST",
  FETCH_VOO_LIST_SUCCESS = "@voo/FETCH_VOO_LIST_SUCCESS",
  FETCH_VOO_LIST_USER_SUCCESS = "@voo/FETCH_VOO_LIST_USER_SUCCESS",
  FETCH_VOO_LIST_BY_USER_ID = "@voo/FETCH_VOO_LIST_BY_USER_ID",
  FETCH_VOO_LIST_BY_USER_ID_SUCESS = "@voo/FETCH_VOO_LIST_BY_USER_ID_SUCESS",
  ADD_VOO = "@voo/ADD_VOO",
  ADD_VOO_SUCCESS = "@voo/ADD_VOO_SUCCESS",
  EDIT_VOO = "@voo/EDIT_VOO",
  EDIT_VOO_SUCCESS = "@voo/EDIT_VOO_SUCCESS",
  SET_ORIGIN_DESTINY = "@voo/SET_ORIGIN_DESTINY",
  GET_ROTA_ORIGIN_DESTINY = "@voo/GET_ROTA_ORIGIN_DESTINY",
  GET_ROTA_ORIGIN_DESTINY_SUCCESS = "@voo/GET_ROTA_ORIGIN_DESTINY_SUCCESS",
  UPDATE_CAPACITIES = "@voo/UPDATE_CAPACITIES",
}
