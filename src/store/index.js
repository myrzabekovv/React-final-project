import { configureStore } from '@reduxjs/toolkit'
// import { basketSlice, restoApi } from "./reducers/reducers";
import { basketSlice } from './basket'
import { restoApi } from '../api/api'


export const store = configureStore({
  reducer: {
    [restoApi.reducerPath]: restoApi.reducer,
    [basketSlice.name]: basketSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restoApi.middleware),
})