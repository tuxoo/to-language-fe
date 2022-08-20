import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {createBrowserHistory} from 'history';
import userReducer from './slice/user.slice';
import coursesReducer from './slice/course.slice';
import notesReducer from './slice/note.slice';
import {connectRouter, routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
    userReducer,
    coursesReducer,
    notesReducer,
    router: connectRouter(history)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;