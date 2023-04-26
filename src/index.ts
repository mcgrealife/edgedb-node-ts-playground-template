// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

// insert 3 children in the repl `edgedb` then `insert Child` (alt enter) 3 times // then copy and paste one of the ids below
const children = [{ id: '58aac3c4-e446-11ed-a4da-c7cfc8c50b68' }]

const query = e.params(
  {
    title: e.str,
    tags: e.optional(e.array(e.tuple({ id: e.uuid }))),
  },
  ($) =>
    e.insert(e.Parent, {
      name: $.title,
      children: e.select(e.Child, (tag) => ({
        filter: e.op(tag.id, 'in', e.array_unpack($.tags).id),
      })),
    })
)

const result = await query.run(client, { title: 'test', tags: children })

console.log('query result:', result)
