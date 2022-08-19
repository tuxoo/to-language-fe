import React from "react";
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
import {Course} from "../model/course.model";
import {useAppDispatch} from "../hook/hooks";
import {deleteCourse} from "../store/slice/course.slice";

interface CourseProps {
    course: Course
}

const CourseCard = ({course}: CourseProps) => {
    const dispatch = useAppDispatch();

    const handleDeleteCourse = async (id: string) => {
        dispatch(deleteCourse(id))
    }

    const handleEditCourse = async (id: string) => {
        // dispatch(editCourse({
        //     id: id,
        //     language: 'EN',
        //     description: 'Hello React',
        //     startedAt: '2022-08-11T20:04:43.888+00:00'
        // }))
    }

    return (
        <MDBCol>
            <MDBCard background='dark' className='text-white px-8 py-4 mb-2 mt-2' alignment='center'>
                <MDBCardHeader>{course.startedAt}</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>{course.language}</MDBCardTitle>
                    <MDBCardText>
                        {course.description}
                    </MDBCardText>
                    <MDBBtnGroup size='lg'>
                        <MDBBtn
                            className='btn-outline-light px-5'
                            color='dark'
                            type='button'
                            onClick={() => handleEditCourse(course.id)}
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

export default CourseCard