import { Reducer } from "redux";
import { AirlineState, AirlinesActions } from "./types";

const INITIAL_STATE: AirlineState = {
  airlines: [],
  airline: null
};

const airlineReducer: Reducer<AirlineState> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case AirlinesActions.GET_ALL_AIRLINES_SUCCESS: {
      const airlines = action.payload.airlines;
      return {
        ...state,
        airlines: airlines,
      };
    }
    case AirlinesActions.INSERT_AIRLINE_SUCCESS: {
      const airline = action.payload.airline;
      return {
        ...state,
        airlines: [...state.airlines, airline],
      };
    }
    case AirlinesActions.UPDATE_AIRLINE_SUCCESS: {
      const airline = action.payload.airline;
      const filteredAirlines = state.airlines.filter(
        (el) => el.id !== airline.id
      );
      return {
        ...state,
        airlines: [...filteredAirlines, airline],
      };
    }
    case AirlinesActions.SET_AIRLINE_IN_VIEW: {
      const airline = action.payload.Airline
      return {
        ...state,
        airline: airline
      }
    }
    default:
      return state;
  }
};

export default airlineReducer;
