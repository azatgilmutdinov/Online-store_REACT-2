import React from 'react'
import styles from './ProductBody.module.css'
import BackIcon from '../../UI/BackIcon/BackIcon'
import BasketData from '../../elements/basketData/BasketData.jsx'
import Button from '../../UI/Button/Button'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addProductsBasket } from '../../../store/reducers/productsReducers'
import { useNavigate } from 'react-router-dom'
import Private from '../../hooksCustom/Private'


const ProductBody = () => {
  const { id } = useParams();

  const { urlImg, title, body, price, weight, unit } = useSelector(state => state.productsList.productsList.find(item => item.id == id))

  const productsBasket = useSelector(state => state.productsList.basketProducts).filter((item) => item.id == id)

  let countProductsBasket = productsBasket.length;
  const dispatch = useDispatch()
  const addItemProduct = () => {
    const item = {
      id: id,
      urlImg: urlImg,
      title: title,
      price: price,
    }
    dispatch(addProductsBasket(item))
  }

  const navigatePage = useNavigate()

  const logOut = () => {
    localStorage.removeItem('authorization')
    navigatePage('/')
  }

  return (
    <Private>
      <div className={styles.productBody}>
        <header className={styles.productBody__header}>
          <div className={styles['productBody__header-container']}>
            <BackIcon />
            <div className={styles['productBody__header-basketBtn']}>
              <BasketData />
              <Button
                text='Выйти'
                onclickFunction={logOut}
              />
            </div>
          </div>
        </header>

        <main className={styles.productBody__main}>
          <div className={styles['productBody__main-container']}>
            <img
              className={styles['productBody__main-cardImage']}
              src={urlImg}
              alt=""
            />
            <div className={`${styles['productBody__main-cardBody']} ${styles['main-cardBody']}`}>
              <h1 className={styles['main-cardBody__title']}>{title}</h1>
              <div className={styles['main-cardBody__descr']}>{body}</div>
              <div className={styles['main-cardBody__price-weight-btnBasket']}>
                <div className={styles["price-weight-btnBasket"]}>
                  <span className={styles['price-weight-btnBasket__price']}>{Intl.NumberFormat("ru").format(price)} ₽ / </span>
                  <span className={styles['price-weight-btnBasket__weight']}>{weight} {unit}</span>
                </div>
                <Button
                  text={countProductsBasket >= 1 ? 'Добавлено' : 'В корзину'}
                  typeBtn='orange'
                  onclickFunction={addItemProduct}
                  disabled={countProductsBasket < 1 ? false : true}
                />
              </div>

            </div>
          </div>
        </main>

      </div>
    </Private>

  )
}

export default ProductBody