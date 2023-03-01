# Click this button
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mcgrealife/edgdedb-node-ts-playground-template)

Setup takes around 1 minute

## After setup, **two important files** will be opened in **tabs**
1. `dbschema/default.esdl`: *your database schema*
2. `src/index.ts`: *the query builder*

**Read** the **comments** in each file


#### Side-by-side editor panes recommended
![recommend-dragging-side-by-side-editor-pane](https://user-images.githubusercontent.com/11381911/222273526-c1230d51-c6d8-422d-9bf5-5a878b38a025.gif)



### Terminal Commands
> These commands are also documented as comments in each file
- after **editing your schema** in `dbschema/default.edsl`, save the file, and `npm run migrate` to run migrations and generators
- after **editing your query builder code** in `src/index.ts`, save the file, and `npm run start` to execute the edgedb query
- *optionally view the edgedb ui via `npm run ui`*
