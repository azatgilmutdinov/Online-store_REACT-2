import React from 'react'
import styles from './Remove.module.css'

const Remove = ({onclickFunction}) => {
  return (
    <a className={styles.remove} onClick={onclickFunction}>
      <img 
      src='/images/icons/remove.svg' 
      alt='remove.svg' 
      className={styles.btnRemove}
      />
    </a>
  )
}

export default Remove