import React from 'react'
import styles from './ProductBody.module.css'
import BackIcon from '../../UI/BackIcon/BackIcon'

const ProductBody = () => {
  return (
    <div className={styles.productBody}>
      <header className={styles.productBody__header}>
        <div className={styles['productBody__header-container']}>
          <BackIcon/>
        </div>

      </header>
      <main>

      </main>

    </div>
  )
}

export default ProductBody