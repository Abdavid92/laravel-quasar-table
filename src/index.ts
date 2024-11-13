import {Column} from "./Column";
import {ref} from "vue";
import {Pagination} from "./Pagination";
import {PaginatorService} from "./paginator.service";
import {Config} from "./config";

/**
 * Helper for make a pagination.
 *
 * @author Abel David.
 * @param url
 * @param columns
 * @param config
 */
export function usePagination<T>(url: string, columns: Column<T>[], config?: Config<T>) {

    //const service = new PaginatorService(url, columns, config)

    const pagination = ref(new PaginatorService(url, columns, config))

    const filter = ref(pagination.value.filter)

    const onRequest = async (props: {filter: string, pagination: Pagination}, args?: Map<string, any>) => {
        await pagination.value.onRequest(props, args)
    }

    return {
        pagination,
        filter,
        onRequest
    }
}