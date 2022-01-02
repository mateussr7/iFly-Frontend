import axios from "axios";
import { Aeroporto } from "../store/airports/types";
import { getWebserviceURL } from "./utils/webserviceURL";

export async function getAeroportos(): Promise<Aeroporto> {
  const { data } = await axios.get(getWebserviceURL("/airports"));
  return data;
}
