import {authHost} from "../http/axios";
import {Course} from "../model/course.model";
import {AxiosPromise} from "axios";


class CourseService {
    public addCourse(course: Course) {
        return authHost.post('/v1/courses')
    }

    public getCourses(): AxiosPromise<Course[]> {
        return authHost.get<Course[]>('/v1/courses')
    }

    public getCourse(id: string): AxiosPromise<Course> {
        return authHost.get<Course>(`/v1/courses/${id}`)
    }

    public editCourse(id: string, course: Course): AxiosPromise<Course> {
        return authHost.patch<Course>(`/v1/courses/${id}`, course)
    }

    public deleteCourse(id: string) {
        return authHost.delete(`/v1/courses/${id}`)
    }
}

export const courseService = new CourseService()