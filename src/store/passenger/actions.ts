import { action } from 'typesafe-actions'
import { Passenger } from '../user/types';
import { PassengerActions } from './types'

export const getRanking = () => action(PassengerActions.GET_PASSENGER_RANKING);
export const getRankingSuccess = (passengers: Passenger[]) => action(PassengerActions.GET_PASSENGER_RANKING_SUCCESS, { passengers })
