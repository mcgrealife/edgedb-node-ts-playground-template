// To execute this edgedb query, `npm run start`
// For 'e' to access your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const query = e.insert(e.Parent, {
  name: 'parent',
  children: e.insert(e.Child, {
    name: 'child',
  }),
})

const result = await query.run(client)

console.log('query result:', result)
