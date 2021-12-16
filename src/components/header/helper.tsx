import { IconButton } from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"

export const getIconButton = (sidebar: boolean) => {
    if(sidebar) return (<IconButton><ClearIcon /></IconButton>)
}