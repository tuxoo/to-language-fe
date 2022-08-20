import {useAppDispatch, useAppSelector} from "../hook/hooks";
import React, {useEffect} from "react";
import {fetchCourses} from "../store/slice/course.slice";
import {fetchNotes} from "../store/slice/note.slice";
import {MDBRow} from "mdb-react-ui-kit";
import CourseCard from "../component/CourseCard";

const Notes = () => {
    // const dispatch = useAppDispatch();
    // const {notes} = useAppSelector(state => state.notesReducer)
    //
    // useEffect(() => {
    //     dispatch(fetchNotes(''))
    // }, [dispatch]);
    return (
        <section className="vh-100 gradient-app">
            <div className="container py-4 px-4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-20">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-10">
                        <div className="card-body p-4 text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
                                </MDBRow>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notes