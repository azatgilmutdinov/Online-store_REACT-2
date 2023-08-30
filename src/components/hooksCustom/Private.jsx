import React from 'react'
import { Navigate } from 'react-router-dom'
import { getLocalStorage } from '../../functions/functions';

const Private = ({children}) => {
  if (getLocalStorage('authorization')) {
    return children //возвращаем потомков
  } else {
    return <Navigate to={'/'}/>  //иначе перекидываем на главную
  }
}


export default Private