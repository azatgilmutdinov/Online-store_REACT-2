import React from 'react'
import Form from '../blocks/FormReg/Form'

const FormReg = () => {
  return (
    <div className='formReg'>
      <Form
        title='Регистрация'
        linkText='Авторизоваться'
        link='/'
        buttonText='Зарегистрироваться'
        />
    </div>
  )
}

export default FormReg