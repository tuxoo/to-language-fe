import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {SignInDto, SignUpDto, TokenContainer} from "../../model/model";

export const usersApi = createApi({
    reducerPath: "users/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/v1",
    }),
    endpoints: builder => ({
        signUpUser: builder.mutation<TokenContainer, SignUpDto>({
            query: (body: {
                firstName: string,
                lastName: string,
                email: string,
                password: string
            }) => ({
                url: "/users/sign-up",
                method: "post",
                body,
            }),
        }),
        signInUser: builder.mutation<TokenContainer, SignInDto>({
            query: (body: {
                email: string,
                password: string
            }) => ({
                url: "/users/sign-in",
                method: "post",
                body,
            }),
        }),
    }),
});

export const {useSignUpUserMutation, useSignInUserMutation} = usersApi;
