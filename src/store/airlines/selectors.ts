import { ApplicationState } from "../store";

export const fetchAirlines = ({ airlineReducer }: ApplicationState) => 
    airlineReducer.airlines