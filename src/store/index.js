import { configureStore, createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { value: 0 },
    reducers: {

        add(state, action){
            state.value++
        },

        remove(state, action){
            state.value--
        }

    }
});

export const actions = cartSlice.actions;

const store = configureStore({
    reducer: cartSlice.reducer
});

export default store;