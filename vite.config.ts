import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            name: 'laravel-quasar-table',
            entry: 'src/paginator.service.ts',
            fileName: format => `laravel-quasar-table.${format}.js`
        }
    },
    plugins: [
        dts({
            outDir: "dist/types",
            include: "src"
        })
    ]
})