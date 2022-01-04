import { Passenger } from "../../store/user/types";

export const getRows = (passengers: Passenger[]) => {
    return passengers.map((el, index) => ({
        id: el.id,
        Position: index + 1,
        Name: el.nome,
        Points: el.quilometragemVoada.toFixed(2)
    }));
}