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

// export const strapiAPI = ky.create({
//   prefixUrl: "http://localhost:1337/api"
// })

// export const getUserInfo = (token) => {
//   return strapiAPI.get('users/me?populate=role', {
//     headers: { Authorization: `Bearer ${token}` }
//   }).json()
// }

// export const loginUser = (data) => {
//   return strapiAPI.post('auth/local', { json: data }).json()
// }

// export const RegUser = (data) => {
//   return strapiAPI.post('auth/local/register', { json: data }).json()
// }

export const getData = ()=>{
  return fetch('https://644d1fcfcfdddac9709d8cdc.mockapi.io/api/items/items')
    .then(res => {
      if (!res) throw new Error('error')
      return res.json()
    })
}

export const changeData = (id, data) => {
  return fetch(`https://644d1fcfcfdddac9709d8cdc.mockapi.io/api/items/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export const postData = (data) => {
  return fetch(`https://644d1fcfcfdddac9709d8cdc.mockapi.io/api/items/items`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export const deleteData = (id) => {
  return fetch(`https://644d1fcfcfdddac9709d8cdc.mockapi.io/api/items/items/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
