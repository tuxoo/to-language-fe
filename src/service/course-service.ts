import {authHost} from "../http/axios";
import {Course} from "../model/course.model";
import {AxiosPromise} from "axios";


class CourseService {
    public getCourses(): AxiosPromise<Course[]> {
        return authHost.get<Course[]>('/v1/courses')
    }

    public editCourse(id: string, newCourse: Course): AxiosPromise<Course> {
        return authHost.patch<Course>(`/v1/courses/${id}`, newCourse)
    }

    public deleteCourse(id: string) {
        return authHost.delete(`/v1/courses/${id}`)
    }
}

export const courseService = new CourseService();