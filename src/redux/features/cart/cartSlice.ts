import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from '../../../types/types';

interface CartItem {
  _id: ObjectId; // Use ObjectId type for _id
  name: string;
  price: number;
  stock: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.stock += action.payload.stock; // Increase stock if item already exists
      } else {
        state.items.push(action.payload); // Add new item if it doesn't exist
      }
    },
    removeItem: (state, action: PayloadAction<ObjectId>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    updateStock: (state, action: PayloadAction<{ id: ObjectId; stock: number }>) => {
      const item = state.items.find(item => item._id === action.payload.id);
      if (item) {
        item.stock = action.payload.stock; // Update stock
      }
    },
  },
});

// Export actions and reducer
export const { addToCart, removeItem, updateStock } = cartSlice.actions;
export default cartSlice.reducer;
