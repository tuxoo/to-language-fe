import React from "react";
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from "mdb-react-ui-kit";
import {Course} from "../model/course.model";
import {useAppDispatch, useAppSelector} from "../hook/hooks";
import {deleteCourse, getCourse} from "../store/slice/course.slice";

interface CourseProps {
    course: Course
}

const CourseCard = ({course}: CourseProps) => {
    const {languages} = useAppSelector(state => state.itemsReducer)
    const dispatch = useAppDispatch();

    const getLanguage = languages.find((language) => {
        return language.name === course.language;
    });

    const handleDeleteCourse = async (id: string) => {
        dispatch(deleteCourse(id))
    }

    const handleEditCourse = async (id: string) => {
        // dispatch(editCourse({
        //     id: id,
        //     language: ,
        //     description: 'Hello React asdfasdf asdf asdfasdf asdfasdf asdfasd fasdf asdf asdfa sdf asdf as dfa sd',
        //     startedAt: '2022-08-11T20:04:43.888+00:00'
        // }))
    }

    const handleCourse = async (id: string) => {
        dispatch(getCourse(id))
    }

    return (
        <MDBCol>
            <MDBCard className='h-100'>
                <MDBCardImage
                    src={`/static/${course.language}.jpg`}
                    alt='card-img-top'
                    position='top'
                />
                <MDBCardBody className='text-dark'>
                    <a href={`/courses/${course.id}`} className="stretched-link text-black">
                        <MDBCardTitle>{
                            getLanguage?.description
                        }</MDBCardTitle>
                    </a>
                    <MDBCardText>
                        {/*<MDBBtn tag="a" href="#!" className="stretched-link">Go somewhere</MDBBtn>*/}
                        {/*<a*/}
                        {/*    className="stretched-link"*/}
                        {/*    onClick={() => handleCourse(course.id)}*/}
                        {/*>img</a>*/}
                        {/*<MDBBtn*/}
                        {/*    className='px-5'*/}
                        {/*    color='light'*/}
                        {/*    type='button'*/}
                        {/*    onClick={() => handleCourse(course.id)}*/}
                        {/*>Course</MDBBtn>*/}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter border=''>
                    {/*<MDBBtnGroup size='lg' className=''>*/}
                    <big>{course.startedAt}</big>

                    {/*<MDBBtn*/}
                    {/*    className='px-5'*/}
                    {/*    color='light'*/}
                    {/*    type='button'*/}
                    {/*    onClick={() => handleEditCourse(course.id)}*/}
                    {/*>Edit</MDBBtn>*/}
                    {/*<MDBBtn*/}
                    {/*    className='px-5'*/}
                    {/*    color='light'*/}
                    {/*    type='button'*/}
                    {/*    onClick={() => handleDeleteCourse(course.id)}*/}
                    {/*>Delete</MDBBtn>*/}
                    {/*<MDBBtn*/}
                    {/*    className='px-5'*/}
                    {/*    color='light'*/}
                    {/*    type='button'*/}
                    {/*    onClick={() => handleToNote(course.id)}*/}
                    {/*>ToNotes</MDBBtn>*/}
                    {/*</MDBBtnGroup>*/}
                </MDBCardFooter>
            </MDBCard>
        </MDBCol>
    )
}

export default CourseCard