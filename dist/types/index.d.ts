import { Column } from "./Column";
import { Pagination } from "./Pagination";
import { Config } from "./Config";
/**
 * Helper for make a pagination.
 *
 * @author Abel David.
 * @param url
 * @param columns
 * @param config
 */
export declare function usePagination<T>(url: string, columns: Column<T>[], config?: Config<T>): {
    pagination: import("vue").Ref<{
        descending: boolean;
        page: number;
        rowsPerPage: number;
        rowsNumber: number;
        sortBy: string;
        data: import("@vue/reactivity").UnwrapRefSimple<T>[];
        path: string;
        filter: string;
        columns: {
            name: string;
            required?: boolean | undefined;
            sortable?: boolean | undefined;
            filterable?: boolean | undefined;
            label: string;
            field?: string | ((row: T) => any) | undefined;
        }[];
        onRequest: (props: {
            filter: string;
            pagination: Pagination;
        }, args?: Map<string, any> | undefined) => Promise<void>;
    }>;
    filter: import("vue").Ref<string>;
    onRequest: (props: {
        filter: string;
        pagination: Pagination;
    }, args?: Map<string, any>) => Promise<void>;
};
