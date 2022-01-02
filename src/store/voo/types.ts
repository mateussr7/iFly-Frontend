
export interface Voo {
  id: number;
  capacidade: number;
  horario: Date;
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
  voo: Voo | undefined;
}

export enum VooActions {
  FETCH_VOO_LIST = "@voo/FETCH_VOO_LIST",
  FETCH_VOO_LIST_SUCCESS = "@voo/FETCH_VOO_LIST_SUCCESS",
  ADD_VOO = "@voo/ADD_VOO",
  ADD_VOO_SUCCESS = "@voo/ADD_VOO_SUCCESS",
  EDIT_VOO = "@voo/EDIT_VOO",
  EDIT_VOO_SUCCESS = "@voo/EDIT_VOO_SUCCESS",
}
