import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cart.slice";
import favoritesReducer from "./features/favorites/favorites.slice";



export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        favorites: favoritesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;