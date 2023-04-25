import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name : "cartShow",
    initialState : {isCartVisible:false},
    reducers : {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible
        }
    }
});


const store = configureStore({
    reducer : cartSlice.reducer
});

export const cartActions = cartSlice.actions;

export default store;