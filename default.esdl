# After editing: `npm run migrate` to create/apply migrations and run generators

module default {

  type Parent {
    property name -> str;
    multi link children -> Child;
  }

  type Child {
    property name -> str;
  }

}
