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