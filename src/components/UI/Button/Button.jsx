import React from 'react'
import styles from './Button.module.css'

const Button = ({text, typeBtn, onclickFunction, disabled}) => {
  
  return (
    <button 
      disabled={disabled} 
      className={typeBtn==='orange' ?  `${styles.button} ${styles.buttonOrange}` : `${styles.button} ${styles.buttonLimpid}`} 
      onClick={onclickFunction}
    >{text}</button>
  )
}

export default Button