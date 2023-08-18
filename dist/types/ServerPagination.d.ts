/**
 * @author Abel David.
 */
export interface ServerPagination<T> {
    current_page: number;
    per_page: number;
    total: number;
    path: string;
    data: T;
}
