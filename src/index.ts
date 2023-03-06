// To execute this edgedb query, `npm run start`
// For 'e' to access your latest schema, `npm run migrate`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const data = [
  {
    name: 'string',
  },
  {
    name: ['array', 'of', 'strings'],
  },
  {
    // empty, name key does not exist
  },
]
// NOTE: I cannot find a way to type a union param. But it does work when params is types as e.json, and then checked on insertion instead

// This works! for checking if it's an array or not
const query = e.params({ items: e.json }, (params) =>
  e.for(e.json_array_unpack(params.items), (item) =>
    e.insert(e.Example, {
      name: e.op(
        'true',
        'if',
        e.op(e.json_typeof(item.name), '=', 'array'),
        'else',
        'false'
      ),
    })
  )
)

const result = await query.run(client, { items: data })

console.log('edgeql query result:', result)
