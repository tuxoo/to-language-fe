import React from "react";
import {useSelector} from "react-redux";
import {selectAuth} from "../store/slice/authSlice";
import LoadingToRedirect from "./LoadingToRedirect";

const PrivateRoute = ({children}: { children: any }) => {
    const {token} = useSelector(selectAuth);
    return token ? children : <LoadingToRedirect/>;
}

export default PrivateRoute;