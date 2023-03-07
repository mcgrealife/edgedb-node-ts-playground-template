# Edgedb schema docs https://www.edgedb.com/docs/datamodel/index

module default {

  type Parent {
    property name -> str;
    multi link children -> Child;
  }

  type Child {
    property name -> str;
  }

}

# After editing: `npm run migrate` in this VScode browser's integrated terminal