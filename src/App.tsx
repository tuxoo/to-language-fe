import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import {useActions} from "./hook/hooks";
import {ToastContainer} from "react-toastify";
import PrivateRoute from "./component/PrivateRoute";
import Courses from "./page/Courses";
import Footer from "./component/Footer";
import Header from "./component/Header";
import {ACCESS_TOKEN} from "./model/const";

function App() {
    const {authenticateUser} = useActions();
    const user = JSON.parse(localStorage.getItem("user") || "{}")

    useEffect(() => {
        authenticateUser(user)
    }, []);

    return (
        <>
            <Header/>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/courses" element={
                    <PrivateRoute>
                        <Courses/>
                    </PrivateRoute>
                }/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
