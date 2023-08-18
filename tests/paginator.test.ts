import {expect, test} from "vitest";
import {usePagination} from "../src/Paginator";

test('paginator test', () => {

    const {paginator, filter, onRequest} = usePagination({
        paginatorName: 'test',
        filter: '',
        sortBy: '',
        descending: false,
        args: [],
        pagination: {
            current_page: 1,
            per_page: 15,
            total: 1,
            path: '',
            data: [
                {
                    name: 'Admin',
                    email: 'admin@gmail.com'
                }
            ]
        }
    }, [])

    expect(filter.value).string('')
})