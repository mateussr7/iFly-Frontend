import { Airline } from "../user/types";

export interface AirlineState {
    airlines: Airline[]
}

export enum AirlinesActions {
    GET_ALL_AIRLINES = '@airline/GET_ALL_AIRLINES',
    GET_ALL_AIRLINES_SUCCESS = '@airline/GET_ALL_AIRLINES_SUCCESS',
    UPDATE_AIRLINE = '@airline/UPDATE_AIRLINE',
    UPDATE_AIRLINE_SUCCESS = '@airline/UPDATE_AIRLINE_SUCCESS',
    INSERT_AIRLINE = '@airline/INSERT_AIRLINE',
    INSERT_AIRLINE_SUCCESS = '@airline/INSERT_AIRLINE_SUCCESS'
}