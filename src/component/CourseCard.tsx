import React from "react";
import {
    MDBBtn,
    MDBBtnGroup,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardText,
    MDBCardTitle,
    MDBCol
} from "mdb-react-ui-kit";
import {Course} from "../model/course.model";
import {useAppDispatch} from "../hook/hooks";
import {deleteCourse, editCourse, getCourse} from "../store/slice/course.slice";

interface CourseProps {
    course: Course
}

const CourseCard = ({course}: CourseProps) => {
    const dispatch = useAppDispatch();

    const handleDeleteCourse = async (id: string) => {
        dispatch(deleteCourse(id))
    }

    const handleEditCourse = async (id: string) => {
        dispatch(editCourse({
            id: id,
            language: 'EN',
            description: 'Hello React asdfasdf asdf asdfasdf asdfasdf asdfasd fasdf asdf asdfa sdf asdf as dfa sd',
            startedAt: '2022-08-11T20:04:43.888+00:00'
        }))
    }

    const handleCourse = async (id: string) => {
        dispatch(getCourse(id))
    }

    return (
        <MDBCol>
            <MDBCard shadow='0' border='dark' className='px-8 py-4 mb-2 mt-2 h-100' alignment='center'>
                <MDBCardHeader>{course.startedAt}</MDBCardHeader>
                <MDBCardBody className='text-dark'>
                    <MDBCardTitle>{course.language}</MDBCardTitle>
                    <MDBCardText className='px-8 py-4 mb-2 mt-2'>
                        {course.description}
                        {/*<MDBBtn tag="a" href="#!" className="stretched-link">Go somewhere</MDBBtn>*/}
                        {/*<a*/}
                        {/*    className="stretched-link"*/}
                        {/*    onClick={() => handleCourse(course.id)}*/}
                        {/*>img</a>*/}
                        <MDBBtn
                            className='px-5'
                            color='light'
                            type='button'
                            onClick={() => handleCourse(course.id)}
                        >Course</MDBBtn>
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter border=''>
                    <MDBBtnGroup size='lg' className=''>
                        <MDBBtn
                            className='px-5'
                            color='light'
                            type='button'
                            onClick={() => handleEditCourse(course.id)}
                        >Edit</MDBBtn>
                        <MDBBtn
                            className='px-5'
                            color='light'
                            type='button'
                            onClick={() => handleDeleteCourse(course.id)}
                        >Delete</MDBBtn>
                        {/*<MDBBtn*/}
                        {/*    className='px-5'*/}
                        {/*    color='light'*/}
                        {/*    type='button'*/}
                        {/*    onClick={() => handleToNote(course.id)}*/}
                        {/*>ToNotes</MDBBtn>*/}
                    </MDBBtnGroup>
                </MDBCardFooter>
            </MDBCard>
        </MDBCol>
    )
}

export default CourseCard