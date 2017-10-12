import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import sourceMaps from "rollup-plugin-sourcemaps"
const pkg = require("./package.json")

const libraryName = "v-chronos"

export default {
  input: 'out-tsc/main/v-chronos.js',
  output: [
    { file: pkg.main, name: libraryName, format: "umd" },
    { file: pkg.module, format: "es" }
  ],
  sourcemap: true,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: "out-tsc/main/**"
  },
  plugins: [
    commonjs({
      include: [
        'node_modules/moment/**'
      ]
    }),
    resolve(),
    sourceMaps()
  ]
}
