import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {RootState} from "../store/store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {usersActions} from "../store/slice/users.slice";
import {coursesActions} from "../store/slice/courses.slice";


const actions = {
    ...usersActions,
    ...coursesActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
