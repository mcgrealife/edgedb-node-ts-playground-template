# After editing: `npm run migrate` to create/apply migrations and run generators

module default {

  type Parent {
    property name -> str;
    property age -> int16;
    multi link children -> Child;
  }

  type Child {
    property name -> str;
  }

}
