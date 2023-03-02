// import { createClient } from 'edgedb'
// import e from '../dbschema/edgeql-js/index.mjs'

// const client = createClient()

// const productsData = [
//   {
//     name: 'product1',
//     code: '123',
//     familyCode: '1234',
//     barcode: '12345',
//     color: {
//       name: 'color1',
//       code: 'color123',
//     },
//     size: {
//       name: 'size1',
//       code: 'size123',
//     },
//   },
//   {
//     name: 'product2',
//     code: '1234',
//     familyCode: '12345',
//     barcode: '123456',
//     color: {
//       name: 'color2',
//       code: 'color1234',
//     },
//     size: {
//       // name: 'size2', // to null case
//       code: 'size1234',
//     },
//   },
// ]

// export const insertProduct = async (products: typeof productsData) => {
//   const query = e.params(
//     {
//       items: e.array(
//         e.tuple({
//           name: e.str,
//           code: e.str,
//           familyCode: e.str,
//           barcode: e.str,
//           color: e.tuple({
//             name: e.str,
//             code: e.str,
//           }),
//           size: e.tuple({
//             name: e.str,
//             code: e.str,
//           }),
//         })
//       ),
//     },
//     (params) => {
//       return e.for(e.array_unpack(params.items), (item) => {
//         return e.insert(e.Product, {
//           name: item.name,
//           code: item.code,
//           familyCode: item.familyCode,
//           barcode: item.barcode,
//           color: e.assert_single(
//             e
//               .insert(e.Color, {
//                 name: item.color.name,
//                 code: item.color.code,
//               })
//               .unlessConflict((color) => ({
//                 on: color.name,
//                 else: color, // this returns the conflicting object!
//               }))
//           ),
//           size: e.assert_single(
//             e
//               .insert(e.Size, {
//                 name: item.size.name ?? e.str('test'), // handle null get here instead of in separare function (json_get returns an empty set if item.size.name does not exists)
//                 code: item.size.code,
//               })
//               .unlessConflict((size) => ({
//                 on: size.name,
//                 else: size, // this returns the conflicting object!
//               }))
//           ),
//         })
//       })
//     }
//   )
//   const result = await query.run(client, {
//     items: products,
//   })
//   console.log('result----> ', result)
// }
// insertProduct(productsData)

// // export function insert_size_unless_conflict_select(name: string, code: string) {
// //   if (!name) {
// //     return new Set()
// //   }
// //   return e.assert_single(
// //     e
// //       .insert(e.Size, {
// //         name: e.cast(e.str, name),
// //         code: e.cast(e.str, code),
// //       })
// //       .unlessConflict((size) => ({
// //         on: size.name,
// //         else: e.select(e.Size, (size) => ({
// //           id: true,
// //           filter: e.op(size.name, '=', e.cast(e.str, name)),
// //         })),
// //       }))
// //   )
// // }

// // SCHEMA
// /*
// type A {
//   multi link b -> B;
// }

// type B {
//   property name -> str;
// }
// */

// type Data = {
//   name?: string | string[]
// }

// const data: Data[] = [
//   {
//     name: ['item1', 'item2'],
//   },
//   {
//     name: 'item3',
//   },
//   {
//     // name: 'item4',
//   },
// ]

// const query = e.params(
//   {
//     items: e.array(
//       e.tuple({
//         name: e.str, // optional | string | string[]
//       })
//     ),
//   },
//   (params) => {
//     return e.for(e.array_unpack(params.items), (item) => {
//       return e.insert(e.A, {
//         b: e.insert(e.B, {
//           name: item.name,
//         }),
//       })
//     })
//   }
// )

// const result = query.run(client, {
//   items: data,
// })

export {}
