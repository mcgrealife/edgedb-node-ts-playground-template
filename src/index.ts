import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const productsData = [
  {
    name: 'product1',
    code: '123',
    familyCode: '1234',
    barcode: '12345',
    color: {
      name: 'color1',
      code: 'color123',
    },
    size: {
      name: 'size1',
      code: 'size123',
    },
  },
  {
    name: 'product2',
    code: '1234',
    familyCode: '12345',
    barcode: '123456',
    color: {
      name: 'color2',
      code: 'color1234',
    },
    size: {
      // name: 'size2', // to null case
      code: 'size1234',
    },
  },
]

export const insertProduct = async (products: typeof productsData) => {
  const query = e.params({ items: e.json }, (params) => {
    return e.for(e.json_array_unpack(params.items), (item) => {
      return e.insert(e.Product, {
        name: e.cast(e.str, item.name),
        code: e.cast(e.str, item.code),
        familyCode: e.cast(e.str, item.familyCode),
        barcode: e.cast(e.str, item.barcode),
        color: e.assert_single(
          e
            .insert(e.Color, {
              name: e.cast(e.str, item.color.name),
              code: e.cast(e.str, item.color.code),
            })
            .unlessConflict((color) => ({
              on: color.name,
              else: color, // this returns the conflicting object!
            }))
        ),
        size: e.assert_single(
          e
            .insert(e.Size, {
              name: e.cast(e.str, e.json_get(item.size, 'name')), // handle null get here instead of in separare function (json_get returns an empty set if item.size.name does not exists)
              code: e.cast(e.str, item.size.code),
            })
            .unlessConflict((size) => ({
              on: size.name,
              else: size, // this returns the conflicting object!
            }))
        ),
      })
    })
  })
  const result = await query.run(client, {
    items: products,
  })
  console.log('result----> ', result)
}
insertProduct(productsData)

// export function insert_size_unless_conflict_select(name: string, code: string) {
//   if (!name) {
//     return new Set()
//   }
//   return e.assert_single(
//     e
//       .insert(e.Size, {
//         name: e.cast(e.str, name),
//         code: e.cast(e.str, code),
//       })
//       .unlessConflict((size) => ({
//         on: size.name,
//         else: e.select(e.Size, (size) => ({
//           id: true,
//           filter: e.op(size.name, '=', e.cast(e.str, name)),
//         })),
//       }))
//   )
// }
