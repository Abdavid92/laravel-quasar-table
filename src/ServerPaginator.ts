import {ServerPagination} from "./ServerPagination";

/**
 * @author Abel David.
 */
export interface ServerPaginator<T> {
    paginatorName: string
    filter: string
    sortBy: string
    descending: boolean|null
    args: []
    pagination: ServerPagination<T>
}
