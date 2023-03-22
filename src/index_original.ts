// // To execute this edgedb query, `npm run query`
// // For 'e' to reference your latest schema, `npm run migrate`
// // To view your database, `npm run ui`

// import { createClient } from 'edgedb'
// import e from '../dbschema/edgeql-js/index.mjs'

// const client = createClient()
// // Only difference between query1 and query2 is `filter`
// const query1 = e.params({ age: e.optional(e.int16) }, ($) =>
//   e.select(e.Person, (p) => ({
//     filter: e.op(p.age, '>', $.age), // always empty set (i.e. cartesian product)
//   }))
// )
// // query 1 tests
// console.log('expect [] -> ', await query1.run(client, {}))
// console.log('expect [] -> ', await query1.run(client, { age: null }))

// const query2 = e.params({ age: e.optional(e.int16) }, ($) =>
//   e.select(e.Person, (p) => ({
//     filter: e.op(
//       e.op(p.age, '>', $.age), // the original filter
//       'if',
//       e.op('exists', $.age), // check for optional
//       'else',
//       e.bool(true) // else return true
//     ),
//   }))
// )
// // query2 tests
// console.log('expect [{id:123}] -> ', await query2.run(client, {}))
// console.log('expect [{id:123}] -> ', await query2.run(client, { age: null }))

// // This gets extremely tedious when filtering for multiple values
// e.op(e.op(optionalFilter1, 'and', optionalFilter2), 'and', optionalFilter3) // etc
// // where each optional filter is an if/else with 'exists' operator

// // this is becomes even more verbose when params are e.json() and require e.casts

// // optional params only work top level. I store filters in an object like this
// const filters = {
//   age: 14,
//   coords: {
//     latitude: 1234,
//     longitude: 5678,
//   },
// }
// // but to use optional params, I must flatten the object to
// const filters = {
//   age: 14,
//   coordsLatitude: 1234,
//   coordsLongitude: 5678,
// }
// // a minor inconvenience to avoid the more verbose e.cast() when using e.json() params -- especially when checking each filter value for optional e.op('exists) in a ternary op

export {}
