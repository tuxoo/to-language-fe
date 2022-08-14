import {configureStore} from "@reduxjs/toolkit";
import {usersApi} from "./users/users.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {usersReducer} from "./users/users.slice";
import {coursesApi} from "./courses/courses.api";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, coursesApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>