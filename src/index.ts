// To execute this edgedb query, `npm run start`
// For 'e' to access your latest schema, `npm run migrate`

import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const products = await e
  .select(e.Product, (product) => {
    // console.log('********', product.show_token_amount.toEdgeQL()) // DETACHED default::Product.show_token_amount
    //console.log('********', product.show_token_amount) //
    // console.log('1', e.cast(e.bool, product.show_token_amount))
    // console.log(
    //   '2',
    //   e.op(e.cast(e.bool, product.show_token_amount), 'and', true)
    // )
    // console.log(
    //   '3',
    //   e.op(
    //     'true branch',
    //     'if',
    //     e.op(e.cast(e.bool, product.show_token_amount), 'and', true),
    //     'else',
    //     'false branch'
    //   )
    // )
    return {
      // id: true,
      schema_computed_token: true,
      // computed: true ? e.cast(e.str, null) : e.cast(e.str, 'test'),
      //computed: e.cast(e.bool, product.show_token_amount),

      computed0: product.show_token_amount, // this returns false! as expected
      computed1: e.cast(e.bool, product.show_token_amount), // this returns false! as expected
      // but no matter how I try to extract the value of product.show_token_amount
      // in an e.op expression, it always evaluates to true
      computed2: e.op(product.show_token_amount, '=', true)
        ? product.token_amount
        : e.cast(e.str, null),

      computed3: e.op(e.cast(e.bool, product.show_token_amount), '=', true)
        ? product.token_amount
        : e.cast(e.str, null),

      computed4: e.op(
        e.cast(e.bool, product.show_token_amount),
        '=',
        e.cast(e.bool, true)
      )
        ? product.token_amount
        : e.cast(e.str, null),

      // COMPUTED 5 WINS
      computed5: e.op(
        product.token_amount,
        'if',
        e.op(
          e.cast(e.bool, product.show_token_amount),
          '=',
          e.cast(e.bool, true)
        ),
        'else',
        e.cast(e.int32, null)
      ),

      // show_token_amount: true,
      // show_token_amount: true,
      // token_amount: 2 * 2 == 5,
      // token_amount: e.op('not', e.bool(true)),
      // token_amount: e.op('exists', e.set('hi')),
      // token_amount: e.op(
      //   e.bool(true),
      //   'if',
      //   e.bool(true),
      //   'else',
      //   e.bool(false)
      // ),
      // token_amount: 2 * 2 == 5 ? true : false,
      // token_amount: e.cast(e.bool, product.show_token_amount),
      // token_amount: e.op(true, 'if', true, 'else', false),
      // computed_token: e.op(e.cast(e.bool, product.show_token_amount), 'and', true)
      //   ? product.token_amount
      //   : 0,
      // computed_token: e.op(
      //   product.token_amount,
      //   'if',
      //   e.op(product.show_token_amount, 'and', true),
      //   'else',
      //   e.cast(e.int32, '000')
      // ),
      // ? product.token_amount
      // : e.bool(false),
      // computed_token: e.cast(e.bool, product.show_token_amount)
      //   ? product.token_amount
      //   : e.bool(false),
      // computed_token: e.cast(e.bool, product.show_token_amount)
      //   ? product.token_amount
      //   : e.cast(e.bool, false),
      // computed_token: !e.op(product.show_token_amount, '=', false)
      //   ? product.token_amount
      //   : null,
      // computed_token: product.show_token_amount ? product.token_amount : null,
    }
  })
  .run(client)

console.log('edgeql query result:', products)
