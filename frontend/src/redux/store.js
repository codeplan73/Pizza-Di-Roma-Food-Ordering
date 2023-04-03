import { configureStore } from "@reduxjs/toolkit";

// import { mealCoreApi } from "./services/mealCore";
import mealReducer from "./features/meals/mealSlice";
import cartReducer from './features/cart/cartSlice'
import authReducer from './features/auth/authSlice'

export const store = configureStore({
    reducer: {
        // [mealCoreApi.reducerPath]: mealCoreApi.reducer,
        meal: mealReducer,
        cart: cartReducer,
        auth: authReducer,
    },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mealCoreApi.middleware),
})