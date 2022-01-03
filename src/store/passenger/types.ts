import { Passenger } from "../user/types";

export enum PassengerActions {
    GET_PASSENGER_RANKING = '@passenger/GET_PASSENGER_RANKING',
    GET_PASSENGER_RANKING_SUCCESS = '@passenger/GET_PASSENGER_RANKING_SUCCESS'
}

export interface PassengerState {
    passengers: Passenger[]
}