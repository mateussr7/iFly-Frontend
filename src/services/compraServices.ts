import axios from "axios";
import { Compra } from "../store/compra/types";
import { getWebserviceURL } from "./utils/webserviceURL";

export async function getComprasByUser(idUser: number): Promise<Compra[]> {
    const { data } = await axios.get(getWebserviceURL("/purchases"), {
      params: {
        idUser
      },
    });
    return data;
  }

  export async function cancelCompra(compra: Compra): Promise<Compra> {
    const { data } = await axios.post(getWebserviceURL("/purchases/delete"), compra);
    return data;
  }

  export async function insertCompra(compra: Compra): Promise<Compra> {
    const { data } = await axios.post(getWebserviceURL("/purchases/new"), compra);
    return data;
  }