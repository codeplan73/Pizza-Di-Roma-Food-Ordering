import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cartItems: getLocalStorage(),
  amount: 0,
  total: 0,
  loading: true,
}

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkApi) => {
    // get cart item from localstorage
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },

    addToCart: (state, action) => {
      const { id, name, price, imageUrl, amount } = action.payload
      const existingItemsIndex = state.cartItems.findIndex(
        (item) => item.id === id
      )

      if (existingItemsIndex >= 0) {
        state.cartItems[existingItemsIndex].amount += amount
      } else {
        state.cartItems.push({ id, name, price, imageUrl, amount })
      }
    },
    increaseItem: (state, action) => {
      const id = action.payload
      const existingItem = state.cartItems.find((item) => item.id === id)

      existingItem.amount++;
    },
    decreaseItem: (state, { payload }) => {
      const id = payload
      const existingItem = state.cartItems.find((item) => item.id === id)

      if (existingItem.amount === 1) return
    
        existingItem.amount--
    },

    removeItem: (state, action) => {
      const idToRemove = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== idToRemove)
    },

    calculateTotal: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
  extraReducers: (builder) => {},
})

export const {
  clearCart,
  addToCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
} = cartSlice.actions

export default cartSlice.reducer
