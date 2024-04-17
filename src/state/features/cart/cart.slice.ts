// src/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchCartItems from './data';

type CartItem = {
    id: number;
    product: Product,
    quantity: number;
}

type CartState = {
    items: CartItem[];
    total: number;
}

const cartItems: CartItem[] = fetchCartItems()

const initialState: CartState = {
    items: cartItems,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;

            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            const idToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== idToRemove);
        },
        incrementQuantity(state, action: PayloadAction<number>) {
            const idToIncrement = action.payload;
            const itemToIncrement = state.items.find(item => item.id === idToIncrement);
            if (itemToIncrement) {
                itemToIncrement.quantity++;
            }
        },
        decrementQuantity(state, action: PayloadAction<number>) {
            const idToDecrement = action.payload;
            const itemToDecrement = state.items.find(item => item.id === idToDecrement);
            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity--;
            }
        },
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
