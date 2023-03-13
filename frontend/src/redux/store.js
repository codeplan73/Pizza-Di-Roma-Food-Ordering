import { configureStore } from "@reduxjs/toolkit";

// import { mealCoreApi } from "./services/mealCore";
import mealReducer from "./features/meals/mealSlice";
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        // [mealCoreApi.reducerPath]: mealCoreApi.reducer,
        meal: mealReducer,
        cart: cartReducer,
    },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mealCoreApi.middleware),
})