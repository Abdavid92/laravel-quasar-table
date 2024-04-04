import {expect, test} from "vitest";
import {usePagination} from "../src";

test('paginator test', async () => {

    const {pagination, filter, onRequest} = usePagination<{
        name: string,
        email: string
    }>(
        'http://localhost:8000/api/user-paginator',
        [
            {
                name: 'name',
                label: 'Name',
                filterable: true
            },
            {
                name: 'email',
                label: 'Email'
            }
        ],
        {
            onFetch(response) {
                expect(response.pagination.data.length).gt(0)

                expect(pagination.value.data.length).eq(response.pagination.data.length)
            },
        }
    )

    expect(filter.value).string('')

    await onRequest({
        filter: 'Antonette Rodriguez',
        pagination: {
            page: 1,
            sortBy: '',
            descending: false,
            rowsPerPage: 15
        }
    },
        new Map().set('XDEBUG_SESSION_START', 'PHPSTORM')
    )
})