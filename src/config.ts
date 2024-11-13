import {ServerPaginator} from "./ServerPaginator";

/**
 * @author Abel David.
 */
export interface Config<T> {

    /**
     * Page number (1-based)
     */
    page?: number;

    /**
     * Initial sort by.
     */
    sortBy?: string
    /**
     * Initial descending.
     */
    descending?: boolean

    /**
     * Rows per page.
     */
    rowsPerPage?: number

    /**
     * On fetching callback.
     */
    onFetching?: () => void
    /**
     * On fetch callback.
     *
     * @param response
     */
    onFetch?: (response: ServerPaginator<T>) => void
    /**
     * On fetch failed callback
     * @param e Error.
     */
    onFailedFetch?: (e: any) => void
}