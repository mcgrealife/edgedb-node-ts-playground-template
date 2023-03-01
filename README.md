[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mcgrealife/edgdedb-node-ts-playground-template)

- Modify the schema in `dbschema/default.esdl`, and save the file
- in the terminal, input `npm run migrate` which will create a migration file, apply it, then run all edgeql-js [generators](https://www.edgedb.com/docs/clients/js/generation)
- write queries using the `edgeql-js` [query builder](https://www.edgedb.com/docs/clients/js/querybuilder) in `src/index` with autocomplete from your schema!
- to execute the queries, `npm run start` and watch the console.
- optionally `edgedb ui` to interact with your edgedb instance via a beautiful ui. There you can view your model as a graph, or execute edgeql expressions in the REPL (edql syntax is different than the edgeql-js query builder though)