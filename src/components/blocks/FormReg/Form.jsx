import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import './Form.css'

const Form = ({title, linkText, link, buttonText}) => {

  const [valueMess, setValuMess] = useState('')

  const testFunc = (event) => {
    setValuMess(event.target.value)
    console.log('event.target.value', event.target.value);
    // console.log('valueMess', valueMess);
  }
  if (valueMess.length < 5) {

  }

  return (    
    <form action="#" className="form">
      <Link to={link} className="form__link">{linkText}</Link>
      <h2 className="form__title">{title}</h2>
      <div className="form__wrapperInput form__wrapperInput_email">
        <input 
          type="email" 
          className="form__input form-input form-input_email" 
          placeholder="Логин"
          value={valueMess}
          onInput={testFunc}
        ></input>

        <p 
          className="form__text-error text-error text-error_email-invalid"
        >
          Логин должен содержать не менее 4-х символов
        </p>
        <p className="form__text-error text-error text-error_email-empty">Поле не должно быть пустым</p>
      </div>
      
      <div className="form__wrapperInput form__wrapperInput_password">
        <input type="password" className="form__input form-input form-input_password" placeholder="Пароль"></input>

        <p className="form__text-error text-error text-error_password-invalid">Пароль должен содержать не менее 4-х символов</p>
        <p className="form__text-error text-error text-error_password-empty">Поле не должно быть пустым</p>
      </div>
      

      <label  className="form__checkbox form-checkbox">
        <input type="checkbox" className="form-checkbox__real"></input>
        <span className="form-checkbox__custom"></span>
        <p className="form-checkbox__text">Я согласен получать обновления на почту</p>
      </label>

      <p className="form__text-error text-error text-error_emailPassword-invalid">Логин или пароль неверен</p>

      <div className="form__button-wrapper">
        <Button
          text={buttonText}
          type='orange'
        />
      </div>



    </form>
  )
}

export default Form

