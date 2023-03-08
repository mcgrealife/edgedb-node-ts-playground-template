# After editing: `npm run migrate` to create/apply migrations and run generators

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

}