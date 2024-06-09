import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/api/' }),
    endpoints: (builder) => ({

        demoMutation: builder.mutation({
            query: (data) => ({
                url: 'endpoint/url',
                method: 'POST',
                body: data,
            }),
        }),

        demoQuery: builder.query({
            query: (id) => `endpoint/url/${id}`,
        })


    }),
})

export const {} = api
