import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState} from "../store/store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {usersActions} from "../store/users/users.slice";


const actions = {
    ...usersActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
