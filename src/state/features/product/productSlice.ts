import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchData } from "../../../service/prodcut.service";

type ProductState = {
    products: Product[],
    loading: boolean,
    error?: any
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: '',
}

export const retrieveProducts = createAsyncThunk(
    "tutorials/retrieve",
    async () => {
        return await fetchData();
    }
);

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(retrieveProducts.pending, state => { state.loading = true })
            .addCase(retrieveProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload
            })
            .addCase(retrieveProducts.rejected, (state, action) => {
                state.loading = false;
                state.error= action.error.message

            })
    }

})







// export const reducer = ProductSlice.reducer
export default ProductSlice.reducer