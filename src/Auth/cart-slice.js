import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        gamesList: [],
        quantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            console.log('added')
        },
        removeFromCart(){console.log('removed')},
    }
})

export const CartActions = cartSlice.actions;
export default cartSlice;