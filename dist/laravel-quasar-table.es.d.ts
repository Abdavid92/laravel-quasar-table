import { Ref } from 'vue';
import { UnwrapRef } from 'vue';

/**
 * @author Abel David.
 */
export declare interface Column {
    name: string;
    required?: boolean;
    sortable?: boolean;
    filterable?: boolean;
    label: string;
    field?: string | ((row: any) => any);
}

/**
 * @author Abel david.
 */
export declare interface Pagination {
    page: number;
    sortBy: string;
    descending: boolean;
    rowsPerPage: number;
}

/**
 * @author Abel David.
 */
export declare interface ServerPagination<T> {
    current_page: number;
    per_page: number;
    total: number;
    path: string;
    data: T;
}

/**
 * @author Abel David.
 */
export declare interface ServerPaginator<T> {
    paginatorName: string;
    filter: string;
    sortBy: string;
    descending: boolean | null;
    args: [];
    pagination: ServerPagination<T>;
}

/**
 * Helper for make a pagination.
 *
 * @author Abel David.
 * @param data
 * @param columns
 */
export declare function usePagination<T>(data: ServerPaginator<T>, columns: Column[]): {
    pagination: Ref<{
        paginatorName: string;
        descending: boolean;
        page: number;
        rowsPerPage: number;
        rowsNumber: number;
        sortBy: string;
        data: UnwrapRef<T>;
        path: string;
        filter: string;
        columns: {
            name: string;
            required?: boolean | undefined;
            sortable?: boolean | undefined;
            filterable?: boolean | undefined;
            label: string;
            field?: string | ((row: any) => any) | undefined;
        }[];
        onRequest: (props: {
            filter: string;
            pagination: Pagination;
        }, args?: Map<string, any> | undefined) => void;
    }>;
    filter: Ref<string>;
    onRequest: (props: {
        filter: string;
        pagination: Pagination;
    }, args?: Map<string, any>) => void;
};

export { }
