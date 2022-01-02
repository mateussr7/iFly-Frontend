import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AirlineCard from '../../components/AirlineCard/AirlineCard'
import AirlineCardSearch from '../../components/AirlineCardSearch/AirlineCardSearch'
import PageHeader from '../../components/PageHeader/PageHeader'
import { getAllAirlines } from '../../store/airlines/actions'
import { fetchAirlines } from '../../store/airlines/selectors'
import { Airline } from '../../store/user/types'

const AirlineScreen: FC<{}> = () => {

    const airlines: Airline[] = useSelector(fetchAirlines)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllAirlines())
    })

    return <PageHeader title="Visualizar Linhas Aéreas">
        <AirlineCardSearch />
        {airlines.map((airline) => (<AirlineCard airline={airline} />))}
    </PageHeader>
}

export default AirlineScreen