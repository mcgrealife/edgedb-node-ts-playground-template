// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()


const query1 = e.params({ age: e.optional(e.int16) }, ($) =>
  e.select(e.Person, (p) => ({
    filter: e.op(e.op(p.age, '>', $.age), '??', e.bool(true)), // returns true without a verbose if/else operator!
  }))
)
// query 1 tests
console.log('expect values! -> ', await query1.run(client, {}))
console.log('expect values! -> ', await query1.run(client, { age: null }))