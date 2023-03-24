import React from 'react'
import CardBasketList from '../../blocks/CardBasketList/CardBasketList'
import BackIcon from '../../UI/BackIcon/BackIcon'
import Button from '../../UI/Button/Button'
import styles from './Basket.module.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearBasket } from '../../../store/reducers/productsReducers'
import { useDispatch } from 'react-redux'

const Basket = () => {
  let productsBasket = useSelector(state => state.productsList.basketProducts)

  const sumPrice = useSelector(state => state.productsList.sumPriceProductsBasket)


  const navigatePage = useNavigate()

  const logOut = () => {
    localStorage.removeItem('authorization')
    navigatePage('/')
  }

  const dispatch = useDispatch();

  const submitBasket = () => {
    alert('Заказ сформирован, ожидайте')
    dispatch(clearBasket())

  }

  return (
    <div className={styles.basketPage}>
      <header className={styles.basketPage__header}>
        <div className={styles['basketPage__header-container']}>
          <div className={styles['basketPage__header-blockIcon']}>
            {/* <Link to={'/'} className={styles["basketPage__header-icon"]}> */}
              <BackIcon/>
            {/* </Link> */}
            <h2 className={styles["basketPage__header-title"]}>Корзина с выбранными товарами</h2>
          </div>
          <Button
            text='Выйти'
            onclickFunction={logOut}
          />
        </div>
      </header>
      <main className={styles.basketPage__main}>
        <div className={styles['basketPage__main-container']}>
          <CardBasketList
            productsBasket={productsBasket}
          />
        </div>
      </main>
      <footer className={styles.basketPage__footer}>
        <div className={styles['basketPage__footer-container']}>
          <div className={styles["basketPage__footer-textSum"]}>
            <span className={styles["basketPage__footer-text"]}>Заказ на сумму:</span>
            <span className={styles["basketPage__footer-sum"]}>{Intl.NumberFormat("ru").format(sumPrice)} ₽</span>
          </div>
          <Button 
            text='Оформить заказ' 
            typeBtn='orange'
            onclickFunction={submitBasket}
          />
        </div>
        
      </footer>
    </div>
  )
}

export default Basket