import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const path = require('path');

export default defineConfig({
    resolve:{
        alias:{
          '~' : path.resolve(__dirname, 'node_modules'),
        },
    },
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
