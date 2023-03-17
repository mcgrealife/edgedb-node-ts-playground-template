// populates database
import { createClient } from 'edgedb'
import e from '../dbschema/edgeql-js/index.mjs'

const client = createClient()

const data = [
  {
    name: 'building1',
    units: [
      {
        name: 'unit1',
        floorplan: {
          name: 'floorplan',
          bedroomCount: 1,
        },
      },
      {
        name: 'unit2',
        floorplan: {
          name: 'floorplan',
          bedroomCount: 1,
        },
      },
      {
        name: 'unit3',
        floorplan: {
          name: 'floorplan',
          bedroomCount: 2,
        },
      },
      {
        name: 'unit4',
        floorplan: {
          name: 'floorplan',
          bedroomCount: 3,
        },
      },
    ],
  },
]

e.params(
  {
    data: e.array(
      e.tuple({
        name: e.str,
        units: e.array(
          e.tuple({
            name: e.str,
            floorplan: e.tuple({ name: e.str, bedroomCount: e.int16 }),
          })
        ),
      })
    ),
  },
  ($) =>
    e.for(e.array_unpack($.data), ($$) =>
      e.insert(e.Building, {
        name: $$.name,
        units: e.for(e.array_unpack($$.units), ($$$) =>
          e.insert(e.Unit, {
            name: $$$.name,
            floorplan: e.insert(e.Floorplan, {
              name: $$$.floorplan.name,
              bedroomCount: $$$.floorplan.bedroomCount,
            }),
          })
        ),
      })
    )
).run(client, { data })
