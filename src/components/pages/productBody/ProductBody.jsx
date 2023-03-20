import React from 'react'
import styles from './ProductBody.module.css'
import BackIcon from '../../UI/BackIcon/BackIcon'
import BasketData from '../../elements/basketData/BasketData.jsx'
import Button from '../../UI/Button/Button'

const ProductBody = () => {
  return (
    <div className={styles.productBody}>
      <header className={styles.productBody__header}>
        <div className={styles['productBody__header-container']}>
          <BackIcon/>
          <div className={styles['productBody__header-basketBtn']}>
            <BasketData/>
            <Button 
              text='Выйти'
            />
          </div>

        </div>
      </header>
      <main className={styles.productBody__main}>
        <div className={styles['productBody__main-container']}>
          <img
            className={styles['productBody__main-cardImage']}
            src="/images/card/1.png" 
            alt="" 
          />
          <div className={`${styles['productBody__main-cardBody']} ${styles['main-cardBody']}`}>
            <h1 className={styles['main-cardBody__title']}>Свиные ребрышки на гриле</h1>
            <div className={styles['main-cardBody__descr']}>Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений</div>
            <div className={styles['main-cardBody__price-weight-btnBasket']}>
              <div className={styles["price-weight-btnBasket"]}>
                <span className={styles['price-weight-btnBasket__price']}>{Intl.NumberFormat("ru").format(1820)} ₽ / </span>
                <span className={styles['price-weight-btnBasket__weight']}>{750} {'г.'}</span>
              </div>
              <Button 
              text='В корзину'
              />
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

export default ProductBody