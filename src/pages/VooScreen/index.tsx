import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FlightCardSearch from "../../components/FlightCardSearch/FlightCardSearch";
import PageHeader from "../../components/PageHeader/PageHeader";
import { fetchAeroportoList } from "../../store/airports/actions";
import { getAeroportos } from "../../store/airports/selectors";

const VooScreen = () => {
  const dispatch = useDispatch();
  const aeroportos = useSelector(getAeroportos);
  useEffect(() => {
    dispatch(fetchAeroportoList());
  }, []);

  useEffect(() => {
    console.log(aeroportos);
  }, [aeroportos]);

  const content = () => {
    return <>Fligh</>;
  };
  return (
    <PageHeader
      title="Comprar Voo"
      children={<FlightCardSearch aeroportos={aeroportos} />}
    />
  );
};

export default VooScreen;
