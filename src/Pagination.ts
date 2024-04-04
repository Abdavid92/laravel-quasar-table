/**
 * @author Abel david.
 */
export interface Pagination {
    /**
     * Number of page.
     */
    page: number
    /**
     * Sort by.
     */
    sortBy: string
    /**
     * Indicate if sorting must be descending or not.
     */
    descending: boolean
    /**
     * Rows per page (Default 15).
     */
    rowsPerPage: number
}
