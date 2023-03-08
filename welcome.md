# Please wait 

## Gitpod is initializing your workspace:
Via .gitpod.yml
- intall packages: `edgedb`, `@edgedb/generate`, `typescript`
- install `edgedb CLI`
- init edgedb project
- modify default schema
- run migrations


<img src='https://cdn.discordapp.com/icons/841451783728529451/82823a7a280d5ee5adc911a0f0708354.webp?size=64' alt='edgedb-logo' />

## Notes:
**Always fresh database** When your gitpod workspace restarts, objects created in your edgedb database will be deleted. (file changes are preserved for 14 days)

**Publish to git** To save your playground changes and share for troubleshooting
## Only Two Important Files
- schema `dbschema/default.esdl`
- query builder code `src/index.ts` 

## Commands
- `npm run migrate` - helper to create/apply migrations and run generators
- `npm run query` - **to execute your queries** transpiles ts to js, then runs node on 'dist/src/'
- `npm run ui` - returns edgedb ui link in terminal



