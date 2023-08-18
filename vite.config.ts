import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            name: 'laravel-quasar-table',
            entry: './src/Paginator.ts',
            fileName: format => `laravel-quasar-table.${format}.js`
        }
    }
})