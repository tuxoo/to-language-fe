import React, {useEffect} from "react";
import {MDBRow} from "mdb-react-ui-kit";
import {useAppDispatch, useAppSelector} from "../hook/hooks";
import {getCourse} from "../store/slice/course.slice";
import {useParams} from 'react-router';

const Course = () => {
    const {courseId} = useParams();
    const dispatch = useAppDispatch();
    const {currentCourse} = useAppSelector(state => state.coursesReducer)

    useEffect(() => {
        dispatch(getCourse(courseId!!))
    }, [dispatch]);

    return (
        <div className="container py-4 px-4 h-100">
            <div className="row d-flex justify-content-center align-items-center h-20">
                <div className="col-12 col-md-8 col-lg-8 col-xl-10">
                    <div className="card-body p-4 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                            <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                                hello
                            </MDBRow>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course