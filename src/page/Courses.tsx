import React, {useEffect, useState} from "react";
import {
    MDBBtn,
    MDBBtnGroup,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow
} from "mdb-react-ui-kit";
import {useActions, useAppSelector} from "../hook/hooks";
import Course from "../component/Course";
import {useGetCoursesQuery} from "../store/api/courses.api";
import {ICourse} from "../model/interfaces/course/ICourse";

const Courses = () => {
    const {courses} = useAppSelector(state => state.courses)

    const {
        data: getCourseData,
        isSuccess: isGetCoursesSuccess,
        isLoading: isGetCoursesLoading,
        error: getCourseError,
    } = useGetCoursesQuery();

    useEffect(() => {
        if (isGetCoursesSuccess) {
            getCourseData as ICourse[]
            courses.push(getCourseData[0] as ICourse)
        }
    }, [isGetCoursesSuccess, getCourseData])

    return (
        <section className="vh-100 gradient-app">
            <div className="container py-4 px-4 h-100">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-10">
                        <div className="card-body p-4 text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <MDBRow>
                                    {courses.map(course => (<Course course={course} key={course.id}/>))}
                                </MDBRow>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses