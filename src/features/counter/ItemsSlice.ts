import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import type { RootState } from '../../app/store';
import { Item, ItemData, ItemsState } from '../../app/types';

// Define a type for the slice state

// Define the initial state using that type
const initialState: ItemsState = {
  items: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: 'Apple',
      count: 0,
    },
    {
      id: 'b80b115a-9040-44cd-82da-3640cf42218d',
      name: 'Banana',
      count: 0,
    },
  ],
};

export const itemsSlice = createSlice({
  name: 'items',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Item>) => {
      const { id } = action.payload;
      const selectedItem = state.items.find((item) => item.id === id);
      if (selectedItem && selectedItem.count !== undefined) {
        selectedItem.count = selectedItem.count + 1;
      }
    },
    decrement: (state, action: PayloadAction<Item>) => {
      const { id } = action.payload;
      const selectedItem = state.items.find((item) => item.id === id);
      if (
        selectedItem &&
        selectedItem.count !== undefined &&
        selectedItem.count > 0
      ) {
        selectedItem.count--;
      }
    },
    addItem: (state, action: PayloadAction<ItemData>) => {
      const { name, count } = action.payload;
      state.items.push({ id: uuid(), name: name, count: count });
    },

    updateItem: (state, action: PayloadAction<Item>) => {
      const { id, name } = action.payload;
      const selectedItem = state.items.find((item) => item.id === id);
      if (selectedItem) {
        selectedItem.name = name;
      }
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      const { id } = action.payload;
      const selectedItemIndex = state.items.findIndex((item) => item.id === id);
      if (selectedItemIndex > -1) {
        state.items.splice(selectedItemIndex, 1);
      }
    },
  },
});

export const { increment, decrement, addItem, updateItem, deleteItem } =
  itemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const itemsList = (state: RootState) => state.items;

export default itemsSlice.reducer;
