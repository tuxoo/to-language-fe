import {AxiosPromise} from "axios";
import {authHost} from "../http/axios";
import {Language} from "../model/language.model";
import {NoteType} from "../model/note-type.model";

class ItemService {
    public getLanguages(): AxiosPromise<Language[]> {
        return authHost.get<Language[]>('/v1/items/languages')
    }

    public getNoteTypes(): AxiosPromise<NoteType[]> {
        return authHost.get<NoteType[]>('/v1/items/note-types')
    }
}

export const itemService = new ItemService()