import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardList from '../../blocks/CardList/CardList.jsx'
import BasketIcon from '../../UI/BasketIcon/BasketIcon.jsx'
import styles from './Products.module.css'
import { useSelector } from 'react-redux'
import BasketData from '../../elements/basketData/BasketData.jsx'



const Products = () => {
  const products = useSelector(state => state.productsList.productsList)

  return (

  <div className={styles.products}>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Наша продукция</h1>
        <BasketData/>
      </header>
      <CardList
        products={products}
      />
    </div>

      
  </div>
  )
}

export default Products