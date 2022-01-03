import { ApplicationState } from "../store";

export const getVooList = ({ vooReducer }: ApplicationState) =>
  vooReducer.listVoo;

export const getVoo = ({ vooReducer }: ApplicationState) => vooReducer.voo;

export const getOrigin = ({ vooReducer }: ApplicationState) =>
  vooReducer.originId;

export const getDestiny = ({ vooReducer }: ApplicationState) =>
  vooReducer.destinyId;

export const getIdRota = ({ vooReducer }: ApplicationState) =>
  vooReducer.idRota;

  export const getVooListUser = ({ vooReducer }: ApplicationState) =>
  vooReducer.listVooUser;