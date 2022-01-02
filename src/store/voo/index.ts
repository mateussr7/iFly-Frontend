import { Reducer } from "redux";
import { VooState, VooActions } from "./types";

const INITIAL_STATE: VooState = {
  listVoo: [],
  voo: undefined,
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
    default:
      return state;
  }
};
export default vooReducer;
