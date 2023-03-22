import React from 'react'
import styles from './Button.module.css'

const Button = ({text, type, onclickFunction, disabled}) => {
  
  return (
    <button disabled={disabled} className={type==='orange' ?  `${styles.button} ${styles.buttonOrange}` : `${styles.button} ${styles.buttonLimpid}`} onClick={onclickFunction}>{text}</button>
  )
}

export default Button