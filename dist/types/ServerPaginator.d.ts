import { ServerPagination } from "./ServerPagination";
/**
 * @author Abel David.
 */
export interface ServerPaginator<T> {
    /**
     * Filter.
     */
    filter: string;
    /**
     * Sort by.
     */
    sortBy: string;
    /**
     * Indicate if sorting must be descending or not.
     */
    descending: boolean | null;
    /**
     * Data paginated.
     */
    pagination: ServerPagination<T>;
}
