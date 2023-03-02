# What is this?: This type Example only exists for the example query builder in src/index.ts
# You can change type Example to anything. See Edgedb schema modeling documentation at https://www.edgedb.com/docs/datamodel/index

module default {

type Product {
    property name -> str;
    property code -> str;
    property familyCode -> str;
    property sellingUnitComment -> str;
    property barcode -> str {
      constraint exclusive
    };
    link color -> Color;
    link size -> Size;
  }

  type Color {
    required property name -> str {
      constraint exclusive;
    };
    required property code -> str;
    required property createdAt -> datetime { default := datetime_current() };
  }

  type Size {
    required property name -> str {
      constraint exclusive;
    };
    required property code -> str;
    required property createdAt -> datetime { default := datetime_current() };
  }


type A {
  multi link b -> B;
}

type B {
  property name -> str;
}

}

# AFTER EDITING: save, and then `npm run migrate` in this VScode browser's integrated terminal