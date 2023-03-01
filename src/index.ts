// To execute this edgedb query, `npm run start`
// For 'e' to access your latest schema, `npm run migrate`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const query = e.insert(e.Example, {
  name: 'test name',
})

const result = await query.run(client)

console.log('edgeql query result:', result)
