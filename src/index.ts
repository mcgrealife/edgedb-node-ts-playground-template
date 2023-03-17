// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const queryWithParams = e.params({ buildingName: e.str }, ($) =>
  e.group(
    e.select(e.Building, (b) => ({
      filter_single: { name: $.buildingName },
      units: {
        ...e.Unit['*'], // includes floorplan
      },
    })).units,
    (unit) => {
      // `unit` includes floorplan
      return {
        ...unit['*'], // does not include floorplan
        // ...e.Unit['*'], // does not include floorplans either
        by: { bedroomCount: unit.floorplan.bedroomCount }, // groups by floorplan successfully
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
