import axios from 'axios'
import { Airline, AirlineDTO } from '../store/user/types'
import { getWebserviceURL } from './utils/webserviceURL'

export async function getAllAirlinesService(): Promise<Airline[]>{
    const { data } = await axios.get(getWebserviceURL("/airline/list"))

    return data;
}

export async function updateAirlineService(
    airline: AirlineDTO
): Promise<Airline> {
    const { data } = await axios.put(
        getWebserviceURL("/airline"), 
        airline,
        { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return data;
}

export async function insertAirlineService(
    airline: AirlineDTO
): Promise<Airline> {
    const { data } = await axios.post(
        getWebserviceURL("/airline"),
        airline,
        { headers: { "Access-Control_allow-Origin": "*"} }
    );
    return data;
}