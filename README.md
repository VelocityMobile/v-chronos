
## V Chronos

Velocity's fast date-time calculation and parsing library

## Dependencies (working to remove them)
- ramda
- moment

## Pre-Build

```bash
$ npm install
```

## Scripts

```bash
$ npm run lint
$ npm run test
$ npm run package
```

## Publish To Private Repository

* Add your scope to the name in ```package.json``` e.g. ```@myorgscope/my-library-name```
* Configure Nexus3 repository (or similar repositories with @scope support)

```bash
$ npm config set @myorgscope:registry http://myorgsrepo.com/repository/npm-hosted
$ npm version patch
$ npm publish
```

## Runtime Dependencies

NONE. This is an empty module

## Dev Dependencies

- typescript (ALv2 https://github.com/Microsoft/TypeScript)
- tslint for static analysis (ALv2 https://github.com/palantir/tslint)
- jasmine for tests (MIT https://github.com/jasmine/jasmine)
- nyc for coverage (ISC https://github.com/istanbuljs/nyc)
- rollup for packaging (MIT https://github.com/rollup/rollup)
- typedoc for document packaging (ALv2 https://github.com/TypeStrong/typedoc)
- rimraf (ISC https://github.com/isaacs/rimraf)
- ts-node (MIT https://github.com/TypeStrong/ts-node)
- tslint-eslint-rules (MIT https://github.com/buzinas/tslint-eslint-rules)
- rollup-plugin-sourcemap (MIT https://github.com/maxdavidson/rollup-plugin-sourcemaps)
- source-map-support (MIT https://github.com/evanw/node-source-map-support)
