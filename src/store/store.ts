import {configureStore} from "@reduxjs/toolkit";
import {usersApi} from "./api/users.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {usersReducer} from "./slice/users.slice";
import {coursesApi} from "./api/courses.api";
import {coursesReducer} from "./slice/courses.slice";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        users: usersReducer,
        courses: coursesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([usersApi.middleware, coursesApi.middleware])
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>