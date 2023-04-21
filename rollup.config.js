const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const pkg = require("./package.json");
const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("rollup-plugin-typescript2");
const json = require("@rollup/plugin-json");


module.exports = {
    input: "src/index.ts",
    watch: {
        include: ['src/**', './rollup.config.js']
    },
    external: ["react", "react-dom", "react-router-dom"],
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
    preferBuiltins: true,
    plugins: [
        json(),
        external({}),
        resolve({ browser: true }),
        commonjs({ transformMixedEsModules: true, defaultIsModuleExports: true }),
        typescript({
            module: "esnext",
            clean: true,
            allowSyntheticDefaultImports: true,
            tsconfig: "tsconfig.json",
            include: ["*.js+(|x)", "**/*.js+(|x)", "*.ts+(|x)", "**/*.ts+(|x)"],
            exclude: ['node_modules/@tanstack/**', '**/node_modules/**/*'],
            allowJs: true
        })
    ],

};