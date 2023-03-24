import React from 'react'
// import Form from '../blocks/FormReg/Form'
import { useForm } from 'react-hook-form'
import './FormReg.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
import { CheckboxForm } from '../elements/checkboxForm/CheckboxForm'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage, writeLocalStorage } from '../../functions/functions'

const FormReg = () => {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset, //для очистки формы
  } = useForm({
    mode: 'onBlur' //проверка на ошибки после фокуса на input
  })

  const navigatePage = useNavigate()

  let userDBReg = {};
  let usersArr = getLocalStorage('users');

  const onSubmitDB = (dataBase) => {
    userDBReg.Login = dataBase.Login;
    userDBReg.Password = dataBase.Password;

    if (usersArr == null) {
      usersArr = [];
    } else {
      usersArr.forEach(item => {
        if (item.Login == dataBase.Login) {
          alert('такой пользователь уже существует');
          userDBReg.remove()
        }
      })
    }

    usersArr.push(userDBReg);//записываем пользователя в массив (если он есть)
    writeLocalStorage('users', usersArr);

    alert('Регистрация прошла успешно! Теперь войдите в личный кабинет');
    navigatePage('/')

    reset()//для очистки формы
  }

  return (
    <div className='formReg' >
      <form action="" className='form' onSubmit={handleSubmit(onSubmitDB)}>
        <Link to='/' className="form__link">Авторизоваться</Link>
        <h2 className="form__title">Регистрация</h2>
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

        <CheckboxForm/>
        <div className="form__button-wrapper">
          <Button
            text='Зарегистрироваться'
            typeBtn="orange"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  )
}

export default FormReg