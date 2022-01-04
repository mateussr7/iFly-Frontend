import { TextField } from "@material-ui/core";
import { PassengerDTO } from "../../store/user/types";
import "./ProfileInfoCard.scss";

interface props {
  user: PassengerDTO;
}

const ProfileInfoCard = ({ user }: props) => {
  return (
    <div className="profile-card profile-box">
      <div className="top-textfields">
        <TextField
          disabled
          className="textfield-profile nome"
          label="Nome"
          defaultValue={user.nome}
          variant="outlined"
        />
        <TextField
          disabled
          className="textfield-profile cpf"
          label="CPF"
          defaultValue={user.cpf}
          variant="outlined"
        />
        <TextField
          disabled
          className="textfield-profile kmvoada"
          label="Quilometragem voada"
          defaultValue={user.quilometragemVoada.toFixed(2)}
          variant="outlined"
        />
      </div>
      <div className="bottom-textfields">
        <TextField
          disabled
          className="textfield-profile email"
          label="Email"
          defaultValue={user.login}
          variant="outlined"
        />
      </div>
    </div>
  );
};
export default ProfileInfoCard;
