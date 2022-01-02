import { action } from 'typesafe-actions'
import { Airline, AirlineDTO } from '../user/types';
import { AirlinesActions } from './types'

export const getAllAirlines = () => action(AirlinesActions.GET_ALL_AIRLINES);
export const getAllAirlinesSuccess = (airlines: Airline[]) => action(AirlinesActions.GET_ALL_AIRLINES_SUCCESS, { airlines })
export const updateAirline = (airline: AirlineDTO) => action(AirlinesActions.UPDATE_AIRLINE, { airline })
export const updateAirlineSuccess = (airline: Airline) => action(AirlinesActions.UPDATE_AIRLINE_SUCCESS, { airline })
export const insertAirline = (airline: AirlineDTO) => action(AirlinesActions.INSERT_AIRLINE, { airline })
export const insertAirlineSuccess = (airline: Airline) => action(AirlinesActions.INSERT_AIRLINE_SUCCESS, { airline }) 