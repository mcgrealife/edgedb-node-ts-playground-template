# What is this?: This type Example only exists for the example query builder in src/index.ts
# You can change type Example to anything. See Edgedb schema modeling documentation at https://www.edgedb.com/docs/datamodel/index

module default {

type Product {
  required property show_token_amount -> bool;
  required property token_amount -> int32;
  property schema_computed_token := .token_amount if .show_token_amount = true else <int32>{}
}

}

# After editing: `npm run migrate` in this VScode browser's integrated terminal