## Your gitpod workspace restarted

This happens if the workspace *sleeps*, or is manually *shutdown*.

Gitpod is *reinstalling edgedb cli* and *relinking your project* now.

Your database has been reset, but **all other files were persisted**.

For long term *storage*, and help *troubleshooting your schema*, **git publish**. 

Then, share your repository for help troubleshooting your schema (using your '*Open in Gitpod*' button)

---
As a Reminder:

### Files
`dbschema/default.edsl` - Schema

`src/index.ts` - Example query Builder


### Commands
- `yarn migrate` - helper to create/apply migrations and run generators
- `yarn query` - **to execute your queries** transpiles ts to js, then runs node on 'dist/src/'
- `yarn ui` - returns edgedb ui link in terminal