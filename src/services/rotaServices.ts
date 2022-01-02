import axios from "axios";
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
