const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const pkg = require("./package.json");

const typescript = require("rollup-plugin-typescript2");
const json = require("@rollup/plugin-json");

const nodePollyfills = require('rollup-plugin-node-polyfills');
const nodeResolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel').default;

module.exports = {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        nodeResolve(),
        typescript({
            exclude: "**/__tests__/**",
            clean: true
        }),
        commonjs({
            include: ["node_modules/**"],
            namedExports: {
                "node_modules/react/react.js": [
                    "React"
                ],

            }
        })
    ]
};