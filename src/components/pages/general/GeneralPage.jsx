import React from 'react'
import Form from '../../blocks/FormReg/Form'
import './GeneralPage.css'



const GeneralPage = () => {
  return (
    <div className="generalPage">
        <Form
        title='Вход'
        link='Зарегистрироваться'
        buttonText='Войти'
        />
    </div>
    
  )
}

export default GeneralPage