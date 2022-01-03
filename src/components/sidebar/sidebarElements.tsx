import FlightIcon from "@material-ui/icons/Flight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import CloseIcon from "@material-ui/icons/Close";
import { SidebarType } from "../../store/side-bar/types";
import { useSelector } from "react-redux";
import { getLoggedUser } from "../../store/user/selectors";
const SidebarElementsComponent = () => {
  const loggedUser = useSelector(getLoggedUser);
  const sidebarElements: SidebarType[] = [
    {
      label: "Voos",
      admin: false,
      icon: <FlightIcon />,
      ref: "/flights",
      isVisible: loggedUser ? loggedUser.type !== "admin" : false,
    },
    {
      label: "Ranking",
      admin: false,
      icon: <EmojiEventsIcon></EmojiEventsIcon>,
      ref: "/ranking",
      isVisible: true,
    },
    {
      label: "Perfil",
      admin: false,
      icon: <AccountCircleIcon />,
      ref: "/profile",
      isVisible: loggedUser ? loggedUser.type === "passageiro" : false,
    },
    {
      label: "Linhas Aereas",
      admin: true,
      icon: <FlightIcon />,
      ref: "/airlines",
      isVisible: loggedUser ? loggedUser.type === "admin" : false,
    },
    {
      label: "Sair",
      admin: true,
      icon: <CloseIcon />,
      ref: "/logout",
      isVisible: true,
    },
  ];
  return sidebarElements;
};

export default SidebarElementsComponent;
