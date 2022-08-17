import {authHost} from "../http/axios";
import {Course} from "../model/course.model";


class CourseService {
    public getCourses() {
        return authHost.get<Course[]>('/v1/courses')
    }
}

export const courseService = new CourseService();