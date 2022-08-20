import {Course} from "../model/course.model";
import {authHost} from "../http/axios";
import {AxiosPromise} from "axios";

class RuleService {
    public addCourse(course: Course) {
        return authHost.post('/v1/courses')
    }

    public getCourses(): AxiosPromise<Course[]> {
        return authHost.get<Course[]>('/v1/courses')
    }

    public getCourse(id: string): AxiosPromise<Course> {
        return authHost.get<Course>(`/v1/courses/${id}`)
    }

    public editCourse(id: string, newCourse: Course): AxiosPromise<Course> {
        return authHost.patch<Course>(`/v1/courses/${id}`, newCourse)
    }

    public deleteCourse(id: string) {
        return authHost.delete(`/v1/courses/${id}`)
    }
}

export const courseService = new RuleService();