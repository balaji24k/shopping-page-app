import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
  name : "cartShow",
  initialState : {
    isCartVisible:false,
    notification : null,
    items : [],
    totalQuantity : 0,
    totalPrice :0,
    changed: false,
  },
  reducers : {
    toggle(state) {
        state.isCartVisible = !state.isCartVisible
    },

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },

    addItemToCart(state, action) {
        const newItem = action.payload;
        const existingItem = state.items.find((item) => item.id === newItem.id);
        state.totalQuantity++;
        state.changed = true;

        if (!existingItem) {
          state.items.push({  
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            title:newItem.title
          });
        }else{
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice + newItem.price;
  
        }
    },

    removeItemFromCart(state,action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      
      if (existingItem.quantity ===1 ) {
        state.items = state.items.filter((item) => item.id !== id)
      }
      else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice-existingItem.price;
      }
    },

  }
});


const store = configureStore({
  reducer : cartSlice.reducer
});

export const cartActions = cartSlice.actions;

export default store;