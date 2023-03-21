import React from 'react'
import Form from '../blocks/FormReg/Form'

const FormAuthor = () => {
  return (
    <div className='formAuthor'>
      <Form
        title='Вход'
        linkText='Зарегистрироваться'
        link='/registration'
        buttonText='Войти'
      />
    </div>
  )
}

export default FormAuthor