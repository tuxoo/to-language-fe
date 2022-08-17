import React, {useEffect, useState} from "react";
import {MDBRow} from "mdb-react-ui-kit";
import {courseService} from "../service/course-service";
import {Course} from "../model/course.model";

const Courses = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function fetchCourses() {
            const response = await courseService.getCourses();
            setCourses(response.data);
        }

        fetchCourses();
    }, []);

    return (
        <section className="vh-100 gradient-app">
            <div className="container py-4 px-4 h-100">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-10">
                        <div className="card-body p-4 text-center">
                            <div className="mb-md-5 mt-md-4 pb-5">
                                <MDBRow>
                                    {/*{courses.map(course => (<Course course={course} key={course.id}/>))}*/}
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