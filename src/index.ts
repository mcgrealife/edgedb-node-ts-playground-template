// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e, { $infer } from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const query = e.params(
  {
    split: e.bool,
  },
  ($) =>
    e.op(
      e.select(e.str('true')),
      'if',
      e.op($.split, '=', e.bool(true)),
      'else',
      e.select(e.str('false')) // oh the if/else branches must be of same type though
      // e.select(e.bool(false)) // returning bool here does not cause inferred type to be a union of `string | boolean`. // next best is probably portable shapes to resuse logic between queries
    )
)

type inferredType = $infer<typeof query> // string

const expectTrue = await query.run(client, { split: false })
const expectFalse = await query.run(client, { split: true })

console.log('expectTrue:', expectTrue)
console.log('expectFalse:', expectFalse)
console.log()
