module default {

  # AFTER EDITING: input `npm run migrate` in this VScode browser's integrated terminal

  # Below is an example type. It only exists so the example query builder in src/index works. You can overwrite it with your own type, then modify the query builder in src/index.
  # see Edgedb schema modeling documentation at https://www.edgedb.com/docs/datamodel/index
  # when you're done editing, save the file, and in the terminal, input `npm run migrate` this will handle the edgedb migration create/apply and edgeql generator commands for you (then, the query builder in src/index will autocomplete based on your new schema)

  type Example {
    property name -> str;
  }

}