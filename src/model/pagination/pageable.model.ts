import { SortModel } from './sort.model';

export interface PageableModel {
    offset: number,
    sort: SortModel,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean
  }
