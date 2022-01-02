import axios from "axios";
import { Voo, VooSearchDTO } from "../store/voo/types";
import { getWebserviceURL } from "./utils/webserviceURL";

export async function getVoos(vooInfo: VooSearchDTO): Promise<Voo> {
  const { data } = await axios.get(getWebserviceURL("/voo"), {
    params: {
      origin: vooInfo.origin,
      destiny: vooInfo.destiny,
      airline: vooInfo.airline,
      date: vooInfo.date,
    },
  });
  return data;
}

export async function updateVoo(voo: Voo): Promise<Voo> {
  const { data } = await axios.put(getWebserviceURL("/voo"), voo);
  return data;
}

export async function insertVoo(voo: Voo): Promise<Voo> {
  const { data } = await axios.post(getWebserviceURL("/voo"), voo);
  return data;
}

export async function getSeatsOccupied(idVoo: number): Promise<number[]> {
  const { data } = await axios.get(getWebserviceURL("/voo"), {
    params: { idVoo },
  });
  return data;
}
