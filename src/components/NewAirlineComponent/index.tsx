import { Button, TextField } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../PageHeader/PageHeader'
import { insertAirline } from '../../store/airlines/actions'
import { getLoggedUser } from '../../store/user/selectors'
import './style.scss'

interface NewAirlineComponentProps {
    onCloseAddMode: () => void
}

const NewAirlineComponent: FC<NewAirlineComponentProps> = ({ onCloseAddMode }) => {

    const dispatch = useDispatch()
    const user = useSelector(getLoggedUser)

    const [name, setName] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    const handleNameChange = (value: string) => {
        setName(value)
    }

    const handleCnpjChange = (value: string) => {
        setCnpj(value)
    }
    const handleLoginChange = (value: string) => {
        setLogin(value)
    }
    const handleSenhaChange = (value: string) => {
        setSenha(value)
    }


    const insertNewAirline = () => {
        dispatch(insertAirline({
            nome: name,
            cnpj: cnpj,
            login: login,
            senha: senha,
            idAdministrador: user?.user.id as number
        }));
        onCloseAddMode()
    }

    return <PageHeader title="Adicionar Linha Aérea">
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
                    onChange={(e) => {
                        handleCnpjChange(e.target.value as string)
                    }}
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
                        onClick={insertNewAirline}
                    >
                        Salvar Linha Aérea
                    </Button>
                    <Button
                        onClick={onCloseAddMode}
                    >
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    </PageHeader>
}

export default NewAirlineComponent