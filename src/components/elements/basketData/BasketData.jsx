import React from 'react'
import styles from './BasketData.module.css'
import { Link } from 'react-router-dom'
import BasketIcon from '../../UI/BasketIcon/BasketIcon'
import { useSelector } from 'react-redux'

const BasketData = () => {
  const countProducts = useSelector(state => state.productsList.countProductsBasket)
  const sumPrice = useSelector(state => state.productsList.sumPriceProductsBasket)


  /*функция для склонения окончания слов*/
  function declination(number, txt) {
    let cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }
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