import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./page/Login";
import {ToastContainer} from "react-toastify";
import Courses from "./page/Courses";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Notes from "./page/Notes";
import Course from "./page/Course";

function App() {
    return (
        <>
            <Header/>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/courses/:courseId" element={<Course/>}/>
                <Route path="/courses/:courseId/notes/" element={<Notes/>}/>
            </Routes>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
