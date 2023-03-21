import React from 'react'
import styles from './BackIcon.module.css'
import { useNavigate } from 'react-router-dom'

const BackIcon = () => {
  const navigate = useNavigate()
  const backFunc = () => {
    navigate(-1)
  }

  return (
    <button className={styles.backIcon} onClick={backFunc}>
      <img src="/images/icons/arrow.svg" alt="" />
    </button>
  )
}

export default BackIcon