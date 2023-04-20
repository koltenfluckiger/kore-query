const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const pkg = require("./package.json");
const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");
const json = require("@rollup/plugin-json")
module.exports = {
    input: "src/index.ts",
    watch: {
        include: 'src/**'
    },
    shimMissingExports: true,
    output: [
        {
            file: "./lib/index.js",
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: "./lib/index.es.js",
            format: "es",
            exports: "named",
            sourcemap: true
        },

    ],

    plugins: [
        json(),
        resolve(),
        external(),

        commonjs(
        ),
        typescript({
            exclude: "**/__tests__/**",
            clean: true,
            allowSyntheticDefaultImports: true,
            tsconfig: "tsconfig.json",
            exclude: ['node_modules/@tanstack/**', 'node_modules/**', 'node_modules']
        }),
    ]
};