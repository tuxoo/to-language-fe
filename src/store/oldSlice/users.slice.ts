import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TokenContainer} from "../../model/model";
import {ACCESS_TOKEN} from "../../model/const";

// export interface UsersState {
//     accessToken: string;
// }
//
// const initialState: UsersState = {
//     accessToken: ""
// }
//
// export const usersSlice = createSlice({
//     name: "users",
//     initialState,
//     reducers: {
//         authenticateUser: (state, action: PayloadAction<TokenContainer>) => {
//             localStorage.setItem(ACCESS_TOKEN, JSON.stringify(action.payload.accessToken) // TODO: is required save refresh token to cookie
//             );
//             state.accessToken = action.payload.accessToken;
//         },
//         logoutUser: (state) => {
//             localStorage.clear();
//             state.accessToken = "";
//         }
//     },
// });
//
// export const usersActions = usersSlice.actions;
// export const usersReducer = usersSlice.reducer;