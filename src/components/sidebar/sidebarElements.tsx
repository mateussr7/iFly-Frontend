import FlightIcon from "@material-ui/icons/Flight";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import CloseIcon from "@material-ui/icons/Close";
import { SidebarType } from "../../store/side-bar/types";

export const sidebarElements: SidebarType[] = [
  {
    label: "Voos",
    admin: false,
    icon: <FlightIcon />,
    ref: "/flights",
  },
  {
    label: "Ranking",
    admin: false,
    icon: <EmojiEventsIcon></EmojiEventsIcon>,
    ref: "/ranking",
  },
  {
    label: "Perfil",
    admin: false,
    icon: <AccountCircleIcon />,
    ref: "/profile",
  },
  {
    label: "Linhas Aereas",
    admin: true,
    icon: <FlightIcon />,
    ref: "/airlines",
  },
  {
    label: "Sair",
    admin: true,
    icon: <CloseIcon />,
    ref: "/logout",
  },
];
