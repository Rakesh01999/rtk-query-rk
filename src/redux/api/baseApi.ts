import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (buider) => ({
        getTasks: buider.query({
            query: () => "/tasks",
        }),
        createTasks: buider.mutation({
            query: () => "/tasks",
        }),
    }),
});

export const { useGetTasksQuery } = baseApi;
