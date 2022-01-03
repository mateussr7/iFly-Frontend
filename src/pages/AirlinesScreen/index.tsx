import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AirlineCardSearch from '../../components/AirlineCardSearch/AirlineCardSearch'
import PageHeader from '../../components/PageHeader/PageHeader'
import { getAllAirlines } from '../../store/airlines/actions'
import { fetchAirlines } from '../../store/airlines/selectors'
import { Airline } from '../../store/user/types'
import { Button } from '@material-ui/core'
import './style.scss'
import NewAirlineComponent from '../../components/NewAirlineComponent'
import { cnpj } from '../../utils/stringFormatter'
import EditAirlineComponent from '../../components/EditAirlineComponent'

const AirlineScreen: FC<{}> = () => {

    const airlines: Airline[] = useSelector(fetchAirlines)
    const dispatch = useDispatch()
    const [addMode, setAddMode] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [airlineInView, setAirlineInView] = useState<Airline | null>(null)
    
    useEffect(() => {
        dispatch(getAllAirlines())
    })

    const handleCloseEditMode = () => {
        setEditMode(false)
    }

    const handleCloseAddMode = () => {
        setAddMode(false)
    }

    return <>
        {!addMode && !editMode && <PageHeader title="Visualizar Linhas Aéreas">
            <AirlineCardSearch />
            {airlines.map((airline) => <div className="airline-card flex-row">
                                            <div className="airline-info flex-row">
                                                <div className="airline-cnpj">CNPJ: {cnpj(airline.cnpj)}</div>
                                                <div className="airline-title">COMPANHIA AÉREA: {airline.nome}</div>
                                            </div>
                                            <div className="airline-button">
                                                <Button variant="contained" onClick={() => {
                                                    setAirlineInView(airline)
                                                    setEditMode(true)
                                                }}>Editar</Button>
                                            </div>
                                        </div>)}
            <Button 
                className="button" 
                onClick={() => setAddMode(true)}
            >
                Adicionar Linha Aérea
            </Button>
        </PageHeader>}
        {addMode && !editMode && <NewAirlineComponent onCloseAddMode={handleCloseAddMode} />}
        {editMode && !addMode && <EditAirlineComponent onCloseEditMode={handleCloseEditMode} airline={airlineInView} />}
    </>
}

export default AirlineScreen