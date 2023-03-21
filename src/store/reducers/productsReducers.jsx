import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../Products";

const initialState = {
  productsList: products, //здесь подключили наш массив с объектами
  basketProducts: [],
  countProductsBasket: 0,
  sumPriceProductsBasket: 0,
}

//Функция счетчик
function counter (count) {
  return count.length;
}

export const productsSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {

    addProductsBasket: (state, action) => {

      state.basketProducts.push(action.payload)

      state.countProductsBasket = counter(state.basketProducts)
      // state.countProductsBasket = state.basketProducts.length
      state.sumPriceProductsBasket = state.basketProducts.reduce((acc, cur) => {
        return acc + cur.price
      }, 0)
    },
    
    removeProductBasket: (state, action) => {
      state.basketProducts = state.basketProducts.filter((item) => {
        return item.index !== action.payload
      })

      state.countProductsBasket = counter(state.basketProducts)
      // state.countProductsBasket = state.basketProducts.length
      state.sumPriceProductsBasket = state.basketProducts.reduce((acc, cur) => {
        return acc + cur.price
      }, 0)
    }
  }
})

export const {addProductsBasket, removeProductBasket} = productsSlice.actions
export default productsSlice.reducer