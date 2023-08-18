import { Pagination } from "./Pagination";
import { Column } from "./Column";
import { ServerPaginator } from "./ServerPaginator";
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
/**
 * @author Abel David.
 */
export declare class Paginator<T> implements Pagination {
    /**
     * @type string
     */
    paginatorName: string;
    /**
     * @type boolean
     */
    descending: boolean;
    /**
     * @type number
     */
    page: number;
    /**
     * @type number
     */
    rowsPerPage: number;
    /**
     * @type {number}
     */
    rowsNumber: number;
    /**
     * @type string
     */
    sortBy: string;
    /**
     * @type {[]}
     */
    data: T;
    /**
     * @type {string}
     */
    path: string;
    /**
     * @type {string}
     */
    filter: string;
    /**
     * @type Column[]
     */
    columns: Column[];
    /**
     * @type {Map<string, any>}
     * @private
     */
    private readonly args;
    /**
     * @param data
     * @param columns
     */
    constructor(data: ServerPaginator<T>, columns: Column[]);
    /**
     * Request table.
     *
     * @param props
     * @param args
     */
    onRequest(props: {
        filter: string;
        pagination: Pagination;
    }, args?: Map<string, any>): void;
    private initialize;
    private buildRouterArgs;
    private getColumnName;
}
