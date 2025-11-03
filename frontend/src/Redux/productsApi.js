// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints

//Get all data
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://react-level5-1.onrender.com/'}),
  endpoints: (builder) => ({
    getproductsByName: builder.query({
      query: (name) => `products`,
    }),
  }),
})
//Get one product
export const oneproductApi = createApi({
  reducerPath: 'oneproductApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-level5-1.onrender.com/' }),
  endpoints: (build) => ({
    getoneProduct: build.query({
      query: (name) => `products/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproductsByNameQuery } = productsApi
export const { useGetoneProductQuery } = oneproductApi