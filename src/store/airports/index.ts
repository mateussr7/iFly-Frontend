import { Reducer } from "redux";
import { AeroportoActions, AeroportoState } from "./types";

const INITIAL_STATE: AeroportoState = {
  aeroportos: [],
};

const aeroportoReducer: Reducer<AeroportoState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AeroportoActions.FETCH_AEROPORTOS_LIST_SUCCESS: {
      return { ...state, aeroportos: [...action.payload] };
    }
    default:
      return state;
  }
};
export default aeroportoReducer;
