import React from 'react'
import { useForm } from 'react-hook-form'
import './FormReg.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
import { CheckboxForm } from '../elements/checkboxForm/CheckboxForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getLocalStorage, writeLocalStorage } from '../../functions/functions'

const FormAuthor = () => {

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
  } = useForm({
    mode: 'onBlur' //проверка на ошибки после фокуса на input
  })

  const navigatePage = useNavigate()

  let userDBAuthor = {};
  let usersArr = getLocalStorage('users');

  const [errorText, setErrorText] = useState(false)

  const onSubmitDB = (dataBase) => {

    userDBAuthor.Login = dataBase.Login;
    userDBAuthor.Password = dataBase.Password;

    usersArr.forEach(item => {
      if (item.Login !== userDBAuthor.Login && item.Password !== userDBAuthor.Password) {
        setErrorText(true)
        return
      } else if (item.Login === userDBAuthor.Login && item.Password === userDBAuthor.Password) {
        alert('Авторизация прошла успешно!')
        writeLocalStorage('authorization', 'true');
        navigatePage('/product')
      }
    })
  }

  return (
    <div className='formAuthor'>
      <form action="" className='form' onSubmit={handleSubmit(onSubmitDB)}>
        <Link to='/registration' className="form__link">Зарегистрироваться</Link>
        <h2 className="form__title">Вход</h2>
        <div className="form__input-wrapper">
          <input
            className='form__input'
            type="text"
            placeholder='Логин'
            {...register('Login', {
              required: 'Поле не должно быть пустым',
              minLength: {
                value: 4,
                message: 'Логин должен содержать не менее 4-х символов'
              },
            })}
          />
          {/* <div> */}
            {errors?.Login && <p className='form__text-error'>{errors?.Login?.message || 'Проверьте заполнение поля'}</p>}
          {/* </div> */}
        </div>

        <div className="form__input-wrapper">
          <input
            className='form__input'
            type="password"
            placeholder='Пароль'
            {...register('Password', {
              required: 'Поле не должно быть пустым',
              minLength: {
                value: 4,
                message: 'Пароль должен содержать не менее 4-х символов'
              }
            })}
          />
          {/* <div> */}
            {errors?.Password && <p className='form__text-error'>{errors?.Password?.message || 'Проверьте заполнение поля'}</p>}
          {/* </div> */}
        </div>
        <CheckboxForm />

        {errorText ? <p className='form__text-error-center'>Логин или пароль не верный</p> : ''}


        <div className="form__button-wrapper">
          <Button
            text='Авторизоваться'
            typeBtn="orange"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  )
}

export default FormAuthor