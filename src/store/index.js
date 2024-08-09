import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlide';
export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})