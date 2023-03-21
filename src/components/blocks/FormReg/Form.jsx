import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import './Form.css'

const Form = ({title, linkText, link, buttonText}) => {
  return (
    <form action="#" className="form">
      <Link to={link} className="form__link">{linkText}</Link>
      <h2 className="form__title">{title}</h2>
      <div className="form__wrapperInput form__wrapperInput_email">
        <input type="email" class="form__input form-input form-input_email" placeholder="Логин"></input>

        <p class="form__text-error text-error text-error_email-invalid">Логин должен содержать не менее 4-х символов</p>
        <p class="form__text-error text-error text-error_email-empty">Поле не должно быть пустым</p>
      </div>
      
      <div className="form__wrapperInput form__wrapperInput_password">
        <input type="password" class="form__input form-input form-input_password" placeholder="Пароль"></input>

        <p class="form__text-error text-error text-error_password-invalid">Пароль должен содержать не менее 4-х символов</p>
        <p class="form__text-error text-error text-error_password-empty">Поле не должно быть пустым</p>
      </div>
      

      <label  class="form__checkbox form-checkbox">
        <input type="checkbox" class="form-checkbox__real"></input>
        <span class="form-checkbox__custom"></span>
        <p class="form-checkbox__text">Я согласен получать обновления на почту</p>
      </label>

      <p class="form__text-error text-error text-error_emailPassword-invalid">Логин или пароль неверен</p>

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

{/* <a href="#" class="form-authorization__registration authorization-registration">Зарегистрироваться</a>
      <h2 class="form-authorization__title">Войти</h2>

      <p class="form__name form-authorization__name-email">Email</p>
      <div class="form-authorization__input-wrapper form-authorization__input-wrapper_email">
        <span class="form-authorization__star form-authorization__star-email">*</span>
        <input type="email" class="form__input form-authorization__input-email" placeholder="Введите email">
      </div>
      
      <p class="form__text-error form-authorization__text-error_email-empty">Поле обязательно для заполнения</p>
      <p class="form__text-error form-authorization__text-error_email-invalid">Email невалидный</p>

      <p class="form__name form-authorization__name-password">Пароль</p>
      <div class="form-authorization__input-wrapper form-authorization__input-wrapper_password">
        <span class="form-authorization__star form-authorization__star-password">*</span>
        <input type="password" class="form__input form-authorization__input-password" placeholder="Введите пароль">
      </div>
      
      <p class="form__text-error form-authorization__text-error_password-empty">Поле обязательно для заполнения</p>
      <p class="form__text-error form-authorization__text-error_password-invalid">Email или пароль неверный</p>

      <label  class="form-authorization__input-checkbox authorization-input-checkbox">
        <span class="form-authorization__star form-authorization__star-checkbox">*</span>
        <input type="checkbox" class="authorization-input-checkbox__real">
        <span class="authorization-input-checkbox__custom"></span>
        <p class="authorization-input-checkbox__text">Я согласен с <a href="#">Правилами пользования приложением</a></p>
      </label>
      <p class="form__text-error form-authorization__text-error_checkbox-empty">Поле обязательно для заполнения</p>
      <button type="submit" class="form-authorization__submit-btn">Вход</button> */}
