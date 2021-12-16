import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Typography } from '@material-ui/core'
import './userElement.scss'

interface UserElementProps{
    userName: string
}

const UserElement = ({ userName }: UserElementProps) => {
    return <div className="userElement">
        <AccountCircleIcon />
        <Typography>{userName}</Typography>
    </div>
}

export default UserElement 