CREATE MIGRATION m13zpb3ck7hcyuytm3qw3akz3s6uuqzkb3alhn64e736hyqhbdpmhq
    ONTO m14astslfq5rzdw6yh3itgkjqa6odo5xi7btofohhcyrm4pzdj3l4q
{
  ALTER TYPE default::Color {
      ALTER PROPERTY code {
          SET REQUIRED USING ('test');
      };
  };
  ALTER TYPE default::Color {
      CREATE REQUIRED PROPERTY createdAt -> std::datetime {
          SET default := (std::datetime_current());
      };
      ALTER PROPERTY name {
          SET REQUIRED USING ('name');
      };
  };
  ALTER TYPE default::Product {
      ALTER PROPERTY barcode {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Product {
      ALTER PROPERTY code {
          RENAME TO sellingUnitComment;
      };
  };
  ALTER TYPE default::Product {
      DROP PROPERTY name;
  };
  ALTER TYPE default::Size {
      ALTER PROPERTY code {
          SET REQUIRED USING ('code');
      };
  };
  ALTER TYPE default::Size {
      CREATE REQUIRED PROPERTY createdAt -> std::datetime {
          SET default := (std::datetime_current());
      };
      ALTER PROPERTY name {
          SET REQUIRED USING ('size');
      };
  };
};
