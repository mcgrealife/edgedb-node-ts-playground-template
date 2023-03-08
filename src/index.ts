// To execute this edgedb query, `npm run query`
// For 'e' to reference your latest schema, `npm run migrate`
// To view your database, `npm run ui`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

// random strings to re-run script without encountering exclusive contraint error
const randomString = () => Math.ceil(Math.random() * 10000).toString()

const products = [
  {
    name: 'test1',
    sellingUnitComment: 'insert only color, with unique name',
    barcode: randomString(),
    familyCode: '4973',
    code: '4973-2792',
    color: { name: 'color.name' + randomString(), code: 'color.code' },
  },
  {
    name: 'test2',
    sellingUnitComment: 'insert only size, with unique name',
    barcode: randomString(),
    familyCode: '4973',
    code: '4973-2792',
    size: { name: 'size.name' + randomString(), code: 'size.code' },
  },
  {
    name: 'test3',
    sellingUnitComment: 'test missing size and color keys entirely',
    barcode: randomString(),
    familyCode: '4973',
    code: '4973-2792',
  },
  {
    name: 'test4',
    sellingUnitComment:
      'test color and size keys exist, but containing empty objects {}',
    barcode: randomString(),
    familyCode: '4973',
    code: '4973-2792',
    color: {},
    size: {},
  },
  // THESE TESTS FAIL. This for loop method decribed here might doesn't seem to handle .unlessConflict() as expected https://discord.com/channels/841451783728529451/1071024789243822130/1072145084843298967
  // {
  //   name: 'test5',
  //   sellingUnitComment:
  //     'create color.name with fixed string, to test unlessConflict in next test',
  //   barcode: randomString(),
  //   familyCode: '4973',
  //   code: '4973-2792',
  //   color: { name: 'testingConflict', code: 'az' },
  // },
  // {
  //   name: 'test6',
  //   sellingUnitComment:
  //     'non-unique color.name should trigger unlessConflict and insert existing color',
  //   barcode: randomString(),
  //   familyCode: '4973',
  //   code: '4973-2792',
  //   color: { name: 'testingConflict', code: 'az' },
  // },
]

const query = e.params({ items: e.json }, (params) => {
  return e.for(e.json_array_unpack(params.items), (item) => {
    return e.insert(e.Product, {
      name: e.cast(e.str, item.name),
      code: e.cast(e.str, item.code),
      familyCode: e.cast(e.str, item.familyCode),
      barcode: e.cast(e.str, item.barcode),
      sellingUnitComment: e.cast(e.str, item.sellingUnitComment),
      color: e.for(
        e.tuple({
          name: e.json_get(item, 'color', 'name'),
          code: e.json_get(item, 'color', 'code'),
        }),
        (optionalItem) => {
          return e
            .insert(e.Color, {
              name: e.cast(e.str, optionalItem.name),
              code: e.cast(e.str, optionalItem.code),
            })
            .unlessConflict((color) => ({
              on: color.name,
              else: color,
            }))
        }
      ),
      size: e.for(
        e.tuple({
          name: e.json_get(item, 'size', 'name'),
          code: e.json_get(item, 'size', 'code'),
        }),
        (optionalItem) => {
          return e
            .insert(e.Size, {
              name: e.cast(e.str, optionalItem.name),
              code: e.cast(e.str, optionalItem.code),
            })
            .unlessConflict((size) => ({
              on: size.name,
              else: size,
            }))
        }
      ),
    })
  })
})
const result = await query.run(client, {
  items: products,
})
console.log('result----> ', result)
