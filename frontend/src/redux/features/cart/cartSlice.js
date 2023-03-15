import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }else{
    return []
  }
}

const initialState = {
    cartItems: getLocalStorage(),
    amount:0,
    total:0,
    loading: true,
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkApi) => {
    // get cart item from localstorage
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart:(state)=>{ 
            state.cartItems = []
        },

        addToCart: (state, action) => {
            const {id, name, price, amount} = action.payload;
            const existingItemsIndex = state.cartItems.findIndex((item) => item.id === id);

            if(existingItemsIndex >= 0){
                state.cartItems[existingItemsIndex].amount += amount;
            }else{
                state.cartItems.push({id, name, price, amount})
            }
        },
        increaseItem: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)

            cartItem.amount = cartItem + 1;
        },
        decreaseItem: (state, action) => {},
        removeItem: (state, action) => {},
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder) => {}
})

export const {clearCart, addToCart, removeItem, increaseItem, decreaseItem, calculateTotal} = cartSlice.actions

export default cartSlice.reducer