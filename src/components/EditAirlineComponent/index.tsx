import { Button, TextField } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../PageHeader/PageHeader'
import { getLoggedUser } from '../../store/user/selectors'
import { Airline } from '../../store/user/types'
import { updateAirline } from '../../store/airlines/actions'
import "./style.scss"

interface EditAirlineComponentProps {
    airline: Airline | null
    onCloseEditMode: () => void
}

const EditAirlineComponent: FC<EditAirlineComponentProps> = ({ airline, onCloseEditMode }) => {

    const dispatch = useDispatch()
    const user = useSelector(getLoggedUser)

    const [name, setName] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    useEffect(() => {
        setName(airline?.nome as string)
        setCnpj(airline?.cnpj as string)
        setLogin(airline?.login as string)
        setSenha(airline?.senha as string)
    }, [airline])

    const handleNameChange = (value: string) => {
        setName(value)
    }
    const handleLoginChange = (value: string) => {
        setLogin(value)
    }
    const handleSenhaChange = (value: string) => {
        setSenha(value)
    }


    const handleUpdateAirline = () => {
        dispatch(updateAirline({
            id: airline?.id,
            nome: name,
            cnpj: cnpj,
            login: login,
            senha: senha,
            idAdministrador: user?.user.id as number
        }));
        onCloseEditMode()
    }


    return <PageHeader title="Editar Linha Aérea">
        <div className="main">
            <div className="main-line">
                <TextField 
                    label="Nome da linha aerea"
                    variant="outlined"
                    value={name}
                    size="medium"
                    onChange={(e) => {
                        handleNameChange(e.target.value as string)
                    }}
                />
                <TextField 
                    label="Cnpj"
                    variant="outlined"
                    value={cnpj}
                    disabled
                />
                <TextField 
                    label="Login"
                    variant="outlined"
                    value={login}
                    type="text"
                    onChange={(e) => {
                        handleLoginChange(e.target.value as string)
                    }}
                />
            </div>
            <div className="main-line">
                <TextField 
                    label="Senha"
                    type="password"
                    variant="outlined"
                    value={senha}
                    onChange={(e) => {
                        handleSenhaChange(e.target.value as string)
                    }}
                />
                <div className="div-button">
                    <Button
                        onClick={handleUpdateAirline}
                    >
                        Salvar Linha Aérea
                    </Button>
                    <Button
                        onClick={onCloseEditMode}
                    >
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    </PageHeader>
}

export default EditAirlineComponent