import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const query = e.insert(e.Example, {
  name: 'test name',
})

const result = await query.run(client)

console.log('edgeql query result:', result)
