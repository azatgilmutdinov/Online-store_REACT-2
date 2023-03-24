import React from 'react'
import Form from '../blocks/FormReg/Form'
import { useForm } from 'react-hook-form'
import './FormReg.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
import { CheckboxForm } from '../elements/checkboxForm/CheckboxForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const FormAuthor = () => {

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    // reset, //для очистки формы
  } = useForm({
    mode: 'onBlur' //проверка на ошибки после фокуса на input
  })

  const navigatePage = useNavigate()

  //Функции получения  данных пользователя
  function getLocalStorage(key) {
    let string = localStorage.getItem(key);
    return JSON.parse(string);
  }

  let userDBAuthor = {};
  let usersArr = getLocalStorage('users');

  const onSubmitDB = (dataBase) => {
    
    userDBAuthor.Login = dataBase.Login;
    userDBAuthor.Password = dataBase.Password;
    // console.log('userDBReg - ', userDBReg);

    usersArr.forEach(item => {
      if (item.Login === userDBAuthor.Login && item.Password === userDBAuthor.Password) {
        alert('Авторизация прошла успешно!');
        navigatePage('/product')

      } else {
        navigatePage('/')

        //показывает ошибку в форме - посередине красным ('логин или пароль неверный')
      }
    })
  }

  return (
    <div className='formAuthor'>
        <form action="" className='form' onSubmit={handleSubmit(onSubmitDB)}>
          <Link to='/registration' className="form__link">Зарегистрироваться</Link>
          <h2 className="form__title">Вход</h2>
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
              // pattern: {
              //   value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              //   message: 'Не валидный'
              // }
            })} 
          />
          <div>
            {errors?.Login && <p className='form__text-error'>{errors?.Login?.message || 'Проверьте заполнение поля'}</p>}
          </div>


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
          <div>
            {errors?.Password && <p className='form__text-error'>{errors?.Password?.message || 'Проверьте заполнение поля'}</p>}
          </div>
          <CheckboxForm/>

          <div className="form__button-wrapper">
            <Button
              text='Авторизоваться'
              typeBtn="orange"
              disabled={!isValid}
            />
          </div>
        </form>




      {/* <Form
        title='Вход'
        linkText='Зарегистрироваться'
        link='/registration'
        buttonText='Войти'
      /> */}
    </div>
  )
}

export default FormAuthor