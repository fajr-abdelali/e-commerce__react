import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchData, fetchProductById } from "../../../service/prodcut.service";
import { RootState } from "../../store";

type ProductState = {
    data: Product[],
    product?: Product;
    loading: boolean,
    error?: any,
    nextPage: number
}

const initialState: ProductState = {
    data: [],
    loading: false,
    error: '',
    nextPage: 1
}

const pageSize: number = 15;

export const retrieveProducts = createAsyncThunk(
    "retrieveProducts",
    async (_, { getState }) => {
        const state = getState() as RootState;
        const { nextPage } = state.product;
        return await fetchData(nextPage, pageSize);
    }
);

export const retrieveProductById = createAsyncThunk(
    "retrieveProductById",
    async (productId: number, { getState }) => {
        const state = getState() as RootState;
        const existingProduct = state.product.data.find(p => p.id === productId);
        if (existingProduct) {
            return existingProduct;
        } else {
            return await fetchProductById(productId);
        }
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
                if (Array.isArray(action.payload)) {
                    const newProducts = action.payload.filter(product =>
                        !state.data.some(existingProduct => existingProduct.id === product.id)
                    )
                    state.data = [...state.data, ...newProducts];
                    newProducts.length > 0 && state.nextPage++;
                } else {
                    state.error = "Invalid data format returned from the server.";
                }
            })
            .addCase(retrieveProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message

            })
            .addCase(retrieveProductById.pending, state => { state.loading = true })
            .addCase(retrieveProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(retrieveProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }

})


export default ProductSlice.reducer;