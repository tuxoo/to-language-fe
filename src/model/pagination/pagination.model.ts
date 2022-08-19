export interface PaginationModel {
    page: number,
    size: number,
    sort: string,
    sortBy: 'desc' | 'asc'
}
