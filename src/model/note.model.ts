import {NoteTypeEnum} from "./note-type.model";

export interface Note {
    id: string,
    type: NoteTypeEnum,
    text: string,
    translation?: string,
}