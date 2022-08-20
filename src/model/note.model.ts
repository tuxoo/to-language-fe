import {NoteTypeEnum} from "./enums/note-type.enum";
import {Sort} from "./pagination/sort.model";
import {Pageable} from "./pagination/pageable.model";

export interface Note {
    id: string,
    type: NoteTypeEnum,
    text: string,
    translation?: string,
}

export interface NoteResponse {
    totalPages: number,
    totalElements: number,
    size: number,
    content: Note[],
    number: number,
    sort: Sort,
    pageable: Pageable,
    numberOfElements: number,
    first: boolean,
    last: boolean,
    empty: boolean
}