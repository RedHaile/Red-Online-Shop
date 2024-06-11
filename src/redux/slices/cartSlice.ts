import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios, { AxiosError } from 'axios'

import { CartType, OrderProductsType, ProductType, UpdateQuantity } from '../../misc/type'
import { cartEndpoints } from '../../config/config'

const cart = JSON.parse(localStorage.getItem('cart') || '[]')
const token = localStorage.getItem('token')

const url = cartEndpoints.carts

type InitialState = {
  cart: CartType[]
  orders: CartType[]
  loading: boolean
  error: string | null
}

const initialState: InitialState = {
  cart: cart,
  orders: [],
  loading: false,
  error: null
}

export const addOrderByUserId = createAsyncThunk('addOrderByUserId',
  async ({ userId, orders }: { userId: string; orders: OrderProductsType }) => {
    try {
      const response = await axios.post(`${url}/${userId}`, orders, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
     toast.success('Order added successfully!', { position: 'bottom-left' })
     
      return response.data
    } catch (e) {

      /*let errorMessage = 'Failed to add order';
      if (axios.isAxiosError(e) && e.response?.data?.message) {
        errorMessage = e.response.data.message;
      }
      toast.error('', { position: 'bottom-left' });
      return rejectWithValue(errorMessage);
    }
  }
);*/
     const error = e as AxiosError
      toast.error('', { position: 'bottom-left' })
      return error
    }
  })

export const getOrderByUserId = createAsyncThunk('getOrderByUserId', async (userId: string) => {
  try {
    const response = await axios.get(`${url}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (e) {
   /* let errorMessage = 'Failed to fetch order';
    if (axios.isAxiosError(e) && e.response?.data?.message) {
      errorMessage = e.response.data.message;
    }
    return rejectWithValue(errorMessage);
    */
   const error = e as AxiosError
    return error
  }
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingItem = state.cart.find(item => item._id === action.payload._id)
      if (existingItem) {
        existingItem.quantity += 1
        toast.info(`Quantity of "${action.payload.title}" increased`, { position: 'bottom-left' })
      } else {
        const tempProduct = { ...action.payload, quantity: 1 }
        state.cart.push(tempProduct)
        toast.success(`Added "${action.payload.title}" to the cart`, { position: 'bottom-left' })
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item._id !== action.payload)
      toast.error('Removed item from the cart', { position: 'bottom-left' })
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },

    updateQuantity(state, action: PayloadAction<UpdateQuantity>) {
      const { _id, quantity } = action.payload
      const updateItem = state.cart.find(item => item._id === _id)
      if (updateItem) {
        updateItem.quantity += quantity
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },

    clearCart(state) {
      state.cart = []
      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  extraReducers(builder) {
    
    builder.addCase(addOrderByUserId.fulfilled, state => {
      return {
        ...state
      }
    })
    builder.addCase(addOrderByUserId.pending, state => {
      return {
        ...state,
        loading: true
      }
    })
    builder.addCase(addOrderByUserId.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        //error: action.payload as string,
        error: action.error.message ?? 'error'

      }
    })
    builder.addCase(getOrderByUserId.fulfilled, (state, action) => {
      return {
        ...state,
        orders: action.payload,
        loading: false
      }
    })
    builder.addCase(getOrderByUserId.pending, state => {
      return {
        ...state,
        loading: true
      }
    })
    builder.addCase(getOrderByUserId.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        //error: action.payload as string,
        error: action.error.message ?? 'error'
      }
    })
  }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer