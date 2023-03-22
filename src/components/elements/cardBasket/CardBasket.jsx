import React from 'react'
import Remove from '../../UI/Remove/Remove'
import styles from './CardBasket.module.css'
import { removeProductBasket } from '../../../store/reducers/productsReducers'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CardBasket = ({urlImg, price, title, id, index}) => {
  // console.log('urlImg: ', urlImg);
  const dispatch = useDispatch()

  const removeItemProducts = (event) => {
    event.stopPropagation()
    dispatch(removeProductBasket(index))
  }
  const goToCardBody = useNavigate()


  return (
    <div className={styles.cardBasket} onClick={() => goToCardBody(`/product/${id}`)}>
      <div className={styles['cardBasket__img-title']}>
        <img src={urlImg} alt="" className={styles.cardBasket__img} />
        <h2 className={styles.cardBasket__title}>{title}</h2>
      </div>
      
      <div className={styles['cardBasket__price-cross']}>
        <div className={styles.price}>{Intl.NumberFormat("ru").format(price)} ₽</div>
        <Remove
          onclickFunction={removeItemProducts}
        />
      </div>
    </div>
  )
}

export default CardBasket