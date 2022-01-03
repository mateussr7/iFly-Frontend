import { Reducer } from "redux";
import { CompraState, CompraActions, Compra } from "./types";

const INITIAL_STATE: CompraState = {
  userCompras: [],
};

const compraReducer: Reducer<CompraState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CompraActions.FETCH_COMPRA_LIST_SUCCESS: {
      return { ...state, userCompras: action.payload };
    }
    case CompraActions.CANCEL_COMPRA_SUCCESS: {
      const removedCompra: Compra = action.payload;
      console.log(
        state.userCompras.filter(
          (compra) =>
            compra.idVoo !== removedCompra.idVoo
        )
      );
      return {
        ...state,
        userCompras: state.userCompras.filter(
          (compra) =>
            compra.idVoo !== removedCompra.idVoo
        ),
      };
    }
    case CompraActions.INSERT_VOO_SUCCESS: {
      return { ...state, userCompras: [...state.userCompras, action.payload] };
    }
    default:
      return state;
  }
};
export default compraReducer;
