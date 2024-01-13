const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const pkg = require("./package.json");
const postcss = require('rollup-plugin-postcss')
const typescript = require("rollup-plugin-typescript2");
const json = require("@rollup/plugin-json");
const nodePollyfills = require("rollup-plugin-node-polyfills");
const nodeResolve = require("@rollup/plugin-node-resolve");
const babel = require("@rollup/plugin-babel").default;
module.exports = {
  input: "src/index.ts",
  watch: {
    include: ["src/**", "./rollup.config.js"],
  },
  external: ["react", "react-dom", "react-router-dom", "@tanstack/react-query"],
  output: [
    {
      file: "./lib/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "./lib/index.es.js",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    json(),
    babel({babelHelpers: "bundled"}),
    commonjs({
      transformMixedEsModules: true,
      defaultIsModuleExports: true,
      esmExternals: true,
    }),
    postcss({
      modules: true
    }),
    nodePollyfills({
      include: null,
      exclude: [
        "node_modules/@tanstack/**",
        "**/node_modules/**/*",
        "**/build",
        "**/build/*",
        "node_modules/@tanstack/react-query/build",
      ],
    }),
    nodeResolve({
      browser: true,
      preferBuiltins: true,
      moduleDirectories: ["node_modules"],
      extensions: [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
        ".cjs",
        ".mjs",
        ".json",
        ".ejs",
      ],
    }),
    typescript({
      module: "esnext",
      verbosity: 4,
      clean: true,
      allowSyntheticDefaultImports: true,
      tsconfig: "tsconfig.json",
      include: ["*.js+(|x)", "**/*.js+(|x)", "*.ts+(|x)", "**/*.ts+(|x)"],
      exclude: [
        "node_modules/@tanstack/**",
        "**/node_modules/**/*",
        "**/build",
        "**/build/*",
        "node_modules/@tanstack/react-query/build",
      ],
      allowJs: true,
    }),
  ],
};
