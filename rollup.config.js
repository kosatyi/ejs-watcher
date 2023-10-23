export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/esm/index.js',
            format: 'esm',
        },
        {
            file: 'dist/cjs/index.js',
            format: 'cjs',
        },
    ],
    external: ['chokidar', '@kosatyi/ejs'],
}
