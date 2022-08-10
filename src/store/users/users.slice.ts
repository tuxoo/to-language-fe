import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TokenContainer} from "../../model/model";

const ACCESS_TOKEN = "access_token"

export interface AuthState {
    accessToken: string;
}

const initialState: AuthState = {
    accessToken: ""
}

export const usersSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticateUser: (state, action: PayloadAction<TokenContainer>) => {
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(action.payload.accessToken) // TODO: is required save refresh token to cookie
            );
            state.accessToken = action.payload.accessToken;
        },
        logoutUser: (state) => {
            localStorage.clear();
            state.accessToken = "";
        }
    },
});

export const usersActions = usersSlice.actions
export const usersReducer = usersSlice.reducer