import { ISort } from './ISort';

export interface IPageable {
    offset: number,
    sort: ISort,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean
  }
