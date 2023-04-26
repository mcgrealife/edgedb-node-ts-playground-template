// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const insertQueries = ['1', '2', '3'].map((i) =>
  e.insert(e.Parent, {
    name: e.str(i),
  })
)

const result = e.with([insertQueries], insertQueries).run(client) // error

console.log('query result:', result)
