import {configureStore} from "@reduxjs/toolkit";
import {usersApi} from "./users/users.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {usersReducer} from "./users/users.slice";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>