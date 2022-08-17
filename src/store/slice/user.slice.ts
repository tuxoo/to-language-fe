import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authService, SignInRequest, SignUpRequest} from "../../service/user.service";
import {ApiError} from "../../model/error.model";
import {localStorageService} from "../../service/local-storage.service";
import {User} from "../../model/user.model";
import {push} from "connected-react-router";

interface UserSliceState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error?: ApiError;
    user?: User;
}

const initialState: UserSliceState = {
    isAuthenticated: false,
    isLoading: false,
    error: undefined,
    user: undefined,
};

export const SIGN_IN_ACTION = 'users/sign-in'
export const SIGN_UP_ACTION = 'users/sign-up'

const signIn = createAsyncThunk<User, SignInRequest, { rejectValue: ApiError }>(
    SIGN_IN_ACTION,
    async (request: SignInRequest, thunkAPI) => {
        try {
            const response = await authService.signIn(request)
            localStorageService.setAccessToken(response.data.accessToken)
            thunkAPI.dispatch(push('/courses'));
            return response.data.user
        } catch (error: any) {
            const signInError: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkAPI.rejectWithValue(signInError)
        }
    }
);

const signUp = createAsyncThunk<User, SignUpRequest, { rejectValue: ApiError }>(
    SIGN_UP_ACTION,
    async (request: SignUpRequest, thunkAPI) => {
        try {
            const response = await authService.signUp(request)
            localStorageService.setAccessToken(response.data.accessToken)
            thunkAPI.dispatch(push('/courses'));
            return response.data.user
        } catch (error: any) {
            const signInError: ApiError = {message: error.response.data} // TODO: add another fields
            return thunkAPI.rejectWithValue(signInError)
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(signIn.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            state.isAuthenticated = true;
            state.user = payload;
            state.isLoading = true;
        });
        builder.addCase(signIn.rejected, (state, {payload}) => {
            state.isAuthenticated = false;
            state.user = undefined
            state.isLoading = false;
            state.error = payload;
        });
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(signUp.fulfilled, (state, {payload}) => {
            state.isAuthenticated = true;
            state.user = payload;
            state.isLoading = false;
        });
        builder.addCase(signUp.rejected, (state, {payload}) => {
            state.isAuthenticated = false;
            state.user = undefined;
            state.isLoading = false;
            state.error = payload;
        });
    },
});

export default userSlice.reducer;
export {signIn, signUp};