import {Pagination} from "./Pagination";
import {Column} from "./Column";
import {ServerPaginator} from "./ServerPaginator";
import {router} from "@inertiajs/vue3";
import {ref} from "vue";

/**
 * Helper for make a pagination.
 *
 * @param data
 * @param columns
 */
export function usePagination<T>(data: ServerPaginator<T>, columns: Column[]) {

    const service = new Paginator(data, columns)

    const pagination = ref(service)

    const filter = ref(service.filter)

    const onRequest = (props: {filter: string, pagination: Pagination}, args?: Map<string, any>) => {
        service.onRequest(props, args)
    }

    return {
        pagination,
        filter,
        onRequest
    }
}

/**
 * @author Abel David.
 */
export class Paginator<T> implements Pagination {

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
    rowsNumber: number

    /**
     * @type string
     */
    sortBy: string;

    /**
     * @type {[]}
     */
    data: T

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
    columns: Column[]

    /**
     * @type {Map<string, any>}
     * @private
     */
    private readonly args: Map<string, any>

    /**
     * @param data
     * @param columns
     */
    constructor(data: ServerPaginator<T>, columns: Column[]) {
        this.columns = columns
        this.args = new Map<string, any>()
        this.initialize(data)
    }

    /**
     * Request table.
     *
     * @param props
     * @param args
     */
    onRequest(props: { filter: string, pagination: Pagination }, args?: Map<string, any>) {

        const routerArgs = this.buildRouterArgs(props, args)

        router.get(this.path, routerArgs, {
            preserveScroll: true
        })
    }

    private initialize(data: ServerPaginator<T>) {

        let desc = data.descending

        if (desc == null) {

            desc = false
        }

        this.paginatorName = data.paginatorName
        this.page = data.pagination.current_page
        this.rowsPerPage = data.pagination.per_page
        this.rowsNumber = data.pagination.total
        this.filter = data.filter
        this.sortBy = data.sortBy
        this.descending = desc
        this.data = data.pagination.data
        this.path = data.pagination.path
    }

    private buildRouterArgs(props: { filter: string, pagination: Pagination }, args?: Map<string, any>) {

        let { page, sortBy, descending, rowsPerPage } = props.pagination

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

        const columnSort: Column|undefined = this.columns.find(c => c.name == sortBy)

        if (columnSort !== undefined) {

            sortBy = this.getColumnName(columnSort)
        }

        const routerArgs: Record<string, any> = {}

        routerArgs.paginatorName = this.paginatorName
        routerArgs.page = page
        routerArgs.filter = props.filter
        routerArgs.sortBy = sortBy
        routerArgs.descending = descending
        routerArgs.perPage = rowsPerPage
        routerArgs.columns = JSON.stringify(cols)

        this.args.forEach((value, key) => {

            routerArgs[key] = value
        })

        if (args) {

            args.forEach((value, key) => {

                routerArgs[key] = value
            })
        }

        return routerArgs
    }

    private getColumnName(column: Column): string {
        return column.name
    }
}