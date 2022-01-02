import { Reducer } from "redux";
import { VooState, VooActions, VooSearchDTO } from "./types";

const INITIAL_STATE: VooState = {
  listVoo: [],
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
    case VooActions.ADD_VOO_SUCCESS: {
      return { ...state, voo: action.payload };
    }
    case VooActions.EDIT_VOO_SUCCESS: {
      return { ...state, voo: action.payload };
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
    default:
      return state;
  }
};
export default vooReducer;
