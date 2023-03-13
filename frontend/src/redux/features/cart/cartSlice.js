import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity:0,
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

        removeItem: (state, action) => {},

        increaseItem: (state, action) => {},

        decreaseItem: (state, action) => {}
    },
    extraReducers: (builder) => {}
})

export const {clearCart, removeItem, increaseItem, decreaseItem} = cartSlice.actions

export default cartSlice.reducer