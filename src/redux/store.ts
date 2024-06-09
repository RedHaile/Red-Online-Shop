import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import categoryReducer from './slices/categorySlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'

// store all states
const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    users: userReducer
  }
})
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()

export default store