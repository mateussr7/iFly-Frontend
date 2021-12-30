import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import LoginComponent from '../../components/Login'
import NewUserComponent from '../../components/NewUser'
import { getNewUserMode } from '../../store/user/selectors'

const CredentialsScreen: FC<{}> = () => {

    const newUserMode = useSelector(getNewUserMode)

    return <>
        {!newUserMode ? <LoginComponent /> : <NewUserComponent />}
    </>
}

export default CredentialsScreen