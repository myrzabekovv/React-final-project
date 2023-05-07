import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import ky from "ky";

export const restoApi = createApi({
  reducerPath: "restorauntsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://644d1fcfcfdddac9709d8cdc.mockapi.io/api/items/",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "items",
    }),
  }),
});

export const { useGetDataQuery } = restoApi

export const strapiAPI = ky.create({
  prefixUrl: "http://localhost:1337/api"
})

export const getUserInfo = (token) => {
  return strapiAPI.get('users/me?populate=role', {
    headers: { Authorization: `Bearer ${token}` }
  }).json()
}

export const loginUser = (data) => {
  return strapiAPI.post('auth/local', { json: data }).json()
}

export const RegUser = (data) => {
  return strapiAPI.post('auth/local/register', { json: data }).json()
}

export const getData = ()=>{
  return strapiAPI.get('items?populate=*').json()
}