import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/v1",
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body: {
                firstName: string,
                lastName: string,
                email: string,
                password: string
            }) => {
                return {
                    url: "/users/sign-up",
                    method: "post",
                    body,
                };
            },
        }),
        loginUser: builder.mutation({
            query: (body: { email: string, password: string }) => {
                return {
                    url: "/users/sign-in",
                    method: "post",
                    body,
                };
            },
        }),
    }),
});

export const {useRegisterUserMutation, useLoginUserMutation} = authApi;
