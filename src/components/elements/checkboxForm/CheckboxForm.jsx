import React from 'react'
import './CheckboxForm.css'

export const CheckboxForm = () => {
  return (    
    <label  className="form__checkbox form-checkbox">
      <input type="checkbox" className="form-checkbox__real"></input>
      <span className="form-checkbox__custom"></span>
      <p className="form-checkbox__text">Я согласен получать обновления на почту</p>
  </label>
  )
}
