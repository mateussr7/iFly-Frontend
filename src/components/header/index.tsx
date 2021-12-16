import React from 'react'
import { IconButton } from '@material-ui/core'
import UserElement from '../userElement'
import MenuIcon from '@material-ui/icons/Menu'
import ClearIcon from '@material-ui/icons/Clear'
import { getSidebar } from '../../store/side-bar/selectors'
import './header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { openSidebar, closeSidebar } from '../../store/side-bar/actions'

const Header = () => {

    const sidebar = useSelector(getSidebar)
    const dispatch = useDispatch()

    const handleCloseSidebar = () => {
        dispatch(closeSidebar())
    }
    
    const handleOpenSidebar = () => {
        dispatch(openSidebar())
    }

    const getIconButton = () => {
        if(sidebar) return (<IconButton onClick={handleCloseSidebar}><ClearIcon /></IconButton>)
        else return (<IconButton onClick={handleOpenSidebar}><MenuIcon /></IconButton>)
    }

    const button = getIconButton()

    return(
        <div className="header">
            {button}
            <UserElement userName="Teste"/>
        </div>
    )

}


export default Header