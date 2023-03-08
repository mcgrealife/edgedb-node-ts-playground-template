// To execute this edgedb query, `yarn query`
// For 'e' to reference your latest schema, `yarn migrate`
// To view your database, `yarn ui`

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
