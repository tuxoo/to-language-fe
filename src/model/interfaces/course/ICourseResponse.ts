import {ISort} from "../ISort";
import {IPageable} from "../IPageable";
import {ICourse} from "./ICourse";


export interface ICourseResponse {
    totalPages: number,
    totalElements: number,
    size: number,
    content: ICourse[],
    number: number,
    sort: ISort,
    pageable: IPageable,
    numberOfElements: number,
    first: boolean,
    last: boolean,
    empty: boolean
}