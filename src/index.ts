// To execute this edgedb query, `yarn query`
// For 'e' to reference your latest schema, `yarn migrate`
// To view your database, `yarn ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const succint = e.select(e.Example, (object) => ({
  name: e.op(e.array_get(e.str_split(object.name, '::'), 1), '??', 'unknown'),
}))

const verbose = e.select(e.Example, (object) => {
  const arrayValue = e.array_get(e.str_split(object.name, '::'), 1)
  return {
    name: e.op(arrayValue, 'if', e.op('exists', arrayValue), 'else', 'unknown'),
  }
})

const result = await succint.run(client)

console.log('query result:', result)
