import { Button } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddFlightCard from "../../components/AddFlightCard/AddFlightCard";
import EditFlightCard from "../../components/EditFlightCard/EditFlightCard";
import FlightCard from "../../components/FlightCard/FlightCard";
import FlightCardSearch from "../../components/FlightCardSearch/FlightCardSearch";
import PageHeader from "../../components/PageHeader/PageHeader";
import { getAllAirlines } from "../../store/airlines/actions";
import { fetchAeroportoList } from "../../store/airports/actions";
import { getAeroportos } from "../../store/airports/selectors";
import { insertCompra } from "../../store/compra/actions";
import { getLoggedUser } from "../../store/user/selectors";
import { Airline } from "../../store/user/types";
import { getVooList } from "../../store/voo/selectors";
import { Voo } from "../../store/voo/types";
import "./VooScreen.scss";

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

  const setEditFalse = () => {
    setEdit(false);
  };

  const setAddFalse = () => {
    setAdd(false);
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
          title={passageiro ? "Comprar Voos" : "Visualizar Voos"}
          children={
            <>
              <FlightCardSearch
                aeroportos={aeroportos}
                airline={airline && loggedUser ? loggedUser : undefined}
              />
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
              {airline && (
                <div className="addButton">
                  <Button variant="contained" onClick={setAddVoo}>
                    Adicionar Voo
                  </Button>
                </div>
              )}
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
      {!edit && add && (
        <PageHeader
          title="Adicionar Voo"
          children={
            <AddFlightCard
              airline={loggedUser!.user as Airline}
              voltarFunction={setAddFalse}
            />
          }
        />
      )}
    </>
  );
};

export default VooScreen;
