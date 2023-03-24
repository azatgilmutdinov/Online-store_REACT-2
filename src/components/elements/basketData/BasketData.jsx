import React from 'react'
import styles from './BasketData.module.css'
import { Link } from 'react-router-dom'
import BasketIcon from '../../UI/BasketIcon/BasketIcon'
import { useSelector } from 'react-redux'
import { declination } from '../../../functions/functions'

const BasketData = () => {
  const countProducts = useSelector(state => state.productsList.countProductsBasket)
  const sumPrice = useSelector(state => state.productsList.sumPriceProductsBasket)

  /*окончания слов*/
  let ending = ['р', 'ра', 'ров']

  return (
    <div className={styles.basketAmount}>
      <div className={styles["basketAmount-descr"]}>
        <div className={styles["basketAmount-descr__piece"]}>
          {countProducts} това{declination(countProducts, ending)}
        </div>
        <div className={styles["basketAmount-descr__sum"]}>
          на сумму {Intl.NumberFormat("ru").format(sumPrice)} ₽
        </div>
      </div>
      <Link to={'/basket'}>
        <BasketIcon/>
      </Link>
  </div>
  )
}

export default BasketData