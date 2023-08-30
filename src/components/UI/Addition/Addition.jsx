import React from 'react'
import styles from './Addition.module.css'

const Addition = ({onclickFunction}) => {
  return (
    <a className={styles.addition} onClick={onclickFunction}>
      <img 
        src='/images/icons/addition.svg' 
        alt='addition.svg' 
        className={styles.btnBasket}
      />
    </a>
  )
}

export default Addition