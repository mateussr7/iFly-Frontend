import { Reducer } from "redux";
import { VooState, VooActions, VooSearchDTO, Voo } from "./types";

const INITIAL_STATE: VooState = {
  listVoo: [],
  listVooUser: [],
  voo: undefined,
  originId: 0,
  destinyId: 0,
  idRota: 0,
};

const vooReducer: Reducer<VooState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VooActions.FETCH_VOO_LIST_SUCCESS: {
      return { ...state, listVoo: [...action.payload] };
    }
    case VooActions.FETCH_VOO_LIST_USER_SUCCESS: {
      return { ...state, listVooUser: [...action.payload] };
    }
    case VooActions.ADD_VOO_SUCCESS: {
      const voos = state.listVoo;
      return { ...state, listVoo: [...voos, action.payload] };
    }
    case VooActions.EDIT_VOO_SUCCESS: {
      const filteredVoos = state.listVoo.filter(
        (v) => v.id !== action.payload.id
      );
      return { ...state, listVoo: [...filteredVoos, action.payload] };
    }
    case VooActions.SET_ORIGIN_DESTINY: {
      const vooSearchDTO: VooSearchDTO = action.payload;
      return {
        ...state,
        originId: vooSearchDTO.origin,
        destinyId: vooSearchDTO.destiny,
      };
    }
    case VooActions.GET_ROTA_ORIGIN_DESTINY_SUCCESS: {
      return {
        ...state,
        idRota: action.payload,
      };
    }
    case VooActions.UPDATE_CAPACITIES: {
      var idVoo: number = action.payload;
      const filteredVoos = state.listVoo.slice();
      var voo = filteredVoos.find((v) => v.id === idVoo);
      if (voo !== undefined) {
        voo.ticketsDisponiveis = voo.ticketsDisponiveis + 1;
      }
      return { ...state, listVoo: [...filteredVoos] };
    }
    default:
      return state;
  }
};
export default vooReducer;
