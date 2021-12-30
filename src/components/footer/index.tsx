import React, { FC } from 'react'
import './style.scss'
import { AiOutlineCopyright } from 'react-icons/ai'

const Footer: FC<{}> = () => {
    return <div className="footer">
        <AiOutlineCopyright /> iFly 2021
    </div>
}

export default Footer