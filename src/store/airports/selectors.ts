import { ApplicationState } from "../store";

export const getAeroportos = ({ aeroportoReducer }: ApplicationState) =>
  aeroportoReducer.aeroportos;
