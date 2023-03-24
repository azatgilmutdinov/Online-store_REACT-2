import React from 'react'
import Private from '../../hooksCustom/Private'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <Private>
      <div className="error__wrapper">
        <h1 className='error__title'>Такой страницы не существует</h1>
      </div>
    </Private>

  )
}

export default ErrorPage