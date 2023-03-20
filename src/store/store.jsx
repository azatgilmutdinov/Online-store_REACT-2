import { configureStore } from '@reduxjs/toolkit'
import productsReducers from './reducers/productsReducers'

export const store = configureStore({
  reducer: {
    productsList: productsReducers,
  }

})


