## Your gitpod workspace restarted

This happens if the workspace *sleeps*, or is manually *shutdown*.

Your database has been reset, but **all other files are persisted**.

For long term *storage*, and help *troubleshooting your schema*, **git publish**. 

Then, share your repository for help troubleshooting your schema (using your '*Open in Gitpod*' button)

---
As a Reminder:

### Files
`dbschema/default.edsl` - Schema

`src/index.ts` - Example query Builder


### Commands
- `yarn migrate` - creates and applies migrations
- `yarn start` - transpiles ts to js, outputs to 'dist/src/'
- `yarn ui` - returns edgedb ui link in terminal