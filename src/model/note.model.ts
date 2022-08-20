import {NoteTypeEnum} from "./enums/note-type.enum";

export interface Note {
    id: string,
    type: NoteTypeEnum,
    text: string,
    translation?: string,
}