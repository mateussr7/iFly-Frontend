import axios from "axios";
import { access } from "fs";
import {
  Administrator,
  Airline,
  Credentials,
  Passenger,
  PassengerDTO,
} from "../store/user/types";
import { getWebserviceURL } from "./utils/webserviceURL";

export async function loginService(
  credentials: Credentials
): Promise<Administrator | Airline | Passenger> {
  const { data } = await axios.post(
    getWebserviceURL("/user/login"),
    credentials
  );
  return data;
}

export async function registerService(
  passenger: PassengerDTO
): Promise<Passenger> {
  console.log(passenger);
  const { data } = await axios.post(
    getWebserviceURL("/user/new-passenger"),
    passenger,
    { headers: { "Access-Control-Allow-Origin": "*" } }
  );
  return data;
}