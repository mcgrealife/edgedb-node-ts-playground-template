import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const productsData = [
  {
    name: 'zapatilla Nike Air Power Mini 2',
    barcode: '922922342422551529',
    familyCode: '4973',
    code: '4973-2792',
    color: { name: 'azul', code: 'az' },
    size: { name: 'test1', size: 'size1' },
  },
]

export const insertProduct = async (products: typeof productsData) => {
  const query = e.params({ items: e.json }, (params) => {
    return e.for(e.json_array_unpack(params.items), (item) => {
      // e.op() if statement cannot be used inside e.insert()
      // so instead, we use composable queries inside the for loop
      // and express the if logic in javascript before the return statements!

      // baseProduct expression used in either if branch
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
      // here is the if logic // e.json_get() is still required, because item.size?.name always passes the size?, since size has other edgeql properties on it
      if (e.op('exists', e.json_get(item.size, 'name'))) {
        // this might need a e.op(e.json_get(),"=", empty set?)
        const createdSize = e.insert(e.Size, {
          name: e.cast(e.str, item.name.size),
          code: e.cast(e.str, item.name.code),
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
        // return e.update(e.Product, (product) => ({
        //   // filter_single: e.op(product, '=', baseProduct),
        //   set: {
        //     size: createdSize,
        //   },
        // }))
      } else return baseProduct
    })
  })
  const result = await query.run(client, {
    items: products,
  })
  console.log('result----> ', result)
}
insertProduct(productsData)
