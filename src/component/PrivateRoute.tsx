import React from "react";
import LoadingToRedirect from "./LoadingToRedirect";
import {useAppSelector} from "../hook/hooks";

const PrivateRoute = ({children}: { children: any }) => {
    const {accessToken} = useAppSelector(state => state.users);
    return accessToken ? children : <LoadingToRedirect/>;
}

export default PrivateRoute;