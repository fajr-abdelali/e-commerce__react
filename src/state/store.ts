import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./features/product/productSlice";

export const store = configureStore({
    reducer: {
        product: ProductSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;