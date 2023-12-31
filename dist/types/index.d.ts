import { ServerPaginator } from "./ServerPaginator";
import { Column } from "./Column";
import { Pagination } from "./Pagination";
/**
 * Helper for make a pagination.
 *
 * @author Abel David.
 * @param data
 * @param columns
 */
export declare function usePagination<T>(data: ServerPaginator<T>, columns: Column[]): {
    pagination: import("vue").Ref<{
        paginatorName: string;
        descending: boolean;
        page: number;
        rowsPerPage: number;
        rowsNumber: number;
        sortBy: string;
        data: import("vue").UnwrapRef<T>;
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
    filter: import("vue").Ref<string>;
    onRequest: (props: {
        filter: string;
        pagination: Pagination;
    }, args?: Map<string, any>) => void;
};
