import {authHost} from "../http/axios";
import {AxiosPromise} from "axios";
import {Note} from "../model/note.model";
import {Page} from "../model/pagination/page.model";

class NoteService {
    public addNote(courseId: string, note: Note) {
        return authHost.post(`/v1/courses/${courseId}/notes`, note)
    }

    public getNotes(courseId: string): AxiosPromise<Page<Note>> {
        return authHost.get<Page<Note>>(`/v1/courses/${courseId}/notes`)
    }

    public getNote(courseId: string, id: string): AxiosPromise<Note> {
        return authHost.get<Note>(`/v1/courses/${courseId}/notes/${id}`)
    }

    public editNote(courseId: string, id: string, note: Note): AxiosPromise<Note> {
        return authHost.patch<Note>(`/v1/courses/${courseId}/notes/${id}`, note)
    }

    public deleteNote(courseId: string, id: string) {
        return authHost.delete(`/v1/courses/${courseId}/notes/${id}`)
    }
}

export const noteService = new NoteService()