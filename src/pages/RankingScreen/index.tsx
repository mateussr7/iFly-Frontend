import React, { FC, useEffect } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { DataGrid } from '@material-ui/data-grid'
import { columns } from './data-col'
import { getRows } from './getRows'
import { useDispatch, useSelector } from 'react-redux'
import { getRanking } from '../../store/passenger/actions'
import { getRanking as getPassengersRanking } from '../../store/passenger/selectors'
import './style.scss'

const RankingScreen: FC<{}> = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRanking())
    }, [dispatch])

    const passengers = useSelector(getPassengersRanking)
    const rows = getRows(passengers)
    console.log(rows)
    console.log(passengers)
    return <PageHeader title="Ranking">
        <div className="data-grid">
            <DataGrid 
                columns={columns}
                rows={rows}
                rowsPerPageOptions={[5, 10, 20, 50, 100]}
            />
        </div>
    </PageHeader>
}

export default RankingScreen