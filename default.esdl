# What is this?: This type Example only exists for the example query builder in src/index.ts
# You can change type Example to anything. See Edgedb schema modeling documentation at https://www.edgedb.com/docs/datamodel/index

module default {

  type Example {
    property name -> str;
  }

}

# After editing: `npm run migrate` in this VScode browser's integrated terminal