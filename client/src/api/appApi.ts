import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//define a service user a base URL
export const appApi = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5001/',
    }),

    endpoints: (builder) => ({}),
})
