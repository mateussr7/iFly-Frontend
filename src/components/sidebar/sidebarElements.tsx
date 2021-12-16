import FlightIcon from '@material-ui/icons/Flight'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ClearIcon from '@material-ui/icons/Clear'
import { SidebarType } from '../../store/side-bar/types'

export const sidebarElements: SidebarType[] = [
    {
        label: "Voos",
        admin: false,
        icon: <FlightIcon />,
        ref: "/flights"
    },
    {
        label: "Ranking",
        admin: false,
        icon: <ClearIcon></ClearIcon>,
        ref: "/ranking"
    },
    {
        label: "Perfil",
        admin: false,
        icon: <AccountCircleIcon />,
        ref: "/profile"
    },
    {
        label: "Linhas Aereas",
        admin: true,
        icon: <FlightIcon />,
        ref: "/airlines"
    }
]