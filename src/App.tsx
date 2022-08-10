import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Auth from "./page/Auth";
import {useActions} from "./hook/hooks";
import {ToastContainer} from "react-toastify";
import PrivateRoute from "./component/PrivateRoute";

function App() {
    const {authenticateUser} = useActions();
    const user = JSON.parse(localStorage.getItem("user") || "{}")

    useEffect(() => {
        authenticateUser(user)
    }, []);

    return (
        <>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="/dashboard" element={<PrivateRoute>
                    {/*<Dashboard/>*/}
                </PrivateRoute>}/>
            </Routes>
        </>
    );
}

export default App;
