import { ApplicationState } from "../store";

export const getComprasByUser = ({ compraReducer }: ApplicationState) =>
compraReducer.userCompras;