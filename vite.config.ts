import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            name: 'laravel-quasar-table',
            entry: 'src/Paginator.ts',
            fileName: format => `laravel-quasar-table.${format}.js`
        }
    },
    plugins: [
        dts({

        })
    ]
})