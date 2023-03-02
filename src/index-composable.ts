import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const productsData = [
  {
    name: 'zapatilla Nike Air Power Mini 2',
    // barcode: '9229223424225515292',
    barcode: (Math.random() * 100 * (Math.random() * 100)).toString(),
    familyCode: '4973',
    code: '4973-2792',
    color: { name: 'azul' + Math.random().toString(), code: 'az' },
    // size: { name: 'test1' + Math.random().toString(), code: 'code1' },
    size: {},
  },
]

export const insertProduct = async (products: typeof productsData) => {
  const query = e.params({ items: e.json }, (params) => {
    return e.for(e.json_array_unpack(params.items), (item) => {
      const baseProduct = e.insert(e.Product, {
        name: e.cast(e.str, item.name),
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
              else: color,
            }))
        ),
      })

      if (
        e.op('exists', e.json_get(item.size, 'name')) &&
        e.op('exists', e.json_get(item.size, 'code'))
      ) {
        return baseProduct
      } else {
        const createdSize = e.insert(e.Size, {
          name: e.cast(e.str, item.size.name),
          code: e.cast(e.str, item.size.code),
        })
        return e.insert(e.Product, {
          name: e.cast(e.str, item.name),
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
                else: color,
              }))
          ),
          size: createdSize,
        })
      }
    })
  })
  const result = await query.run(client, {
    items: products,
  })
  console.log('result----> ', result)
}
insertProduct(productsData)
