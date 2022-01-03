import FlightIcon from "@material-ui/icons/Flight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import CloseIcon from "@material-ui/icons/Close";
import { SidebarType } from "../../store/side-bar/types";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../store/user/selectors";
import { logout } from "../../store/user/actions";
const SidebarElementsComponent = () => {
  const loggedUser = useSelector(getLoggedUser);

  const dispatch = useDispatch();

  const sidebarElements: SidebarType[] = [
    {
      label: "Voos",
      admin: false,
      icon: <FlightIcon />,
      ref: "/flights",
      isVisible: loggedUser ? loggedUser.type !== "admin" : false,
      onClick: () => {}
    },
    {
      label: "Ranking",
      admin: false,
      icon: <EmojiEventsIcon></EmojiEventsIcon>,
      ref: "/ranking",
      isVisible: true,
      onClick: () => {}
    },
    {
      label: "Perfil",
      admin: false,
      icon: <AccountCircleIcon />,
      ref: "/profile",
      isVisible: loggedUser ? loggedUser.type === "passageiro" : false,
      onClick: () => {}
    },
    {
      label: "Linhas Aereas",
      admin: true,
      icon: <FlightIcon />,
      ref: "/airlines",
      isVisible: loggedUser ? loggedUser.type === "admin" : false,
      onClick: () => {}
    },
    {
      label: "Sair",
      admin: true,
      icon: <CloseIcon />,
      ref: "/",
      isVisible: true,
      onClick: () => {
        localStorage.clear()
        dispatch(logout())
        window.location.reload()
      }
    },
  ];
  return sidebarElements;
};

export default SidebarElementsComponent;
