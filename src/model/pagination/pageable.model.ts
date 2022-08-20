import {Sort} from './sort.model';

export interface Pageable {
    offset: number,
    sort: Sort,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean
}
