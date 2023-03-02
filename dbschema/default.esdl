# What is this?: This type Example only exists for the example query builder in src/index.ts
# You can change type Example to anything. See Edgedb schema modeling documentation at https://www.edgedb.com/docs/datamodel/index

module default {

type Product {
  property name -> str;
  property code -> str;
  property barcode -> str;
  property familyCode -> str;
  link color -> Color; 
  link size -> Size;
}

type Color {
  property name -> str {
    constraint exclusive;
  }
  property code -> str;
}

type Size {
  property name -> str {
    constraint exclusive;
  }
  property code -> str;
}

}

# AFTER EDITING: save, and then `npm run migrate` in this VScode browser's integrated terminal