import React from 'react'
import CardBasket from '../../elements/cardBasket/CardBasket'
// import styles from './CardBasketList.module.css'

const CardBasketList = ({productsBasket}) => {
  return (
    <div>
      {productsBasket.map(item => {
        return (
          <CardBasket
            key={item.index}
            id={item.id}
            index={item.index}
            urlImg={item.urlImg}
            title={item.title}
            price={item.price}
          />
        )
      })}
    </div>
  )
}

export default CardBasketList