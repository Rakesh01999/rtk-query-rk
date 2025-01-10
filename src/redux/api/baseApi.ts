import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (buider) => ({
        getTasks: buider.query({
            query: () => "/tasks",
        }),
        createTasks: buider.mutation({
            query: (taskData) => ({
                url: "/tasks",
                method: "POST",
                body: taskData,
            }),
        }),
    }),
});

export const { useGetTasksQuery } = baseApi;
