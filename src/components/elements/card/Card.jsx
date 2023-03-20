import React from 'react'
import Addition from '../../UI/Addition/Addition'
import styles from './Card.module.css'
import { addProductsBasket } from '../../../store/reducers/productsReducers'
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid';

const Card = ({urlImg, title, descr, price, weight, unit, id}) => {

  const dispatch = useDispatch();

  const addProduct = () => {
    const item = {
      id: id,
      index: uuid(),
      urlImg: urlImg,
      title: title,
      price: price,
    }

    dispatch(addProductsBasket(item))
  }

  return (
    <div className={styles.card}>
      <img src={urlImg} alt="" className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.descr}>{descr}</div>
      <div className={styles["price-weight-btnBasket"]}>
        <div className={styles["price-weight"]}>
          <span className={styles.price}>{Intl.NumberFormat("ru").format(price)} ₽ / </span>
          <span className={styles.weight}>{weight} {unit}</span>
        </div>
        <Addition
          onclickFunction={addProduct}
        />
      </div>

    </div>
  )
}

export default Card