import React, {useEffect} from "react";
import {ICourse} from "../model/interfaces/course/ICourse";
import {
    MDBBtn,
    MDBBtnGroup,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText,
    MDBCardTitle,
    MDBCol
} from "mdb-react-ui-kit";
import {useDeleteCourseMutation} from "../store/courses/courses.api";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

type CourseProps = {
    course: ICourse
}

const Course = ({course}: CourseProps) => {
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
        if (isDeleteCourseSuccess) {
            toast.success("Course Delete Successfully")
        }
    })

    return (
        <MDBCol sm='6'>
            <MDBCard background='dark' className='text-white px-8 py-4 mb-2 mt-2'>
                <MDBCardHeader>{course.startedAt}</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>{course.language}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
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
    )
}

export default Course