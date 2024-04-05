import {AxiosInstance} from "axios";
import {ServerPaginator} from "./ServerPaginator";

/**
 * @author Abel David.
 */
export interface Config<T> {
    /**
     * Custom axios instance.
     */
    axiosInstance?: AxiosInstance
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
    /**
     * Rows per page.
     */
    rowsPerPage?: number
    /**
     * Initial filter.
     */
    filter?: string
    /**
     * Initial sort by.
     */
    sortBy?: string
    /**
     * Initial descending.
     */
    descending?: boolean
}