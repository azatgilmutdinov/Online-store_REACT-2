import React from 'react'
import styles from './BasketIcon.module.css'


const BasketIcon = () => {
  return (
    <button className={styles["basketIcon"]}>
      <img src="/images/icons/supermarket_1.svg" alt="icon_supermarket" />
    </button>
  )
}

export default BasketIcon