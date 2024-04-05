import { Pagination } from "./Pagination";
import { Column } from "./Column";
import { Config } from "./Config";
/**
 * @author Abel David.
 */
export declare class Paginator<T> implements Pagination {
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
    data: T[];
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
    columns: Column<T>[];
    /**
     * @type AxiosInstance
     */
    private client;
    /**
     * Launch when fetching data.
     */
    private readonly onFetching?;
    /**
     * Launch when fetch data.
     */
    private readonly onFetch?;
    /**
     * Launch when fetch data failed.
     */
    private readonly onFailedFetch?;
    /**
     * @param url
     * @param columns
     * @param config
     */
    constructor(url: string, columns: Column<T>[], config?: Config<T>);
    /**
     * Request table.
     *
     * @param props
     * @param args
     */
    onRequest(props: {
        filter: string;
        pagination: Pagination;
    }, args?: Map<string, any>): Promise<void>;
    private buildRouterArgs;
    private getColumnName;
    private fetch;
}
