import React from 'react'
import Form from '../../blocks/FormReg/Form'
import './GeneralPage.css'
import { Outlet } from 'react-router-dom'



const GeneralPage = () => {
  return (
    <div className="generalPage">
        <Outlet/>
    </div>
    
  )
}

export default GeneralPage