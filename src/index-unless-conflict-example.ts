// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

// example using e.json
e.params({ items: e.json }, (params) => {
  return e.for(e.json_array_unpack(params.items), (item) => {
    return e.insert(e.Product, {
      color: e.for(e.set(e.json_get(item, 'color', 'name')), (optionalItem) => {
        return e
          .insert(e.Color, {
            name: e.cast(e.str, optionalItem),
            code: 'code',
          })
          .unlessConflict((color) => ({
            on: color.name,
            else: color,
          }))
      }),
    })
  })
}).run(createClient(), {
  items: [
    {
      color: { name: 'testingConflict' },
    },
    {
      color: { name: 'testingConflict' },
    },
  ],
})

// example using e.tuples, type errors
// e.params(
//   { items: e.array(e.tuple({ color: e.tuple({ name: e.str }) })) },
//   (params) => {
//     return e.for(params.items, (item) => {
//       return e.insert(e.Product, {
//         color: e.for(e.set(item.color.name), (optionalItem) => {
//           return e
//             .insert(e.Color, {
//               name: e.cast(e.str, optionalItem),
//               code: 'code',
//             })
//             .unlessConflict((color) => ({
//               on: color.name,
//               else: color,
//             }))
//         }),
//       })
//     })
//   }
// ).run(createClient(), {
//   items: [
//     {
//       color: { name: 'testingConflict' },
//     },
//     {
//       color: { name: 'testingConflict' },
//     },
//   ],
// })
