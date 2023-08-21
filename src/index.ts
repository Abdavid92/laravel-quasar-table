import {ServerPaginator} from "./ServerPaginator";
import {Column} from "./Column";
import {ref} from "vue";
import {Pagination} from "./Pagination";
import {Paginator} from "./Paginator";

/**
 * Helper for make a pagination.
 *
 * @author Abel David.
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