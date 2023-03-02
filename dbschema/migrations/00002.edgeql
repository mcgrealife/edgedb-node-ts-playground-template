CREATE MIGRATION m1ryj26azg3xcrcse6mfdqmecrxoxuqerizsk5k2tihaubhmmc55qq
    ONTO m1bccygtvh2jmel3hpvqooaq22yuwyrhu5ilc6cmrsxithnbmtipkq
{
  ALTER TYPE default::Example RENAME TO default::Color;
  ALTER TYPE default::Color {
      CREATE PROPERTY code -> std::str;
  };
  CREATE TYPE default::Size {
      CREATE PROPERTY code -> std::str;
      CREATE PROPERTY name -> std::str;
  };
  CREATE TYPE default::Product {
      CREATE LINK color -> default::Color;
      CREATE LINK size -> default::Size;
      CREATE PROPERTY barcode -> std::str;
      CREATE PROPERTY code -> std::str;
      CREATE PROPERTY familyCode -> std::str;
      CREATE PROPERTY name -> std::str;
  };
};
