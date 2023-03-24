import React from 'react'
import Form from '../blocks/FormReg/Form'
import { useForm } from 'react-hook-form'
import './FormReg.css'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
import { CheckboxForm } from '../elements/checkboxForm/CheckboxForm'
import { useNavigate } from 'react-router-dom'


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

  //Функции получения и записывания данных пользователя
  function getLocalStorage(key) {
    let string = localStorage.getItem(key);
    return JSON.parse(string);
  }

  function writeLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  let userDBReg = {};
  let usersArr = getLocalStorage('users');

  const onSubmitDB = (dataBase) => {
    // alert(JSON.stringify(dataBase))
    
    userDBReg.Login = dataBase.Login;
    userDBReg.Password = dataBase.Password;
    // console.log('userDBReg - ', userDBReg);


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
            text='Зарегистрироваться'
            typeBtn="orange"
            disabled={!isValid}
          />
        </div>
      </form>




      {/* <Form
        title='Регистрация'
        linkText='Авторизоваться'
        link='/'
        buttonText='Зарегистрироваться'
        /> */}
    </div>
  )
}

export default FormReg