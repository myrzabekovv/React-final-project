import { createSlice } from '@reduxjs/toolkit'
// import createApi from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: [],
    count: 0,
    trush: [],
  },
  reducers: {
    addBasket: (state, action) => {
      state.basket.push(action.payload);
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


export const {addBasket,removeTask} = basketSlice.actions
