import { ApplicationState } from "../store";

export const fetchAirlines = ({ airlineReducer }: ApplicationState) => 
    airlineReducer.airlines
export const getAirlineInView = ({ airlineReducer }: ApplicationState) =>
    airlineReducer.airline