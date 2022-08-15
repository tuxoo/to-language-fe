import React, {useEffect, useState} from "react";
import {useDeleteCourseMutation, useGetCoursesQuery} from "../store/api/courses.api";
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
import {toast} from "react-toastify";
import {useActions} from "../hook/hooks";
import {ICourse} from "../model/interfaces/course/ICourse";

const Courses = () => {
    const [courses, setCourses] = useState([])

    const {removeCourse} = useActions();

    const {
        data: getCourseData,
        isSuccess: isGetCoursesSuccess,
        isLoading: isGetCoursesLoading,
        error: getCourseError,
    } = useGetCoursesQuery();

    const [deleteCourse,
        {
            isSuccess: isDeleteCourseSuccess,
            isError: isDeleteCourseError,
            error: deleteCourseError,
        }
    ] = useDeleteCourseMutation();

    const handleDeleteCourse = async (id: string) => {
        await deleteCourse(id)
    }

    useEffect(() => {
        if (isGetCoursesSuccess) {
            // @ts-ignore
            setCourses(oldArray => [...oldArray, ...getCourseData])
        }
    })

    useEffect(() => {
        if (isDeleteCourseSuccess) {
            toast.success("Course Delete Successfully");
            removeCourse("62f952bd4eeb8d089a589cdf")
        }
    })

    return (
        <section className="vh-100 gradient-app">
            <div className="container py-4 px-4 h-100">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-10">
                        <div className="card-body p-4 text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <MDBRow>
                                    {getCourseData?.map(course => (
                                        <MDBCol sm='6'>
                                            <MDBCard background='dark' className='text-white px-8 py-4 mb-2 mt-2'>
                                                <MDBCardHeader>{course.startedAt}</MDBCardHeader>
                                                <MDBCardBody>
                                                    <MDBCardTitle>{course.language}</MDBCardTitle>
                                                    <MDBCardText>
                                                        Some quick example text to build on the card title and make up
                                                        the bulk of the card's content.
                                                        {/*{course.description}*/}
                                                    </MDBCardText>
                                                    <MDBBtnGroup size='lg'>
                                                        <MDBBtn
                                                            className='btn-outline-light px-5'
                                                            color='dark'
                                                            type='button'
                                                        >Edit</MDBBtn>
                                                        <MDBBtn
                                                            className='btn-outline-light px-5'
                                                            color='dark'
                                                            type='button'
                                                            onClick={() => handleDeleteCourse(course.id)}
                                                        >Delete</MDBBtn>
                                                    </MDBBtnGroup>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    ))}
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