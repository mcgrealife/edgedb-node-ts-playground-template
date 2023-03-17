# After editing: `npm run migrate` to create/apply migrations and run generators

module default {

  type Building {
    multi link units -> Unit;
    required property name -> str {
      constraint exclusive;
    }
  }

  type Unit {
    link floorplan -> Floorplan;
    property name -> str;
  }
  type Floorplan {
    property name -> str;
    property bedroomCount -> int16;
  }

}
