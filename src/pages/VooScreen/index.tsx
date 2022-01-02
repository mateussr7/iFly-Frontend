import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlightCard from "../../components/FlightCard/FlightCard";
import FlightCardSearch from "../../components/FlightCardSearch/FlightCardSearch";
import PageHeader from "../../components/PageHeader/PageHeader";
import { fetchAeroportoList } from "../../store/airports/actions";
import { getAeroportos } from "../../store/airports/selectors";
import { getVooList } from "../../store/voo/selectors";

const VooScreen: FC<{}> = () => {
  const dispatch = useDispatch();
  const aeroportos = useSelector(getAeroportos);
  const vooList = useSelector(getVooList);

  useEffect(() => {
    dispatch(fetchAeroportoList());
  }, []);

  return (
    <PageHeader
      title="Comprar Voo"
      children={
        <>
          <FlightCardSearch aeroportos={aeroportos} />
          {vooList.map((voo) => (
            <FlightCard key={voo.id} voo={voo} />
          ))}
        </>
      }
    />
  );
};

export default VooScreen;
