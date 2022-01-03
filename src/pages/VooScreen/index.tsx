import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditFlightCard from "../../components/EditFlightCard/EditFlightCard";
import FlightCard from "../../components/FlightCard/FlightCard";
import FlightCardSearch from "../../components/FlightCardSearch/FlightCardSearch";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getAllAirlines } from "../../store/airlines/actions";
import { fetchAeroportoList } from "../../store/airports/actions";
import { getAeroportos } from "../../store/airports/selectors";
import { insertCompra } from "../../store/compra/actions";
import { getLoggedUser } from "../../store/user/selectors";
import { getVooList } from "../../store/voo/selectors";
import { Voo } from "../../store/voo/types";

const VooScreen = () => {
  const dispatch = useDispatch();
  const aeroportos = useSelector(getAeroportos);
  const loggedUser = useSelector(getLoggedUser);
  const vooList = useSelector(getVooList);
  const [edit, setEdit] = useState<Boolean>(false);
  const [add, setAdd] = useState<Boolean>(false);
  const [voo, setVoo] = useState<Voo>();
  const [passageiro, setPassageiro] = useState<Boolean>(false);
  const [airline, setAirline] = useState<Boolean>(false);

  useEffect(() => {
    if (loggedUser) {
      if (loggedUser.type === "passageiro") setPassageiro(true);
      if (loggedUser.type === "empresa aerea") setAirline(true);
    }
  }, [loggedUser]);

  useEffect(() => {
    dispatch(fetchAeroportoList());
    dispatch(getAllAirlines());
  }, []);

  useEffect(() => {}, [passageiro, airline]);

  const setEditFalse = () => {
    setEdit(false);
  };

  const comprarVoo = (newVoo: Voo) => {
    dispatch(
      insertCompra({
        data: moment(newVoo.horario).format("yyyy-MM-DD HH:mm:ss"),
        idVoo: newVoo.id,
        idPassageiro: loggedUser!.user.id,
        assento: 0,
      })
    );
  };
  const setVooToEdit = (newVoo: Voo) => {
    setVoo(newVoo);
    setEdit(true);
  };

  const setAddVoo = () => {
    setAdd(true);
  };

  return (
    <>
      {!edit && !add && (
        <PageHeader
          title="Comprar Voo"
          children={
            <>
              <FlightCardSearch aeroportos={aeroportos} />
              {vooList.map((voo) => (
                <FlightCard
                  key={voo.id}
                  voo={voo}
                  onClickAirline={setVooToEdit}
                  onClickPassageiro={comprarVoo}
                  isAirline={airline}
                  isPassageiro={passageiro}
                />
              ))}
            </>
          }
        />
      )}
      {edit && !add && (
        <PageHeader
          title="Editar Voo"
          children={<EditFlightCard voo={voo!} voltarFunction={setEditFalse} />}
        />
      )}
    </>
  );
};

export default VooScreen;
