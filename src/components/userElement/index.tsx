import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Typography } from "@material-ui/core";
import "./userElement.scss";
import { useSelector } from "react-redux";
import { getLoggedUser } from "../../store/user/selectors";

interface UserElementProps {
  userName: string;
}

const UserElement = ({ userName }: UserElementProps) => {
  const loggedUser = useSelector(getLoggedUser);
  return (
    <div className="userElement">
      <FiberManualRecordIcon className={loggedUser?.type.trim()} />
      <Typography>{userName}</Typography>
    </div>
  );
};

export default UserElement;
