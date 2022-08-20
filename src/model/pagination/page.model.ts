import {Sort} from "./sort.model";
import {Pageable} from "./pageable.model";

export interface Page<T> {
    totalPages: number,
    totalElements: number,
    size: number,
    content: T[],
    number: number,
    sort: Sort,
    pageable: Pageable,
    numberOfElements: number,
    first: boolean,
    last: boolean,
    empty: boolean
}