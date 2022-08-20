import {Course} from "../model/course.model";
import {authHost} from "../http/axios";
import {AxiosPromise} from "axios";
import {Note} from "../model/note.model";

class NoteService {
    public addNote(courseId: string, newNote: Note) {
        return authHost.post(`/v1/courses/${courseId}/notes`)
    }

    public getNotes(): AxiosPromise<Course[]> {
        return authHost.get<Course[]>('/v1/courses')
    }

    public getNote(id: string): AxiosPromise<Course> {
        return authHost.get<Course>(`/v1/courses/${id}`)
    }

    public editNote(id: string, newCourse: Course): AxiosPromise<Course> {
        return authHost.patch<Course>(`/v1/courses/${id}`, newCourse)
    }

    public deleteNote(id: string) {
        return authHost.delete(`/v1/courses/${id}`)
    }
}

export const noteService = new NoteService();