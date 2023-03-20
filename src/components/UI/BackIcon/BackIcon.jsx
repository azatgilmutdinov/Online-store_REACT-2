import React from 'react'
import styles from './BackIcon.module.css'

const BackIcon = () => {
  return (
    <button className={styles.backIcon}>
      <img src="/images/icons/arrow.svg" alt="" />
    </button>
  )
}

export default BackIcon