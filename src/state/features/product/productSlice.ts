import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchData } from "../../../service/prodcut.service";
import { RootState } from "../../store";

type ProductState = {
    data: Product[],
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

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(retrieveProducts.pending, state => { state.loading = true })
            .addCase(retrieveProducts.fulfilled, (state, action) => {
                state.loading = false;
                if (Array.isArray(action.payload)) {
                    state.data = action.payload
                    state.nextPage++;
                } else {
                    state.error = "Invalid data format returned from the server.";
                }
            })
            .addCase(retrieveProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message

            })
    }

})


export default ProductSlice.reducer;