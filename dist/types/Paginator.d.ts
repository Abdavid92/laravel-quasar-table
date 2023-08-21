import { Pagination } from "./Pagination";
import { Column } from "./Column";
import { ServerPaginator } from "./ServerPaginator";
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
