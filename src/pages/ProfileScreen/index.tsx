import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProfileInfoCard from "../../components/ProfileInfoCard/ProfileInfoCard";
import { getComprasByUser } from "../../store/compra/selectors";
import PurchaseInfo from "../../components/PurchaseInfo/PurchaseInfo";
import { fetchAirlines } from "../../store/airlines/selectors";
import "./ProfileScreen.scss";
import { getVooListUser } from "../../store/voo/selectors";
import { Voo } from "../../store/voo/types";
import { useEffect } from "react";
import { Airline, PassengerDTO } from "../../store/user/types";
import { getAllAirlines } from "../../store/airlines/actions";
import { Compra } from "../../store/compra/types";
import { fetchCompraList } from "../../store/compra/actions";
import { fetchVooList } from "../../store/voo/actions";
import { getLoggedUser } from "../../store/user/selectors";
import { makeStyles, Typography } from "@material-ui/core";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(getLoggedUser);
  const compras: Compra[] = useSelector(getComprasByUser);
  const voos: Voo[] = useSelector(getVooListUser);
  const airlines: Airline[] = useSelector(fetchAirlines);

  useEffect(() => {
    if (user) {
      dispatch(fetchCompraList(user.user.id));
      dispatch(fetchVooList(undefined, user.user.id));
    }
    dispatch(getAllAirlines());
  }, []);

  return (
    <PageHeader
      title="Perfil"
      children={
        <div className="compra-list">
          <ProfileInfoCard user={user?.user as PassengerDTO} />
          <div className="typography-compras">Minhas compras</div>
          {compras.map((compra) => {
            var voo = voos.find((voo) => voo.id === compra.idVoo);
            var airline = airlines.find(
              (airline) => airline.id === voo?.idEmpresaAerea
            );
            if (voo && airline)
              return (
                <PurchaseInfo
                  key={compra.idVoo}
                  airline={airline as Airline}
                  voo={voo as Voo}
                  compra={compra}
                />
              );
          })}
        </div>
      }
    />
  );
};
export default ProfileScreen;
