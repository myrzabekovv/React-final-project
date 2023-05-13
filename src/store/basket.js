import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    count: 0,
    trush: [],
  },
  reducers: {
    addBasket: (state, action) => {
      const existingItem = state.basket.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Если элемент уже существует в корзине, увеличиваем его счетчик
        existingItem.count += 1;
      } else {
        // Если элемент не существует, добавляем его в корзину
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    countAdd: (state) => {
      state.count++;
    },
    removeTask: (state, action) => {
      const index = state.basket.findIndex((item) => {
        return item.id === action.payload;
      });
      const [removed] = state.basket.splice(index, 1);
      state.trush.push(removed);
      state.count--;
    },
  }
})


export const {addBasket,removeTask,countAdd} = basketSlice.actions
