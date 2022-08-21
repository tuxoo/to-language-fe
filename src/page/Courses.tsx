import React, {useEffect} from "react";
import {MDBRow} from "mdb-react-ui-kit";
import {useAppDispatch, useAppSelector} from "../hook/hooks";
import {fetchCourses} from "../store/slice/course.slice";
import CourseCard from "../component/CourseCard";
import {fetchLanguages} from "../store/slice/item.slice";

const Courses = () => {
    const dispatch = useAppDispatch();
    const {courses} = useAppSelector(state => state.coursesReducer)

    useEffect(() => {
        dispatch(fetchLanguages())
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCourses())
    }, [dispatch]);

    return (
        <div className="container py-4 px-4 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-6">
                    <div className="card-body p-4 text-center">
                        <div className="mb-md-5 mt-md-4 pb-5">
                            <MDBRow className='row-cols-1 row-cols-md-1 g-4'>
                                {courses.map(course => (<CourseCard course={course} key={course.id}/>))}
                            </MDBRow>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses