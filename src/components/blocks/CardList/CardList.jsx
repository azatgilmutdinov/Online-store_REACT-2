import React from 'react'
import styles from './CardList.module.css'
// import { products } from '../../../Products.js'
import Card from '../../elements/card/Card'


const CardList = ({products}) => {

  return (
    <div className={styles.cardList}>
      {products.map(item => {
        return (
          <Card
            key={item.id}
            id={item.id}
            urlImg={item.urlImg}
            title={item.title}
            descr={item.descr}
            price={item.price}
            weight={item.weight}
            unit={item.unit}
          />
        )
      })}
    </div>
  )
}

export default CardList