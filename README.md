# node-ts_nodemon_tsc

- installed `tsc`, `nodemon`, and `ts-node` manually
- in tsconfig manually specified out to directory to `./dist`
- can run index.ts via `npm start`
- OR via `node dist` which will execute the javascript files output by tsc to /dist folder


negatives:
- default tsc is using old es2015 and commonjs

poitives:
- easy to see which folder nodemon is watching


questions/issues:
- `ts-node` works via npm start command, but not when I invoke it manually in the terminal? i.e. I cannot `ts-node src/index.ts` from the terminal. Why? I've achieved this in other projects. Does it somehow only work with nodemon?



# upgrading to ESmodule
- in package.json
  - add `"type": "module"`
- in tsconfig
  - change `"module": "commonjs"` to `"module": "NodeNext"`
  - add `"moduleResolution": "NodeNext"`
    - NOTE: this requires specifying imports with file extensions
      - (for local file imports)
      - note for imports from node modules
    - the benefit to this is that nodeNext also allows imported commonJS modules side-by-side (i.e. we can also import `.cjs` files)
    - better interop between commonJS and ESM
  - change `"target": "es2016"` to something higher, such as  `"target": "ES2020"` or `"target": "ESNext"`
  - add `"sourcemMap": true` to help with debugging
  - keep `"ourDir": ./dist` 
  - add `"include": ["src"]` ? or `"include": ["src/**/*"]`
- run `npm run build` 