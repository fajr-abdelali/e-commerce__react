// src/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoritesState = {
    data: Product[],
    loading: boolean,
    error?: any,
    nextPage: number
}

const initialState: FavoritesState = {
    data: [],
    loading: false,
    error: '',
    nextPage: 1
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFav(state, action: PayloadAction<Product>) {
            const { id } = action.payload;
            const existingItem = state.data.find(data => data.id === id);
            if (!existingItem) {
                state.data.push(action.payload);
            }
        },
        removeFromFav(state, action: PayloadAction<number>) {
            const idToRemove = action.payload;
            state.data = state.data.filter(item => item.id !== idToRemove);
        }
    },
});

export const { addToFav, removeFromFav } = favoritesSlice.actions;

export default favoritesSlice.reducer;
