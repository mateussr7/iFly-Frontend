export interface Aeroporto {
  id: number;
  nome: string;
  codigo: string;
  geom: [number, number];
}

export interface AeroportoState {
  aeroportos: Aeroporto[];
}

export enum AeroportoActions {
  FETCH_AEROPORTOS_LIST = "@aeroportos/FETCH_AEROPORTOS_LIST",
  FETCH_AEROPORTOS_LIST_SUCCESS = "@aeroportos/FETCH_AEROPORTOS_LIST_SUCCESS",
}
