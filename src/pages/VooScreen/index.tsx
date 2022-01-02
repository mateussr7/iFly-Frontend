import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditFlightCard from "../../components/EditFlightCard/EditFlightCard";
import FlightCard from "../../components/FlightCard/FlightCard";
import FlightCardSearch from "../../components/FlightCardSearch/FlightCardSearch";
import PageHeader from "../../components/PageHeader/PageHeader";
import { fetchAeroportoList } from "../../store/airports/actions";
import { getAeroportos } from "../../store/airports/selectors";
import { getVooList } from "../../store/voo/selectors";
import { Voo } from "../../store/voo/types";

const VooScreen = () => {
  const dispatch = useDispatch();
  const aeroportos = useSelector(getAeroportos);
  const vooList = useSelector(getVooList);
  const [edit, setEdit] = useState<Boolean>(false);
  const [add, setAdd] = useState<Boolean>(false);
  const [voo, setVoo] = useState<Voo>();

  useEffect(() => {
    dispatch(fetchAeroportoList());
  }, []);

  const setVooToEdit = (newVoo: Voo) => {
    setVoo(newVoo);
    setEdit(true);
    console.log(newVoo);
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
                  onClickFunction={setVooToEdit}
                />
              ))}
            </>
          }
        />
      )}
      {/*edit && !add && (
        <PageHeader
          title="Editar Voo"
          children={<EditFlightCard voo={voo!} />}
        />
      )*/}
    </>
  );
};

export default VooScreen;
