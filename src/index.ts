// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

// THIS WORKS with .toml version 2.12 (but not in my production at 2.11)
const queryWithParams = e.params({ buildingName: e.str }, ($) =>
  e.group(
    e.select(e.Building, (b) => ({
      filter_single: { name: $.buildingName },
      units: {
        ...e.Unit['*'],
      },
    })).units,
    (unit) => {
      return {
        floorplan: {
          ...unit.floorplan['*'],
        },
        ...unit['*'],
        by: { bedroomCount: unit.floorplan.bedroomCount },
      }
    }
  )
)

console.log('...running e.group(e.select()) query')
const result = await queryWithParams.run(client, {
  buildingName: 'building1',
})

console.log(
  'query result:',
  '\n',
  '`elements` is an array of `units`, but the `unit` object is missing `floorplan`',
  '\n',
  '`floorplan` data WAS used by e.group() though, because the data is grouped by floorplan.bedroomCount',
  JSON.stringify(result, null, '\t')
)
