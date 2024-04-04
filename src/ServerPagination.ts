/**
 * @author Abel David.
 */
export interface ServerPagination<T> {
    /**
     * Current page.
     */
    current_page: number
    /**
     * Rows per page.
     */
    per_page: number
    /**
     * Total of rows.
     */
    total: number
    /**
     * Url base.
     */
    path: string
    /**
     * Data ;).
     */
    data: T[]
}
