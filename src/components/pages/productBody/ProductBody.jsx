import React from 'react'
import styles from './ProductBody.module.css'
import BackIcon from '../../UI/BackIcon/BackIcon'
import BasketData from '../../elements/basketData/BasketData.jsx'
import Button from '../../UI/Button/Button'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProductBody = () => {
  const { id } = useParams();
  console.log('id: ', id);
  const {urlImg, title, descr, price, weight, unit } = useSelector(state => state.productsList.productsList.find(item => item.id == id))

  console.log('urlImg', urlImg);
  




  return (
    <div className={styles.productBody}>
      <header className={styles.productBody__header}>
        <div className={styles['productBody__header-container']}>
          <BackIcon/>
          <div className={styles['productBody__header-basketBtn']}>
            <BasketData/>
            <Button 
              text='Выйти'
              type=''
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
            <div className={styles['main-cardBody__descr']}>{descr}</div>
            <div className={styles['main-cardBody__price-weight-btnBasket']}>
              <div className={styles["price-weight-btnBasket"]}>
                <span className={styles['price-weight-btnBasket__price']}>{Intl.NumberFormat("ru").format(price)} ₽ / </span>
                <span className={styles['price-weight-btnBasket__weight']}>{weight} {unit}</span>
              </div>
              <Button 
                text='В корзину'
                type='orange'
              />
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

export default ProductBody