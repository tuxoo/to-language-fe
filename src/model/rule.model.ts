import {Sort} from "./pagination/sort.model";
import {Pageable} from "./pagination/pageable.model";

export interface Rule {
    title: string,
    subRules: SubRule[]
}

export interface SubRule {
    text: string
}

export interface NoteResponse {
    totalPages: number,
    totalElements: number,
    size: number,
    content: Rule[],
    number: number,
    sort: Sort,
    pageable: Pageable,
    numberOfElements: number,
    first: boolean,
    last: boolean,
    empty: boolean
}