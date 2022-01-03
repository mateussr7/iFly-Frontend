import axios from "axios";
import { OrigDestRota } from "../store/voo/types";
import { getWebserviceURL } from "./utils/webserviceURL";

export async function getIdRota(
  idOrigin: number,
  idDestiny: number
): Promise<number> {
  const { data } = await axios.get(getWebserviceURL("/rota/getId"), {
    params: { idOrigin, idDestiny },
  });
  return data;
}

export async function getOrigDestByRotaId(id: number): Promise<OrigDestRota>{
  const { data } = await axios.get(getWebserviceURL("/rota/getOrigDest"), {
    params: { id },
  });
  return data;
}
