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

interface CourseProps {
    course: Course
}

const Course = ({course}: CourseProps) => {
    // const {removeCourse} = useActions();

    const handleDeleteCourse = async (id: string) => {
        // await removeCourse(id)
    }

    return (
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
    )
}

export default Course