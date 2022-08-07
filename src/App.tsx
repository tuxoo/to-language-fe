import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Auth from "./page/Auth";
import {useAppDispatch} from "./hook/hooks";
import {setUser} from "./store/slice/authSlice";
import {ToastContainer} from "react-toastify";
import PrivateRoute from "./component/PrivateRoute";
import Dashboard from "./page/Dashboard";

function App() {
    const dispatch = useAppDispatch();
    const user = JSON.parse(localStorage.getItem("user") || "{}")

    useEffect(() => {
        dispatch(setUser(user))
    }, []);

    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="/dashboard" element={<PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>}/>
            </Routes>
        </>
    );
}

export default App;
