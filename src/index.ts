import {Column} from "./Column";
import {ref} from "vue";
import {Pagination} from "./Pagination";
import {Paginator} from "./Paginator";
import {Config} from "./Config";

/**
 * Helper for make a pagination.
 *
 * @author Abel David.
 * @param url
 * @param columns
 * @param config
 */
export function usePagination<T>(url: string, columns: Column<T>[], config?: Config<T>) {

    //const service = new Paginator(url, columns, config)

    const pagination = ref(new Paginator(url, columns, config))

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