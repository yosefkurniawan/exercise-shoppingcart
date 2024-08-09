import {createSlice} from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.find((p) => p.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }else{
                state.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state = state.filter((product) => product.id !== id);
            return state;
        },
        increaseQty: (state, action) => {
            const id = action.payload;
            const product = state.find((p) => p.id === id);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQty: (state, action) => {
            const id = action.payload;
            const product = state.find((p) => p.id === id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },
        clearCart: (state, action) => {
            return initialState;
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;