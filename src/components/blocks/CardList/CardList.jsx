import React from 'react'
import styles from './CardList.module.css'
// import { products } from '../../../Products.js'
import Card from '../../elements/card/Card'
import { Link } from 'react-router-dom'


const CardList = ({products}) => {

  return (
    <div className={styles.cardList}>
      {products.map(item => {
        return (
          // <Link to={`/product/${item.id}`} className={styles.link}>
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
          // </Link>

        )
      })}
    </div>
  )
}

export default CardList