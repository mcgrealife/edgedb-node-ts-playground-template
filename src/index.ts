// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const query = e.params(
  { name: e.optional(e.str), age: e.optional(e.int16) },
  ($) =>
    e.select(e.Parent, (p) => ({
      filter: e.op(p.age, '>', $.age),
      ...p['*'],
    }))
)

// const result = await query.run(client)
const result = await query.run(client, { name: 'roger', age: null })
const result1 = await query.run(client, { name: 'roger', age: 5 })
const result2 = await query.run(client, { name: 'roger' })

// console.log('query result:', result) // returns empty set 
// console.log('query result1:', result1) // filters as expected
// console.log('query result2:', result2) // returns empty set

const query2 = e.params(
  { name: e.optional(e.str), age: e.optional(e.int16) },
  ($) =>
    e.select(e.Parent, (p) => ({
      filter: e.op(
        e.op(p.age, '>', $.age),
        'if',
        e.op('exists', $.age),
        'else',
        e.bool(true)
      ),
      ...p['*'],
    }))
)

console.log('query2', await query2.run(client, {})) // works!
