import React, { FC } from 'react'
import Header from '../../components/header'
import SideBar from '../../components/sidebar'
import './style.scss'

const MainScreen: FC<{}> = () => {
    return<>
        <Header />
        <div className="horizontal">
            <SideBar />
        </div>
    </>
}

export default MainScreen