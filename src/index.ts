// To execute this edgedb query, `npm run start`
// For 'e' to access your latest schema, `npm run migrate`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const data = {
  // name: 'Jack',
  human: true,
}

const query = e.params({ name: e.optional(e.str), human: e.bool }, (params) =>
  e.select(
    e.insert(e.Example, {
      name: params.name,
      human: params.human,
    }),
    (example) => e.Example['*']
    // (example) => example['*'] // does not work
  )
)

const result = await query.run(client, data)

console.log('edgeql query result:', result)
