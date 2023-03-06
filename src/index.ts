import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

// random strings to re-run script without encountering exclusive contraint error
const randomString = Math.ceil(Math.random() * 10000).toString()

const productsData = [
  {
    name: 'zapatilla Nike Air Power Mini 2',
    barcode: randomString,
    familyCode: '4973',
    code: '4973-2792',
    // color: { name: 'azul' + randomString, code: 'az' },
    // color: {},
    // size: {},
    // size: { name: 'size.name' + randomString, code: 'code1' }, // uncomment to test else branch
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
        color: e.op('exists', e.json_get(item.color, 'name')) // 'exists' returns true if empty set (and json_get returns empty set if property does not exist)
          ? null
          : e.insert(e.Color, {
              name: e.cast(e.str, item.color.name),
              code: e.cast(e.str, item.color.code),
            }),
        size: e.op('exists', e.json_get(item, 'size', 'name')) // json_get can accept multiple paths arguments, i.e. if item.size might not exist also. (Though it seems to work either way)
          ? null
          : e.insert(e.Size, {
              name: e.cast(e.str, item.size.name),
              code: e.cast(e.str, item.size.code),
            }),
      })
    })
  })
  const result = await query.run(client, {
    items: products,
  })
  console.log('result----> ', result)
}
insertProduct(productsData)
