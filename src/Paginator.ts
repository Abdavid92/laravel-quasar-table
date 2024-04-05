import {Pagination} from "./Pagination";
import {Column} from "./Column";
import {ServerPaginator} from "./ServerPaginator";
import {Config} from "./Config";
import axios, {AxiosInstance} from "axios";

/**
 * @author Abel David.
 */
export class Paginator<T> implements Pagination {

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
    rowsNumber: number

    /**
     * @type string
     */
    sortBy: string;

    /**
     * @type {[]}
     */
    data: T[]

    /**
     * @type {string}
     */
    path: string

    /**
     * @type {string}
     */
    filter: string

    /**
     * @type Column[]
     */
    columns: Column<T>[]

    /**
     * @type AxiosInstance
     */
    private client: AxiosInstance

    /**
     * Launch when fetching data.
     */
    private readonly onFetching?: () => void
    /**
     * Launch when fetch data.
     */
    private readonly onFetch?: (response: ServerPaginator<T>) => void

    /**
     * Launch when fetch data failed.
     */
    private readonly onFailedFetch?: (e: any) => void

    /**
     * @param url
     * @param columns
     * @param config
     */
    constructor(url: string, columns: Column<T>[], config?: Config<T>) {

        this.columns = columns
        this.page = 1
        this.rowsPerPage = config?.rowsPerPage ?? 15
        this.rowsNumber = 0
        this.filter = config?.filter ?? ''
        this.sortBy = config?.sortBy ?? ''
        this.descending = config?.descending ?? false
        this.data = []
        this.path = url
        this.client = config?.axiosInstance ?? axios
        this.onFetch = config?.onFetch
        this.onFailedFetch = config?.onFailedFetch
        this.onFetching = config?.onFetching

        if (this.onFetching) {
            this.onFetching()
        }

        this.fetch({
            filter: this.filter,
            pagination: undefined
        }).then(response => {

            if (this.onFetch) {
                this.onFetch(response)
            }
        }).catch(e => {

            if (this.onFailedFetch) {
                this.onFailedFetch(e)
            }
        })
    }

    /**
     * Request table.
     *
     * @param props
     * @param args
     */
    async onRequest(props: { filter: string, pagination: Pagination }, args?: Map<string, any>) {

        let response = null

        if (this.onFetching) {
            this.onFetching()
        }

        try {
            response = await this.fetch(props, args)
        } catch (e) {

            if (this.onFailedFetch) {
                this.onFailedFetch(e)
            }
        }

        if (this.onFetch && response) {
            this.onFetch(response)
        }
    }

    private buildRouterArgs(props: { filter: string, pagination?: Pagination }, args?: Map<string, any>) {

        const routerArgs: Record<string, any> = {}
        routerArgs.filter = props.filter

        if (props.pagination) {

            let {page, sortBy, descending, rowsPerPage} = props.pagination

            const cols = []

            for (const column of this.columns) {

                let name = this.getColumnName(column)


                if (name && (column.filterable || column.sortable)) {

                    cols.push({
                        name: name,
                        filterable: column.filterable != undefined ? column.filterable : false
                    })
                }
            }

            const columnSort: Column<T> | undefined = this.columns.find(c => c.name == sortBy)

            if (columnSort !== undefined) {

                sortBy = this.getColumnName(columnSort)
            }

            routerArgs.page = page
            routerArgs.sortBy = sortBy
            routerArgs.descending = descending
            routerArgs.perPage = rowsPerPage
            routerArgs.columns = JSON.stringify(cols)
        }

        if (args) {

            args.forEach((value, key) => {
                routerArgs[key] = value
            })
        }

        return routerArgs
    }

    private getColumnName(column: Column<T>): string {
        return column.name
    }

    private async fetch(props: {filter: string, pagination?: Pagination}, args?: Map<string, any>) {

        const routerArgs = this.buildRouterArgs(props, args)

        const response = await this.client.get<ServerPaginator<T>>(this.path, {
            params: routerArgs
        })

        const serverPaginator = response.data

        this.filter = serverPaginator.filter
        this.descending = serverPaginator.descending ?? this.descending
        this.sortBy = serverPaginator.sortBy
        this.page = serverPaginator.pagination.current_page
        this.rowsPerPage = serverPaginator.pagination.per_page
        this.rowsNumber = serverPaginator.pagination.total
        this.data = serverPaginator.pagination.data

        return serverPaginator
    }
}