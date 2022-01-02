import { ApplicationState } from "../store";

export const getVooList = ({ vooReducer }: ApplicationState) =>
  vooReducer.listVoo;

export const getVoo = ({ vooReducer }: ApplicationState) => vooReducer.voo;
